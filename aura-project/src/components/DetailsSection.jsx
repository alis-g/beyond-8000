export default function HowItWorks() {
    return(
         <section className="details" id="details">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Навигационна пътека">
          <a href="/">Начало</a>
          <span>/</span>
          <a href="/catalog">Каталог</a>
          <span>/</span>
          <span aria-current="page">Копринена рокля "Aura"</span>
        </nav>
        <div className="details__inner">
          <div className="details__gallery">
            <div className="details__main-image">
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80"
                alt="Копринена рокля Aura"
              />
            </div>
            <div className="details__thumbs">
              <button
                type="button"
                className="details__thumb details__thumb--active"
              >
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=200&q=80"
                  alt=""
                />
              </button>
              <button type="button" className="details__thumb">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=200&q=80"
                  alt=""
                />
              </button>
              <button type="button" className="details__thumb">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=200&q=80"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="details__info">
            <p className="details__category">Рокли</p>
            <h1 className="details__title">Копринена рокля "Aura"</h1>
            <p className="details__price">189.99 лв.</p>
            <p className="details__desc">
              Елегантна копринена рокля в нежен розов нюанс. Идеална за
              специални поводи и вечерни излизания. Изработена от 100% натурална
              коприна.
            </p>
            <dl className="details__meta">
              <div>
                <dt>Категория</dt>
                <dd>Рокли</dd>
              </div>
              <div>
                <dt>Материя</dt>
                <dd>Коприна</dd>
              </div>
              <div>
                <dt>Наличност</dt>
                <dd>В наличност</dd>
              </div>
              <div>
                <dt>Автор</dt>
                <dd>Мария И.</dd>
              </div>
            </dl>
            <div className="details__actions">
              <button type="button" className="btn">
                Добави в кошница
              </button>
              <button type="button" className="btn btn--outline">
                ♥ Харесай
              </button>
            </div>
            {/* Показва се само на автора */}
            <div className="details__owner-actions">
              <a href="/products/1/edit" className="btn btn--sm">
                Редакция
              </a>
              <button type="button" className="btn btn--sm btn--danger">
                Изтрий
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
     );
}