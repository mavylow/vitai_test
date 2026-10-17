import "./style.css";

function Footer() {
  return (
    <footer id="contacts">
      <h2>Контакты</h2>
      <address>
        <p>
          <a href="tel:+375000000000">+375 (00) 000-00-00</a>
        </p>
        <p>
          <a href="https://instagram.com/" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
        <p>Минск, ул. Короля, 9</p>
      </address>
      <p>Пн–пт 8:00–20:00, сб–вс 10:00–18:00</p>
      <p>
        <a href="/privacy">Политика конфиденциальности</a>
      </p>
      <p>© {new Date().getFullYear()} Обжарка «Кварта»</p>
    </footer>
  );
}
export default Footer;
