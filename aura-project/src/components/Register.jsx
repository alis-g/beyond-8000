export default function Register() {
    return(
          <section className="form-section form-section--alt" id="register">
      <div className="container form-container">
        <header className="form-header">
          <h2 className="form-title">Създай акаунт</h2>
          <p className="form-sub">Присъедини се към общността на Aura Style.</p>
        </header>
        <form className="form" action="#" method="post" noValidate="">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="reg-name">Име</label>
              <input
                type="text"
                id="reg-name"
                name="firstName"
                placeholder="Мария"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="reg-lastname">Фамилия</label>
              <input
                type="text"
                id="reg-lastname"
                name="lastName"
                placeholder="Иванова"
                required=""
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="reg-email">Имейл</label>
            <input
              type="email"
              id="reg-email"
              name="email"
              placeholder="your@email.com"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-password">Парола</label>
            <input
              type="password"
              id="reg-password"
              name="password"
              placeholder="••••••••"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-confirm">Потвърди паролата</label>
            <input
              type="password"
              id="reg-confirm"
              name="confirmPassword"
              placeholder="••••••••"
              required=""
            />
          </div>
          <button type="submit" className="btn btn--block">
            Създай акаунт
          </button>
          <p className="form-footer">
            Вече имаш акаунт? <a href="/login">Влез</a>
          </p>
        </form>
      </div>
    </section>
     );
}