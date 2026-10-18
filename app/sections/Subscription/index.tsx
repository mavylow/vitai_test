import "./style.css";

function Subscription() {
  return (
    <section id="subscription" aria-labelledby="subscription-title">
      <h2 id="subscription-title">Подписка: свежий кофе каждый месяц</h2>
      <p>2 пачки по 250 г раз в месяц, доставка бесплатно.</p>
      <p>
        <strong>54 BYN / мес</strong>
      </p>
      <p>
        Для тех, кто пьёт кофе дома или в офисе каждый день и не хочет следить,
        когда он закончится.
      </p>

      <a className="button" href="#order">
        Оформить подписку
      </a>
    </section>
  );
}

export default Subscription;
