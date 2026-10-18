import Image from "next/image";
import ButtonLink from "@components/Button";
import "./style.css";

function MainScreen() {
  return (
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
  );
}

export default MainScreen;
