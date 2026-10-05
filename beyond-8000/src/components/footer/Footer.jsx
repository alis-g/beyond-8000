import { Link } from "react-router";

export default function Footer() {
    return(
                    <footer className="footer">
                <div className="container footer-content">
                    <div>
                        <Link to="/" className="logo"> 
                            <span className="logo-mark">▲</span>
                            Beyond 8000<span className="gold">.</span>
                        </Link>
                        <p>Adventures begin where the road ends.</p>
                    </div>
                    <div className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/my-expeditions">My Expeditions</Link>
                    </div>
                </div>
                <div className="container footer-bottom">
                    © 2027 Beyond 8000 Expeditions. Built for adventurers.
                </div>
            </footer>
     );
}