import "./style.css";
import Image from "next/image";

function Footer() {
  return (
    <footer id="contacts">
      <h2>Контакты</h2>
      <div>
        <address>
          <p>
            <Image
              src={"/phone.svg"}
              width={24}
              height={24}
              alt="icon of clock"
            />
            <a href="tel:+375000000000">+375 (00) 000-00-00</a>
          </p>
          <p>
            <Image
              src={"/instagram.svg"}
              width={24}
              height={24}
              alt="icon of clock"
            />
            <a
              href="https://instagram.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </p>
          <p>
            <Image
              src={"/address.svg"}
              width={24}
              height={24}
              alt="icon of clock"
            />
            <span>Минск, ул. Короля, 9</span>
          </p>
        </address>
        <p>
          <Image
            src={"/clock.svg"}
            width={24}
            height={24}
            alt="icon of clock"
          />
          <span>Пн–пт 8:00–20:00, сб–вс 10:00–18:00</span>
        </p>
      </div>
      <p className="privacy">
        <a href="/privacy">Политика конфиденциальности </a>
        <span>© 2026 Обжарка «Кварта»</span>
      </p>
    </footer>
  );
}
export default Footer;
