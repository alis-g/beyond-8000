import ExpeditionCard from "../expedition-card/ExpeditionCard";
import useExpeditions from "../../hooks/useExpeditions";
import Spinner from "../spinner/Spinner";

export default function Expeditions() {
    const { expeditions, getParticipantsCount, loading } = useExpeditions()
    if(loading){
        return <Spinner />
    }
    return (
        <section id="expeditions" className="section expeditions-section">
            <div className="container">
                <div className="section-heading">
                    <div>
                        <span className="eyebrow">DISCOVER YOUR NEXT ADVENTURE</span>
                        <h2>Upcoming Expeditions</h2>
                    </div>
                </div>
                <div className="expedition-grid">
                    {expeditions.length > 0
                        ? expeditions.map(exp => (
                            <ExpeditionCard
                                key={exp.id}
                                {...exp}
                                participants={getParticipantsCount(exp.id)}
                            />
                        ))
                        : <h3>No Added Expeditions</h3>
                    }
                </div>
            </div>
        </section>
    );
}