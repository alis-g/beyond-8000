import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function GuestRoute({ children }) {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/404" replace />;
    }

    return children;
}