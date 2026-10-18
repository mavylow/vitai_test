import CoffeeCard from "@components/CoffeeCard";
import { getProducts } from "@utils/api";
import "./style.css";

async function Coffee() {
  const products = await getProducts();

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
