import { Link } from "react-router";
import ExpeditionCard from "../expedition-card/ExpeditionCard";

export default function MyExpeditions() {
    return (
        <section id="my-expeditions" className="section expeditions-section">
            <div className="container">

                <div className="section-heading">
                    <div>
                        <span className="eyebrow">YOUR ADVENTURES</span>
                        <h2>My Expeditions</h2>
                    </div>
                </div>


                {/* Created Expeditions */}
                <div className="my-expeditions-group">
                    <h2 className="my-expeditions-title created-title">
                        Created Expeditions
                    </h2>

                    <div className="expedition-grid">

                        <ExpeditionCard />

                    </div>
                </div>


                {/* Joined Expeditions */}
                <div className="my-expeditions-group">
                    <h2 className="my-expeditions-title joined-title">
                        Joined Expeditions
                    </h2>

                    <div className="expedition-grid">

                        <article className="expedition-card">
                            <div className="card-image">
                                <img
                                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85"
                                    alt="K2"
                                />

                                <span className="difficulty hard">
                                    Hard
                                </span>
                            </div>

                            <div className="card-content">

                                <div className="location">
                                    📍 Pakistan · K2
                                </div>

                                <h3>
                                    K2 Adventure 2027
                                </h3>

                                <p className="card-description">
                                    A challenging Himalayan expedition for
                                    experienced mountaineers.
                                </p>

                                <div className="card-info">
                                    <div>
                                        <span>Duration</span>
                                        <strong>21 days</strong>
                                    </div>

                                    <div>
                                        <span>Altitude</span>
                                        <strong>8611 m</strong>
                                    </div>
                                </div>

                                <div className="participants">
                                    <span>
                                        <strong>12 / 15</strong> participants
                                    </span>
                                </div>

                                <div className="card-actions">
                                    <Link
                                        to="/expeditions/2"
                                        className="btn btn-small"
                                    >
                                        View Details
                                    </Link>

                                    <button className="btn btn-small btn-secondary">
                                        Leave
                                    </button>
                                </div>

                            </div>
                        </article>

                    </div>
                </div>

            </div>
        </section>
    );
}