import "./style.css";

function Delivery() {
  return (
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
  );
}
export default Delivery;
