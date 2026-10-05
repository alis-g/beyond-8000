import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { request } from "../../utils/requester";

export default function Details() {
    const { expeditionId } = useParams()
    const [expedition, setExpedition] = useState({})

    useEffect(() => {
        request(`/expeditions?id=eq.${expeditionId}`)
            .then(result => {
                setExpedition(result[0])
            })
    }, [expeditionId])


    return (
        <section id="details" className="section details-section">
            <div className="container details-grid">
                <div className="details-image">
                    <img
                        src={expedition.image_url}
                        alt={expedition.title}
                    />
                    <div className="image-badge">
                        <strong>{expedition.altitude}</strong>
                        <span>Maximum altitude</span>
                    </div>
                </div>
                <div className="details-content">
                    <span className="eyebrow">EXPEDITION DETAILS</span>
                    <h2>{expedition.title}</h2>
                    <div className="details-location">📍 {expedition.country}</div>
                    <p>
                        {expedition.description}
                    </p>
                    <div className="details-meta">
                        <div>
                            <span>Duration</span>
                            <strong>{expedition.duration}</strong>
                        </div>
                        <div>
                            <span>Difficulty</span>
                            <strong>{expedition.difficulty}</strong>
                        </div>
                        <div>
                            <span>Participants</span>
                            <strong>18 / {expedition.max_participants}</strong>
                        </div>
                        <div>
                            <span>Start date</span>
                            <strong>{expedition.start_date}</strong>
                        </div>
                    </div>
                   <div className="details-actions">
    <button className="btn btn-primary btn-large">Join Expedition</button>
    <button className="btn btn-secondary btn-large">Edit</button>
    <button className="btn btn-danger btn-large">Delete</button>
</div>
                    <p className="spots">
                        <span />
                        Only 2 spots remaining
                    </p>
                </div>
            </div>
        </section>
    );
}