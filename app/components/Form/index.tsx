import { products } from "../../utils/const";
import "./style.css";

function Form() {
  return (
    <form action="/api/lead" method="post">
      <div>
        <label htmlFor="name">Имя</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
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

      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>
          Согласен на обработку персональных данных (
          <a href="/privacy">политика конфиденциальности</a>)
        </span>
      </label>

      <button type="submit">Отправить заявку</button>
      <p>Менеджер перезвонит в рабочее время.</p>
    </form>
  );
}

export default Form;
