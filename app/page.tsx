import Image from "next/image";
import RoastSchedule from "./components/RoastSchedule";
import Header from "./components/Header";
import ButtonLink from "./components/Button";
import { products } from "./utils/const";
import CoffeeCard from "./components/CoffeeCard";
import Form from "./components/Form";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

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

          <a className="button" href="#order">
            Оформить подписку
          </a>
        </section>

        <AboutSection />

        <section id="delivery" aria-labelledby="delivery-title">
          <h2 id="delivery-title">Доставка и самовывоз</h2>

          <div>
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
            </div>
          </div>

          <div>
            <iframe
              title="Карта: мастерская «Кварта», Минск, ул. Короля, 9"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa3e2fc0e28e85d00062bf52e586ded268ad6b309192ba389d94dfc3c6285f864&amp;source=constructor"
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section id="order" aria-labelledby="order-title">
          <h2 id="order-title">Оставьте заявку</h2>
          <p>Мы перезвоним и всё оформим.</p>

          <Form />
        </section>
      </main>

      <Footer />
    </>
  );
}
