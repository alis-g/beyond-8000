export default function Details() {

    

    return (
        <section id="details" className="section details-section">
            <div className="container details-grid">
                <div className="details-image">
                    <img
                        src="https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1400&q=85"
                        alt="Everest expedition"
                    />
                    <div className="image-badge">
                        <strong>5,364 m</strong>
                        <span>Maximum altitude</span>
                    </div>
                </div>
                <div className="details-content">
                    <span className="eyebrow">EXPEDITION DETAILS</span>
                    <h2>Everest Base Camp 2027</h2>
                    <div className="details-location">📍 Nepal · Everest Region</div>
                    <p>
                        Experience one of the world's most iconic trekking routes. Walk
                        through Sherpa villages, cross suspension bridges and reach the
                        legendary Everest Base Camp.
                    </p>
                    <div className="details-meta">
                        <div>
                            <span>Duration</span>
                            <strong>14 days</strong>
                        </div>
                        <div>
                            <span>Difficulty</span>
                            <strong>Hard</strong>
                        </div>
                        <div>
                            <span>Participants</span>
                            <strong>18 / 20</strong>
                        </div>
                        <div>
                            <span>Start date</span>
                            <strong>15 Apr 2027</strong>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-large">Join Expedition</button>
                    <p className="spots">
                        <span />
                        Only 2 spots remaining
                    </p>
                </div>
            </div>
        </section>
    );
}