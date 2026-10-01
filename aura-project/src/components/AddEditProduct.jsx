export default function AddEditProduct() {
    return(
            <section className="form-section" id="product-form">
      <div className="container">
        <header className="form-header form-header--left">
          <h2 className="form-title">Нов продукт</h2>
          <p className="form-sub">Попълни информацията за новия продукт.</p>
        </header>
        <form
          className="form form--wide"
          action="#"
          method="post"
          noValidate=""
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="crud-name">Име на продукт</label>
              <input
                type="text"
                id="crud-name"
                name="name"
                placeholder="Напр. Рокля Aura"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="crud-price">Цена (лв.)</label>
              <input
                type="number"
                id="crud-price"
                name="price"
                placeholder="189.99"
                min={0}
                step="0.01"
                required=""
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="crud-category">Категория</label>
              <select id="crud-category" name="category" required="">
                <option value="">— Избери категория —</option>
                <option value="dresses">Рокли</option>
                <option value="blouses">Блузи</option>
                <option value="skirts">Поли</option>
                <option value="jackets">Якета</option>
                <option value="accessories">Аксесоари</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="crud-image">URL на снимка</label>
              <input
                type="url"
                id="crud-image"
                name="imageUrl"
                placeholder="https://..."
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="crud-desc">Описание</label>
            <textarea
              id="crud-desc"
              name="description"
              rows={5}
              placeholder="Кратко описание на продукта..."
              defaultValue={""}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn">
              Запази
            </button>
            <button type="button" className="btn btn--danger">
              Изтрий
            </button>
            <button type="reset" className="btn btn--outline">
              Изчисти
            </button>
          </div>
        </form>
      </div>
    </section>
     );
}