import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import request from "../../utils/requester";
import AuthContext from "../../context/auth-context";
import { expeditionApi, participantsApi } from "../../api";
import useParticipants from "../../hooks/useParticipants";
import { toast } from "react-toastify";




export default function Details() {
    const { user, isAuthenticated } = useContext(AuthContext)
    const { expeditionId } = useParams()
    const [expedition, setExpedition] = useState({})
    const navigate = useNavigate()

    const { participants, isParticipant, join, leave } = useParticipants(expeditionId)

    const isOwner = user && user?.id === expedition?.user_id

    const isFull = participants.length >= expedition.max_participants

    useEffect(() => {
        request(`/expeditions?id=eq.${expeditionId}`, "GET", null)
            .then(result => {
                setExpedition(result[0])
            })
            .catch(err => toast.error(err.message))
    }, [expeditionId])

    const deleteExpeditionClickHandler = async (e) => {
        e.preventDefault()

        const confirmed = confirm(`Are yo sure you want to delete ${expedition.title} expedition?`)

        if (!confirmed) {
            return
        }

        try {
            await expeditionApi.remove(expeditionId)
            navigate('/expeditions')
        } catch (error) {
            toast.error(error.message)
        }
    }
    const joinHandler = async () => {
        try {
            await join(user.id)
            toast.success("You joined successfully")
        } catch (error) {
            toast.error(error.message)
        }
    }

    const leaveHandler = async () => {
        try {
            await leave(user.id)
            toast.success("You left successfully")
        } catch (error) {
            toast(error.message)
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
                            isParticipant(user.id)
                                ? (
                                    <button
                                        className="btn btn-secondary btn-large"
                                        onClick={leaveHandler}
                                    >
                                        Leave Expedition
                                    </button>
                                )
                                : (
                                    <button
                                        className={`btn btn-large ${isFull ? "btn-disabled" : "btn-primary"}`}
                                        onClick={joinHandler}
                                        disabled={isFull}
                                    >
                                        {isFull ? 'Expedition full' : 'Join Expedition'}                                    
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