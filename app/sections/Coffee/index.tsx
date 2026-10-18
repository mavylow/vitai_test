import { products } from "@utils/const";
import CoffeeCard from "@components/CoffeeCard";
import "./style.css";

function Coffee() {
  return (
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
  );
}

export default Coffee;
