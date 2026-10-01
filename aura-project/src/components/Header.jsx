export default function Header() {
    return(
    <header className="header">
    <div className="container header__inner">
      <a href="/" className="logo">
        AURA <span>STYLE</span>
      </a>
      <nav className="nav" aria-label="Основна навигация">
        <ul className="nav__list">
          <li>
            <a href="/" className="nav__link">
              Начало
            </a>
          </li>
          <li>
            <a href="/catalog" className="nav__link">
              Каталог
            </a>
          </li>
          <li>
            <a href="/about" className="nav__link">
              За нас
            </a>
          </li>
          <li>
            <a href="/contacts" className="nav__link">
              Контакти
            </a>
          </li>
          {/* Показва се само за логнати потребители */}
          <li className="nav__item nav__item--auth">
            <a href="/products/my" className="nav__link">
              Моите продукти
            </a>
          </li>
          <li className="nav__item nav__item--auth">
            <a href="/products/new" className="nav__link nav__link--cta">
              + Нов продукт
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__actions">
        <a href="/catalog" className="header__icon" aria-label="Търсене">
          🔍
        </a>
        <a
          href="/cart"
          className="header__icon header__icon--cart"
          aria-label="Кошница"
        >
          🛍
          <span className="cart-badge">0</span>
        </a>
        {/* Показва се само за гости */}
        <a href="/login" className="nav__link nav__link--guest">
          Вход
        </a>
        <a href="/register" className="btn btn--sm nav__link--guest">
          Регистрация
        </a>
        {/* Показва се само за логнати */}
        <a
          href="/profile"
          className="header__icon nav__link--auth"
          aria-label="Профил"
        >
          👤
        </a>
        <button
          type="button"
          className="btn btn--sm btn--outline nav__link--auth"
        >
          Изход
        </button>
      </div>
    </div>
  </header>
     );
}