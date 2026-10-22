import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import ExpeditionCard from "../expedition-card/ExpeditionCard";
import request from "../../utils/requester";
import AuthContext from "../../context/auth-context";
import { expeditionApi } from "../../api";



export default function Expeditions() {
    const {accessToken} = useContext(AuthContext)
    const [expeditions, setExpeditions] = useState([]);
    useEffect(()=> {
        expeditionApi.getAll(accessToken)
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
                    {expeditions.length > 0
                    ? expeditions.map(exp => <ExpeditionCard key={exp.id} {...exp} />)
                : <h3> No Added Expeditions</h3> }
                    
                </div>
            </div>
        </section>
    );
}