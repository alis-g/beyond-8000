import { useEffect, useState } from "react";
import { Link } from "react-router";
import { request } from "../../utils/requester";
import ExpeditionCard from "../expedition-card/ExpeditionCard";

export default function HeroSection() {

    const [latestExpeditions , setLatestExpeditions] = useState([])

    useEffect(()=>{
        request('expeditions?order=created_at.desc&limit=3', 'GET', null)
        .then(setLatestExpeditions)
        .catch(err => alert(err))
    }, [])

    return (
        <>
            <section className="hero">
                <div className="hero-overlay" />

                <div className="container hero-content">
                    <div className="hero-label">
                        <span />
                        THE WORLD ABOVE 8000 METERS
                    </div>

                    <h1>
                        Beyond
                        <br />
                        <span>8000 Meters</span>
                    </h1>

                    <p>
                        Discover extraordinary expeditions to the world's highest peaks,
                        from the Himalayas to the legendary Karakoram Range.
                    </p>

                    <div className="hero-buttons">
                        <Link
                            to="/expeditions"
                            className="btn btn-primary btn-large"
                        >
                            Explore 8000ers
                            <span>→</span>
                        </Link>

                        <a
                            href="#add-expedition"
                            className="btn btn-ghost btn-large"
                        >
                            Create Expedition
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div>
                            <strong>14</strong>
                            <span>8000m Peaks</span>
                        </div>

                        <div>
                            <strong>2</strong>
                            <span>Mountain Ranges</span>
                        </div>

                        <div>
                            <strong>8000+</strong>
                            <span>Meters Above Sea</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="latest-expeditions">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <span className="eyebrow">EXPLORE</span>
                            <h2>Latest Expeditions</h2>
                        </div>

                        <Link to="/expeditions" className="btn btn-ghost">
                            View All →
                        </Link>
                    </div>

                    <div className="expedition-grid">
                        {latestExpeditions.length > 0 
                        ? latestExpeditions.map(exp => <ExpeditionCard key={exp.id} {...exp} />)
                        : <p> No expeditions yet</p>
                    }
                    </div>
                </div>
            </section>
        </>
    );
}