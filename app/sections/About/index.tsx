import Image from "next/image";
import "./style.css";

export default function AboutSection() {
  return (
    <section
      id="about-us"
      aria-labelledby="about-title"
      className="about-section"
    >
      <div className="image-wrapper">
        <Image
          src="/couple.jpg"
          alt="Аня и Дмитрий, основатели обжарки «Кварта»"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="content">
        <h2 id="about-title">О нас</h2>
        <p>
          Мы — Аня и Дмитрий. Раньше работали бариста, а с 2019 года обжариваем
          кофе сами. Партии у нас маленькие, по 5 кг: жарим в четверг, а в
          пятницу развозим по Минску.
        </p>
      </div>
    </section>
  );
}
