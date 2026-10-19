import { Link } from "react-router";

export default function Header({
    isAuth
}) {
    return (
        <header className="header">
            <div className="container nav">
                <Link to="/" className="logo" >
                    <span className="logo-mark">▲</span>
                    <span>
                        Beyond 8000<span className="gold">.</span>
                    </span>
                </Link>
                <nav className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/expeditions">Expeditions</Link>
                    {isAuth && <Link to="/my-expeditions">My Expeditions</Link>}
                    
                </nav>
                <div className="nav-actions">
                    {isAuth
                        ?
                        (<>
                            <Link to="/create" className="btn btn-primary">Create Expedition</Link>
                            <Link to="/login" className="btn btn-outline">Logout</Link>

                        </>)
                        : (<>
                            <Link to="/login" className="btn btn-outline">Login</Link>
                            <Link to="/register" className="btn btn-primary">Join us</Link>
                        </>)}

                </div>
            </div>
        </header>
    );
}