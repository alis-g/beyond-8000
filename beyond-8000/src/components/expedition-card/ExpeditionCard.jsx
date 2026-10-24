import { Link } from "react-router";

export default function ExpeditionCard({
    id,
    title,
    mountain,
    country,
    difficulty,
    duration,
    altitude,
    max_participants,
    image_url,
    description,
    participants = 0,
}
) {
    return (
        <article className="expedition-card">
            <div className="card-image">
                <img
                    src={image_url}
                    alt={mountain}
                />
                <span className="difficulty hard">{difficulty}</span>
            </div>
            <div className="card-content">
                <div className="location">
                    <span>📍</span>
                    {country}
                </div>
                <h3>{title}</h3>
                <p className="card-description">
                    {description}
                </p>
                <div className="card-info">
                    <div>
                        <span>Duration</span>
                        <strong>{duration}</strong>
                    </div>
                    <div>
                        <span>Altitude</span>
                        <strong>{altitude}</strong>
                    </div>
                </div>
                <div className="participants">
                    <div className="avatars">
                        <span>👤</span>
                        <span>👤</span>
                        <span>👤</span>
                    </div>
                    <span>
                        <strong>{participants} / {max_participants}</strong> joined
                    </span>
                </div>
                <Link to={`/expeditions/${id}`} className="btn btn-card">
                    View Expedition →
                </Link>
            </div>
        </article>
    );
}