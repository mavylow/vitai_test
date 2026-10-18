"use client";

import "./style.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ButtonLink from "../../components/Button";

const links = [
  { href: "#coffee", label: "Кофе" },
  { href: "#subscription", label: "Подписка" },
  { href: "#delivery", label: "Доставка" },
  { href: "#about-us", label: "О нас" },
  { href: "#contacts", label: "Контакты" },
];
const HEADER_HEIGHT = 60;
export default function Header() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const sentinel = document.getElementById("hero-end");
    if (!sentinel) {
      setPastHero(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(
          !entry.isIntersecting && entry.boundingClientRect.top < HEADER_HEIGHT
        );
      },

      { rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px` }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`${open ? "is-open" : ""} ${pastHero ? "filled" : ""}`}>
      <a href="#" aria-label="Кварта — в начало страницы">
        <Image src="/logo.svg" width={50} height={50} alt="" />
        <span>kvarta</span>
      </a>

      <nav
        id="main-nav"
        aria-label="Основная навигация"
        className={open ? "is-open" : undefined}
      >
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ButtonLink text="Оформить заказ" href={"#order"} />

      <button
        ref={burgerRef}
        type="button"
        className="burger"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="burger-line" aria-hidden="true" />
        <span className="burger-line" aria-hidden="true" />
        <span className="burger-line" aria-hidden="true" />
      </button>
    </header>
  );
}
