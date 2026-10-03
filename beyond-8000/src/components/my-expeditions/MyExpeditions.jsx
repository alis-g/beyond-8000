export default function MyExpeditions() {
    return(
                       <section id="my-expeditions" className="section expeditions-section">
                    <div className="container">
                        <div className="section-heading">
                            <div>
                                <span className="eyebrow">YOUR ADVENTURES</span>
                                <h2>My Expeditions</h2>
                            </div>
                            <a href="#add-expedition" className="btn btn-primary">
                                + Create Expedition
                            </a>
                        </div>
                        <div className="expedition-grid">
                            <article className="expedition-card">
                                <div className="card-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85"
                                        alt="Everest"
                                    />
                                    <span className="difficulty hard">Hard</span>
                                </div>
                                <div className="card-content">
                                    <div className="location">📍 Nepal · Everest</div>
                                    <h3>Everest Base Camp 2027</h3>
                                    <div className="participants">
                                        <span>
                                            <strong>18 / 20</strong> participants
                                        </span>
                                    </div>
                                    <div className="card-actions">
                                        <a href="#edit-expedition" className="btn btn-small">
                                            Edit
                                        </a>
                                        <button className="btn btn-small btn-danger">Delete</button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
     );
}