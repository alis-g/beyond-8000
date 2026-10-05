export default function ExpeditionCard({
id,
title,
mountain,
country,
difficulty,
duration,
altitude,
max_participants,
start_date,
end_date,
image_url,
description,
}
) {
    return(
                            <article className="expedition-card">
                        <div className="card-image">
                            <img
                                src={image_url}
                                alt={mountain}
                            />
                            <span className="difficulty hard">{difficulty}</span>
                            <button className="like-button">♡</button>
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
                                    <strong>{18 / 20}</strong> joined
                                </span>
                            </div>
                            <a href="#details" className="btn btn-card">
                                View Expedition →
                            </a>
                        </div>
                    </article>
     );
}