import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import request from "../../utils/requester";
import AuthContext from "../../context/auth-context";
import { expeditionApi, participantsApi } from "../../api";




export default function Details() {
    const { user, accessToken, isAuthenticated } = useContext(AuthContext)
    const { expeditionId } = useParams()
    const [expedition, setExpedition] = useState({})
    const navigate = useNavigate()

    const [participants, setParticipants] = useState([])

    const isOwner = user && user?.id === expedition?.user_id

    useEffect(() => {
        request(`/expeditions?id=eq.${expeditionId}`, "GET", null)
            .then(result => {
                setExpedition(result[0])
            })
            .catch(err => alert(err))
        request(`/participants?expedition_id=eq.${expeditionId}`)
            .then(result => {
                setParticipants(result)
            })
            .catch(err => alert(err))
    }, [expeditionId])

    const deleteExpeditionClickHandler = async (e) => {
        e.preventDefault()

        const confirmed = confirm(`Are yo sure you want to delete ${expedition.title} expedition?`)

        if (!confirmed) {
            return
        }

        try {
            await expeditionApi.remove(expeditionId, accessToken)
            navigate('/expeditions')
        } catch (error) {
            alert(error.message)
        }
    }
    const joinHandler = async () => {
        try {
            await participantsApi.join(expeditionId, user.id, accessToken)
            
            const result = await request(`/participants?expedition_id=eq.${expeditionId}`)
            setParticipants(result)
        } catch (error) {
            alert(error.message)
        }
    }
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
                            <strong>{participants.length} / {expedition.max_participants}</strong>
                        </div>
                        <div>
                            <span>Start date</span>
                            <strong>{expedition.start_date}</strong>
                        </div>
                    </div>
                    <div className="details-actions">
                        {isAuthenticated && !isOwner && (
                            participants.some(participant => participant.user_id === user.id)
                                ? <span className="btn btn-primary btn-large">✓ You joined</span>
                                : (
                                    <button
                                        className="btn btn-primary btn-large"
                                        onClick={joinHandler}
                                    >
                                        Join Expedition
                                    </button>
                                )
                        )}
                        {isOwner && (<>
                            <Link to={`/edit/${expeditionId}`} className="btn btn-secondary btn-large">Edit</Link>
                            <a href="#" className="btn btn-danger btn-large" onClick={deleteExpeditionClickHandler}>Delete</a>
                        </>)}

                    </div>
                    <p className="spots">
                        <span />
                        Only {expedition.max_participants - participants.length} spots remaining
                    </p>
                </div>
            </div>
        </section>
    );
}