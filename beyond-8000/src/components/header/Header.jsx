import { Link } from "react-router";
import { useAuth } from "../../context/auth-context";



export default function Header() {
    const { isAuthenticated } = useAuth()
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
                    {isAuthenticated && <Link to="/my-expeditions">My Expeditions</Link>}
                    
                </nav>
                <div className="nav-actions">
                    {isAuthenticated
                        ?
                        (<>
                            <Link to="/create" className="btn btn-primary">Create Expedition</Link>
                            <Link to="/logout" className="btn btn-outline">Logout</Link>

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