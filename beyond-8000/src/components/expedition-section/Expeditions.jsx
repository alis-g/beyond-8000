import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import ExpeditionCard from "../expedition-card/ExpeditionCard";
import useExpeditions from "../../hooks/useExpeditions";



export default function Expeditions() {
    const { expeditions, getParticipantsCount } = useExpeditions()
    return (
        <section id="expeditions" className="section expeditions-section">
            <div className="container">
                <div className="section-heading">
                    <div>
                        <span className="eyebrow">DISCOVER YOUR NEXT ADVENTURE</span>
                        <h2>Upcoming Expeditions</h2>
                    </div>
                    <Link to='/' className="view-all">
                        View all expeditions →
                    </Link>
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