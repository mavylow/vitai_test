"use client";

import "./style.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const MINSK_OFFSET_MS = 3 * 60 * 60 * 1000;
const THURSDAY = 4;
const FRIDAY = 5;

const ROAST_START_HOUR = 9;
const DELIVERY_END_HOUR = 20;

const pad = (n: number) => String(n).padStart(2, "0");

function nextOccurrence(minskNow: Date, weekday: number, hour: number): Date {
  const daysAhead = (weekday - minskNow.getUTCDay() + 7) % 7;
  const target = new Date(
    Date.UTC(
      minskNow.getUTCFullYear(),
      minskNow.getUTCMonth(),
      minskNow.getUTCDate() + daysAhead,
      hour
    )
  );
  if (target.getTime() <= minskNow.getTime()) {
    target.setUTCDate(target.getUTCDate() + 7);
  }
  return target;
}

function formatCountdown(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return {
    days,
    text: `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`,
    iso: `P${days}DT${hours}H${minutes}M${seconds}S`,
  };
}

export default function RoastSchedule() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const minskNow = now ? new Date(now.getTime() + MINSK_OFFSET_MS) : null;

  const countdown = minskNow
    ? formatCountdown(
        nextOccurrence(minskNow, THURSDAY, ROAST_START_HOUR).getTime() -
          minskNow.getTime()
      )
    : null;

  const delivery = minskNow
    ? nextOccurrence(minskNow, FRIDAY, DELIVERY_END_HOUR)
    : null;

  const deliveryIso = delivery
    ? `${delivery.getUTCFullYear()}-${pad(delivery.getUTCMonth() + 1)}-${pad(
        delivery.getUTCDate()
      )}`
    : null;
  const deliveryText = delivery
    ? `${pad(delivery.getUTCDate())}.${pad(
        delivery.getUTCMonth() + 1
      )}.${delivery.getUTCFullYear()}`
    : null;

  return (
    <>
      <div className="brown-layout timer">
        <div className="container">
          <Image src="/alarm.svg" width={32} height={32} alt="" />
          <div>
            <h3>Обжариваем кофе по четвергам</h3>
            <p>Доставляем по пятницам</p>
          </div>
        </div>
        <div className="container">
          <p>До обжарки осталось</p>
          {countdown ? (
            <time className="timer-value" dateTime={countdown.iso}>
              {countdown.days > 0 && `${countdown.days} дн. `}
              {countdown.text}
            </time>
          ) : (
            <span className="timer-value" aria-hidden="true">
              -- : -- : --
            </span>
          )}
        </div>
      </div>

      <div className="brown-layout date">
        <Image src="/truck.svg" width={32} height={32} alt="" />
        <div className="container">
          <h3>Ближайшая доставка по Минску</h3>
          {deliveryIso && deliveryText ? (
            <time dateTime={deliveryIso}>{deliveryText}</time>
          ) : (
            <span>по пятницам</span>
          )}
        </div>
      </div>
    </>
  );
}
