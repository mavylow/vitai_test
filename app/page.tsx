import type { Metadata } from "next";
import Image from "next/image";
import RoastSchedule from "./RoastSchedule";

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
      <header>
        <a href="#" aria-label="Кварта — в начало страницы">
          {/* Название рядом с логотипом, поэтому у картинки пустой alt */}
          <Image src="/logo.svg" width={50} height={50} alt="" />
          <span>kvarta</span>
        </a>
        <nav aria-label="Основная навигация">
          <ul>
            <li>
              <a href="#coffee">Кофе</a>
            </li>
            <li>
              <a href="#subscription">Подписка</a>
            </li>
            <li>
              <a href="#delivery">Доставка</a>
            </li>
            <li>
              <a href="#about-us">О нас</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </nav>
        <a className="button" href="#order">
          Оставить заявку
        </a>
      </header>

      <main>
        {/* 1. Первый экран */}
        <section aria-labelledby="hero-title">
          <h1 id="hero-title">
            Обжарили в четверг.
            <br />
            Привезли в пятницу.
          </h1>
          <p>Маленькая минская мастерская «Кварта»</p>
          <a className="button" href="#order">
            Оформить подписку
          </a>
          <a href="#order">Заказать один раз</a>
        </section>

        {/* 2. Почему свежесть важна */}
        <section aria-labelledby="freshness-title">
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

        {/* 3. Ассортимент */}
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

        {/* 4. Подписка */}
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

        {/* 5. Как это работает */}
        <section id="how-it-works" aria-labelledby="how-title">
          <h2 id="how-title">Как это работает</h2>
          <ol>
            <li>Оставляете заявку, это занимает минуту.</li>
            <li>Менеджер перезванивает, уточняет вкус и адрес.</li>
            <li>В четверг мы обжариваем, в пятницу привозим.</li>
          </ol>
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

        {/* 7. Доставка и самовывоз */}
        <section id="delivery" aria-labelledby="delivery-title">
          <h2 id="delivery-title">Доставка и самовывоз</h2>

          <div>
            <h3>Доставка по Минску</h3>
            <ul>
              <li>Развозим по пятницам</li>
              <li>При заказе от 50 BYN доставка бесплатная</li>
              {/* TODO: уточнить стоимость доставки при заказе до 50 BYN
                  и до какого времени нужно заказать, чтобы успеть в пятницу */}
            </ul>
          </div>

          <div>
            <h3>Самовывоз</h3>
            <p>Минск, ул. Короля, 9</p>
            <ul>
              <li>Пн–пт: 8:00–20:00</li>
              <li>Сб–вс: 10:00–18:00</li>
            </ul>
            {/* TODO: карта и фото входа */}
          </div>
        </section>

        {/* 8. Форма заявки */}
        <section id="order" aria-labelledby="order-title">
          <h2 id="order-title">Оставьте заявку</h2>
          <p>Мы перезвоним и всё оформим.</p>

          {/* TODO: реализовать обработчик /api/lead (письмо, Telegram или таблица) */}
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

      {/* 9. Контакты */}
      <footer id="contacts">
        <h2>Контакты</h2>
        <address>
          {/* TODO: подставить настоящий телефон и аккаунт Instagram */}
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
