import { Link } from "react-router";

export default function NotFound() {
    return (
        <section className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
                The page you are looking for does not exist or may have been moved.
            </p>
            <Link to="/">Back to Home</Link>
        </section>
    );
}