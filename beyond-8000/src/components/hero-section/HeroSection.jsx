import { useEffect, useState } from "react";
import { Link } from "react-router";
import ExpeditionCard from "../expedition-card/ExpeditionCard";
import useExpeditions from "../../hooks/useExpeditions.js";


export default function HeroSection() {

    const { expeditions, getParticipantsCount } = useExpeditions()
    const latestExpeditions = expeditions.slice(0, 3)

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

                        <Link
                            to="/create"
                            className="btn btn-ghost btn-large"
                        >
                            Create Expedition
                        </Link>
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
                            ? latestExpeditions.map(exp => (
                                <ExpeditionCard
                                    key={exp.id}
                                    {...exp}
                                    participants={getParticipantsCount(exp.id)}
                                />
                            ))
                            : <p>No expeditions yet</p>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}