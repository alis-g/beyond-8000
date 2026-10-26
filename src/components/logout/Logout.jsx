import { useContext, useEffect } from "react";
import AuthContext from "../../context/auth-context";
import { Navigate } from "react-router";

export default function Logout() {
    const { logout } = useContext(AuthContext)

    useEffect(()=>{
        logout()
    }, [logout])
    return(
        <Navigate to='/' />
     );
}