export default function Expeditions() {
    return(
            <section id="expeditions" className="section expeditions-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DISCOVER YOUR NEXT ADVENTURE</span>
            <h2>Upcoming Expeditions</h2>
          </div>
          <a href="#expeditions" className="view-all">
            View all expeditions →
          </a>
        </div>
        <div className="expedition-grid">
          {/* CARD 1 */}
          <article className="expedition-card">
            <div className="card-image">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85"
                alt="Mount Everest"
              />
              <span className="difficulty hard">Hard</span>
              <button className="like-button">♡</button>
            </div>
            <div className="card-content">
              <div className="location">
                <span>📍</span>
                Nepal · Everest Region
              </div>
              <h3>Everest Base Camp</h3>
              <p className="card-description">
                Follow the legendary trail to the base of the world's highest
                mountain.
              </p>
              <div className="card-info">
                <div>
                  <span>Duration</span>
                  <strong>14 days</strong>
                </div>
                <div>
                  <span>Altitude</span>
                  <strong>5,364 m</strong>
                </div>
              </div>
              <div className="participants">
                <div className="avatars">
                  <span>👤</span>
                  <span>👤</span>
                  <span>👤</span>
                </div>
                <span>
                  <strong>18 / 20</strong> joined
                </span>
              </div>
              <a href="#details" className="btn btn-card">
                View Expedition →
              </a>
            </div>
          </article>
          {/* CARD 2 */}
          <article className="expedition-card">
            <div className="card-image">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
                alt="Annapurna mountains"
              />
              <span className="difficulty medium">Medium</span>
              <button className="like-button">♡</button>
            </div>
            <div className="card-content">
              <div className="location">
                <span>📍</span>
                Nepal · Annapurna
              </div>
              <h3>Annapurna Circuit</h3>
              <p className="card-description">
                Discover dramatic valleys, ancient villages and unforgettable
                Himalayan landscapes.
              </p>
              <div className="card-info">
                <div>
                  <span>Duration</span>
                  <strong>12 days</strong>
                </div>
                <div>
                  <span>Altitude</span>
                  <strong>5,416 m</strong>
                </div>
              </div>
              <div className="participants">
                <div className="avatars">
                  <span>👤</span>
                  <span>👤</span>
                  <span>👤</span>
                </div>
                <span>
                  <strong>12 / 16</strong> joined
                </span>
              </div>
              <a href="#details" className="btn btn-card">
                View Expedition →
              </a>
            </div>
          </article>
          {/* CARD 3 */}
          <article className="expedition-card">
            <div className="card-image">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85"
                alt="Himalayan mountains"
              />
              <span className="difficulty extreme">Extreme</span>
              <button className="like-button">♡</button>
            </div>
            <div className="card-content">
              <div className="location">
                <span>📍</span>
                Nepal · Manaslu
              </div>
              <h3>Manaslu Expedition</h3>
              <p className="card-description">
                A demanding high-altitude expedition for experienced
                mountaineers.
              </p>
              <div className="card-info">
                <div>
                  <span>Duration</span>
                  <strong>28 days</strong>
                </div>
                <div>
                  <span>Altitude</span>
                  <strong>8,163 m</strong>
                </div>
              </div>
              <div className="participants">
                <div className="avatars">
                  <span>👤</span>
                  <span>👤</span>
                  <span>👤</span>
                </div>
                <span>
                  <strong>7 / 10</strong> joined
                </span>
              </div>
              <a href="#details" className="btn btn-card">
                View Expedition →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
     );
}