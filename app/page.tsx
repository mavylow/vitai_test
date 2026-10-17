import Image from "next/image";
import RoastSchedule from "./components/RoastSchedule";
import Header from "./components/Header";
import ButtonLink from "./components/Button";
import { products } from "./utils/const";
import CoffeeCard from "./components/CoffeeCard";
import Form from "./components/Form";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" aria-labelledby="hero-title">
          <Image
            src="/main_background.png"
            alt=""
            fill
            priority
            className="background-image"
          />
          <div className="hero-text-container">
            <h1 id="hero-title">
              Обжарили в четверг.
              <br />
              Привезли в пятницу.
            </h1>
            <p>маленькая минская мастерская «Кварта»</p>
            <ButtonLink text="Оформить заказ" href={"#order"} />
          </div>

          <div id="hero-end" className="hero-end" aria-hidden="true" />
        </section>

        <section id="freshness" aria-labelledby="freshness-title">
          <div className="brown-layout">
            <h2 id="freshness-title">Кофе, как хлеб, лучше свежим</h2>
            <p>
              После обжарки зерно раскрывается, а потом аромат постепенно
              уходит. Пачка в магазине может лежать месяцами, а у нас зерно
              приезжает к вам через 1–3 дня.
            </p>
            <p>На каждой пачке мы указываем дату обжарки.</p>
          </div>
          <RoastSchedule />
        </section>

        <section id="coffee" aria-labelledby="coffee-title">
          <h2 id="coffee-title">Наш кофе</h2>
          <p>
            Не знаете, что выбрать? Оставьте заявку, менеджер поможет подобрать.
          </p>
          <ul className="coffee-list">
            {products.map((product) => (
              <CoffeeCard key={product.id} {...product} />
            ))}
          </ul>
        </section>

        <section id="subscription" aria-labelledby="subscription-title">
          <h2 id="subscription-title">Подписка: свежий кофе каждый месяц</h2>
          <p>2 пачки по 250 г раз в месяц, доставка бесплатно.</p>
          <p>
            <strong>54 BYN / мес</strong>
          </p>
          <p>
            Для тех, кто пьёт кофе дома или в офисе каждый день и не хочет
            следить, когда он закончится.
          </p>
          <ul>
            <li>Свежая обжарка</li>
            <li>Доставка в пятницу</li>
            <li>Возможность выбрать сорта</li>
          </ul>
          <a className="button" href="#order">
            Оформить подписку
          </a>
        </section>

        <section id="about-us" aria-labelledby="about-title">
          <Image
            src="/couple.jpg"
            width={250}
            height={250}
            alt="Аня и Дмитрий, основатели обжарки «Кварта»"
          />
          <h2 id="about-title">О нас</h2>
          <p>
            Мы — Аня и Дмитрий. Раньше работали бариста, а с 2019 года
            обжариваем кофе сами. Партии у нас маленькие, по 5 кг: жарим в
            четверг, а в пятницу развозим по Минску.
          </p>
        </section>

        <section id="delivery" aria-labelledby="delivery-title">
          <h2 id="delivery-title">Доставка и самовывоз</h2>

          <div>
            <h3>Доставка по Минску</h3>
            <ul>
              <li>Развозим по пятницам</li>
              <li>При заказе от 50 BYN доставка бесплатная</li>
            </ul>
          </div>

          <div>
            <h3>Самовывоз</h3>
            <p>Минск, ул. Короля, 9</p>
            <ul>
              <li>Пн–пт: 8:00–20:00</li>
              <li>Сб–вс: 10:00–18:00</li>
            </ul>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa3e2fc0e28e85d00062bf52e586ded268ad6b309192ba389d94dfc3c6285f864&amp;source=constructor"
              width="500"
              height="300"
              frameBorder="0"
            ></iframe>
          </div>
        </section>

        <section id="order" aria-labelledby="order-title">
          <h2 id="order-title">Оставьте заявку</h2>
          <p>Мы перезвоним и всё оформим.</p>

          <Form />
        </section>
      </main>

      <footer id="contacts">
        <h2>Контакты</h2>
        <address>
          <p>
            <a href="tel:+375000000000">+375 (00) 000-00-00</a>
          </p>
          <p>
            <a href="https://instagram.com/" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
          <p>Минск, ул. Короля, 9</p>
        </address>
        <p>Пн–пт 8:00–20:00, сб–вс 10:00–18:00</p>
        <p>
          <a href="/privacy">Политика конфиденциальности</a>
        </p>
        <p>© {new Date().getFullYear()} Обжарка «Кварта»</p>
      </footer>
    </>
  );
}
