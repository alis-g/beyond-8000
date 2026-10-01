export default function LatestProductsSection() {
    return(
         <section className="form-section" id="login">
      <div className="container form-container">
        <header className="form-header">
          <h2 className="form-title">Вход в профила</h2>
          <p className="form-sub">Влез, за да управляваш своите продукти.</p>
        </header>
        <form className="form" action="#" method="post" noValidate="">
          <div className="form-group">
            <label htmlFor="login-email">Имейл</label>
            <input
              type="email"
              id="login-email"
              name="email"
              placeholder="your@email.com"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Парола</label>
            <input
              type="password"
              id="login-password"
              name="password"
              placeholder="••••••••"
              required=""
            />
          </div>
          <button type="submit" className="btn btn--block">
            Влез
          </button>
          <p className="form-footer">
            Нямаш акаунт? <a href="/register">Регистрирай се</a>
          </p>
        </form>
      </div>
    </section>
     );
}