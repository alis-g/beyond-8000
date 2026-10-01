export default function HeroSection() {
    return (
      <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">Нова колекция 2025</p>
          <h1 className="hero__title">
            Открий своята <span>aura</span> с нас
          </h1>
          <p className="hero__desc">
            Елегантни дамски дрехи, създадени с внимание към всеки детайл.
          </p>
          <div className="hero__actions">
            <a href="/catalog" className="btn">
              Разгледай колекцията
            </a>
            <a href="/about" className="btn btn--outline">
              Научи повече
            </a>
          </div>
        </div>
        <div
          className="hero__image"
          role="img"
          aria-label="Модел с рокля Aura"
        />
      </div>
    </section>
    );
}