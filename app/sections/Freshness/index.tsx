import RoastSchedule from "@components/RoastSchedule";
import "./style.css";

function Freshness() {
  return (
    <section id="freshness" aria-labelledby="freshness-title">
      <div className="brown-layout">
        <h2 id="freshness-title">Кофе, как хлеб, лучше свежим</h2>
        <p>
          После обжарки зерно раскрывается, а потом аромат постепенно уходит.
          Пачка в магазине может лежать месяцами, а у нас зерно приезжает к вам
          через 1–3 дня.
        </p>
        <p>На каждой пачке мы указываем дату обжарки.</p>
      </div>
      <RoastSchedule />
    </section>
  );
}

export default Freshness;
