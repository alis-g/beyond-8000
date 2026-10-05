import { useEffect, useState } from "react";
import { Link } from "react-router";
import { request } from "../../utils/requester.js";
import ExpeditionCard from "../expedition-card/ExpeditionCard";



export default function Expeditions() {
    const [expeditions, setExpeditions] = useState([]);
    useEffect(()=> {
        request("/expeditions")
        .then(setExpeditions)
        .catch(error => alert(error))
    }, [])
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
                    {expeditions.map(exp => <ExpeditionCard key={exp.id} {...exp} />)}
                </div>
            </div>
        </section>
    );
}