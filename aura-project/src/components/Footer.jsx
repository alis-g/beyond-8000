export default function Footer() {
    return(
          <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div className="footer__col">
          <h4 className="footer__title">Aura Style</h4>
          <p className="footer__text">
            Елегантни дамски дрехи, създадени с любов към детайла.
          </p>
        </div>
        <div className="footer__col">
          <h4 className="footer__title">Магазин</h4>
          <ul className="footer__list">
            <li>
              <a href="/catalog">Каталог</a>
            </li>
            <li>
              <a href="/catalog?sort=new">Нови</a>
            </li>
            <li>
              <a href="/catalog?sort=sale">Промоции</a>
            </li>
            <li>
              <a href="/cart">Кошница</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__title">Помощ</h4>
          <ul className="footer__list">
            <li>
              <a href="/about">За нас</a>
            </li>
            <li>
              <a href="/contacts">Контакти</a>
            </li>
            <li>
              <a href="/faq">Често задавани въпроси</a>
            </li>
            <li>
              <a href="/privacy">Поверителност</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__title">Бюлетин</h4>
          <p className="footer__text">Получавай новини и промоции.</p>
          <form className="footer__form" action="#" method="post">
            <input
              type="email"
              name="email"
              placeholder="Твоят имейл"
              className="footer__input"
              required=""
            />
            <button type="submit" className="btn btn--sm">
              Абонирай
            </button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        © 2025 Aura Style. Всички права запазени.
      </div>
    </div>
  </footer>
     );
}