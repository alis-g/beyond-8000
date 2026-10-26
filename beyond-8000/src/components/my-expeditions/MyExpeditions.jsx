import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import useExpeditions from "../../hooks/useExpeditions";
import ExpeditionCard from "../expedition-card/ExpeditionCard";


export default function MyExpeditions() {
    const { user } = useAuth();

    const {
        expeditions,
        participants,
        getParticipantsCount
    } = useExpeditions();

    const createdExpeditions = expeditions.filter(
        exp => exp.user_id === user.id
    );

    const joinedExpeditions = expeditions.filter(
        exp =>
            participants.some(
                participant =>
                    participant.user_id === user.id &&
                    participant.expedition_id === exp.id
            )
    );

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
                        {createdExpeditions.length > 0
                            ? createdExpeditions.map(exp => (
                                <ExpeditionCard
                                    key={exp.id}
                                    {...exp}
                                    participants={getParticipantsCount(exp.id)}
                                />
                            ))
                            : (
                                <p className="empty-message">
                                    You haven't created any expeditions yet.
                                    Start planning your next <Link to='/create' className="my-link">adventure...</Link>
                                </p>
                            )
                        }
                    </div>
                </div>

                {/* Joined Expeditions */}
                <div className="my-expeditions-group">
                    <h2 className="my-expeditions-title joined-title">
                        Joined Expeditions
                    </h2>

                    <div className="expedition-grid">
                        {joinedExpeditions.length > 0
                            ? joinedExpeditions.map(exp => (
                                <ExpeditionCard
                                    key={exp.id}
                                    {...exp}
                                    participants={getParticipantsCount(exp.id)}
                                />
                            ))
                            : (
                                <p className="empty-message">
                                    You haven't joined any expeditions yet.
                                    Explore upcoming adventures and find your
                                    next <Link to= '/expeditions' className="my-link">challenge.</Link>
                                </p>
                            )
                        }
                    </div>
                </div>

            </div>
        </section>
    );
}