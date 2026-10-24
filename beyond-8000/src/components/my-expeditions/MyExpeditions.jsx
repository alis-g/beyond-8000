
import useAuth from "../../hooks/useAuth";
import useExpeditions from "../../hooks/useExpeditions";
import ExpeditionCard from "../expedition-card/ExpeditionCard";

export default function MyExpeditions() {
    const { user } = useAuth()
    const { expeditions, getParticipantsCount } = useExpeditions()
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

                        {expeditions.filter(exp => exp.user_id === user.id)
                            .map(exp => (<ExpeditionCard key={exp.id} {...exp} participants={getParticipantsCount(exp.id)} />))}

                    </div>
                </div>


                {/* Joined Expeditions */}
                <div className="my-expeditions-group">
                    <h2 className="my-expeditions-title joined-title">
                        Joined Expeditions
                    </h2>

                    <div className="expedition-grid">

                       <ExpeditionCard />
                    </div>
                </div>

            </div>
        </section>
    );
}