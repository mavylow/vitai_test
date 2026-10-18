import Form from "@components/Form";
import "./style.css";

function Order() {
  return (
    <section id="order" aria-labelledby="order-title">
      <h2 id="order-title">Оставьте заявку</h2>
      <p>Мы перезвоним и всё оформим.</p>

      <Form />
    </section>
  );
}

export default Order;
