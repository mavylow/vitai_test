import Image from "next/image";
import RoastSchedule from "./components/RoastSchedule";
import Header from "./components/Header";
import ButtonLink from "./components/Button";

type Product = {
  id: string;
  name: string;
  description: string;
  volume: string;
  price: number;
  image: string;
  imageAlt: string;
};

const products: Product[] = [
  {
    id: "irgacheffe",
    name: "Эфиопия Иргачеффе",
    description: "цветочный, бергамот, светлая обжарка",
    volume: "250 г",
    price: 32,
    image: "/coffee_pack1.jpg",
    imageAlt: "Пачка кофе Эфиопия Иргачеффе",
  },
  {
    id: "huila",
    name: "Колумбия Уила",
    description: "карамель, красное яблоко",
    volume: "250 г",
    price: 29,
    image: "/coffee_pack2.jpg",
    imageAlt: "Пачка кофе Колумбия Уила",
  },
  {
    id: "cerrado",
    name: "Бразилия Серрадо",
    description: "орех, шоколад, под эспрессо",
    volume: "250 г",
    price: 26,
    image: "/coffee_pack3.jpg",
    imageAlt: "Пачка кофе Бразилия Серрадо",
  },
  {
    id: "drip",
    name: "Дрип-пакеты, ассорти",
    description: "кофе, который заваривается прямо в чашке",
    volume: "10 штук",
    price: 18,
    image: "/drip.jpg",
    imageAlt: "Ассорти дрип-пакетов",
  },
];

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
          <ul>
            {products.map((product) => (
              <li className="coffee-card" key={product.id}>
                <Image
                  src={product.image}
                  width={250}
                  height={250}
                  alt={product.imageAlt}
                />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.volume}</p>
                <p>{product.price} BYN</p>
                <a href="#order" aria-label={`Заказать: ${product.name}`}>
                  Заказать
                </a>
              </li>
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

        {/* 6. О нас */}
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

          <form action="/api/lead" method="post">
            <div>
              <label htmlFor="name">Имя</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </div>

            <div>
              <label htmlFor="phone">Телефон</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+375 29 123-45-67"
                required
              />
            </div>

            <fieldset>
              <legend>Что хотите оформить</legend>
              <label>
                <input
                  type="radio"
                  name="requestType"
                  value="subscription"
                  defaultChecked
                />
                Подписку
              </label>
              <label>
                <input type="radio" name="requestType" value="one-time" />
                Разовый заказ
              </label>
            </fieldset>

            <fieldset>
              <legend>Какой кофе</legend>
              {products.map((product) => (
                <label key={product.id}>
                  <input type="checkbox" name="products" value={product.id} />
                  {product.name}
                </label>
              ))}
              <label>
                <input type="checkbox" name="products" value="help" />
                Не знаю, помогите выбрать
              </label>
            </fieldset>

            <fieldset>
              <legend>Как получить</legend>
              <label>
                <input
                  type="radio"
                  name="receiving"
                  value="delivery"
                  defaultChecked
                />
                Доставка по Минску
              </label>
              <label>
                <input type="radio" name="receiving" value="pickup" />
                Самовывоз
              </label>
            </fieldset>

            <div>
              <label htmlFor="address">Адрес доставки</label>
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="street-address"
                aria-describedby="address-hint"
              />
              <p id="address-hint">Нужен только для доставки.</p>
            </div>

            <div>
              <label htmlFor="comment">Комментарий</label>
              <textarea id="comment" name="comment" rows={3} />
            </div>

            <label>
              <input type="checkbox" name="consent" required />
              Согласен на обработку персональных данных (
              <a href="/privacy">политика конфиденциальности</a>)
            </label>

            <button type="submit">Отправить заявку</button>
            <p>Менеджер перезвонит в рабочее время.</p>
          </form>
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
