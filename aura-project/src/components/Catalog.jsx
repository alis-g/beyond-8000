export default function Catalog() {
    return(
                <section className="products" id="catalog">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">
            Каталог <span>продукти</span>
          </h2>
          <p className="section-sub">Ръчно подбрани модели за твоя стил</p>
        </header>
        <div className="products__grid">
          <article className="product-card">
            <a href="/catalog/1" className="product-card__image">
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
                alt="Копринена рокля Aura"
              />
              <span className="product-card__badge">Ново</span>
            </a>
            <div className="product-card__info">
              <p className="product-card__category">Рокли</p>
              <h3 className="product-card__title">
                <a href="/catalog/1">Копринена рокля "Aura"</a>
              </h3>
              <p className="product-card__price">189.99 лв.</p>
              <div className="product-card__actions">
                <a href="/catalog/1" className="btn btn--sm btn--block">
                  Виж детайли
                </a>
              </div>
            </div>
          </article>
          <article className="product-card">
            <a href="/catalog/2" className="product-card__image">
              <img
                src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800&q=80"
                alt="Блуза Роза"
              />
              <span className="product-card__badge">Топ</span>
            </a>
            <div className="product-card__info">
              <p className="product-card__category">Блузи</p>
              <h3 className="product-card__title">
                <a href="/catalog/2">Блуза "Роза"</a>
              </h3>
              <p className="product-card__price">89.99 лв.</p>
              <div className="product-card__actions">
                <a href="/catalog/2" className="btn btn--sm btn--block">
                  Виж детайли
                </a>
              </div>
            </div>
          </article>
          <article className="product-card">
            <a href="/catalog/3" className="product-card__image">
              <img
                src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800&q=80"
                alt="Пола Ефир"
              />
              <span className="product-card__badge">-20%</span>
            </a>
            <div className="product-card__info">
              <p className="product-card__category">Поли</p>
              <h3 className="product-card__title">
                <a href="/catalog/3">Пола "Ефир"</a>
              </h3>
              <p className="product-card__price">
                79.99 лв.
                <span className="product-card__price-old">99.99 лв.</span>
              </p>
              <div className="product-card__actions">
                <a href="/catalog/3" className="btn btn--sm btn--block">
                  Виж детайли
                </a>
              </div>
            </div>
          </article>
          <article className="product-card">
            <a href="/catalog/4" className="product-card__image">
              <img
                src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
                alt="Яке Нощна aura"
              />
              <span className="product-card__badge">Лимитирано</span>
            </a>
            <div className="product-card__info">
              <p className="product-card__category">Якета</p>
              <h3 className="product-card__title">
                <a href="/catalog/4">Яке "Нощна aura"</a>
              </h3>
              <p className="product-card__price">229.99 лв.</p>
              <div className="product-card__actions">
                <a href="/catalog/4" className="btn btn--sm btn--block">
                  Виж детайли
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
     );
}