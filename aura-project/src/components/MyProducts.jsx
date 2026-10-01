export default function MyProducts() {
    return(
        <section className="products" id="my-products">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">
            Моите <span>продукти</span>
          </h2>
          <p className="section-sub">Управлявай своите публикации</p>
        </header>
        <div className="products__grid">
          <article className="product-card">
            <a href="/catalog/1" className="product-card__image">
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
                alt="Копринена рокля Aura"
              />
            </a>
            <div className="product-card__info">
              <p className="product-card__category">Рокли</p>
              <h3 className="product-card__title">
                <a href="/catalog/1">Копринена рокля "Aura"</a>
              </h3>
              <p className="product-card__price">189.99 лв.</p>
              <div className="product-card__owner-actions">
                <a href="/products/1/edit" className="btn btn--sm">
                  Редакция
                </a>
                <button type="button" className="btn btn--sm btn--danger">
                  Изтрий
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
     );
}