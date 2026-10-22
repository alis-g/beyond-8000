import { Route, Routes, useNavigate } from "react-router"
import Expeditions from "./components/expedition-section/Expeditions"
import Footer from "./components/footer/Footer"
import Header from "./components/header/header"
import HeroSection from "./components/hero-section/HeroSection"
import Details from "./components/details/Details"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Create from "./components/expedition-form/ExpeditionForm"
import { useState } from "react"
import { authApi } from "./api"
import AuthContext from "./context/auth-context"
import Logout from "./components/logout/logout"
import ExpeditionForm from "./components/expedition-form/ExpeditionForm"


function App() {

    const [auth, setAuth] = useState(null)

    const navigate = useNavigate()

    const register = async (userData) => {
        try {
            const result = await authApi.register(userData)
            setAuth(result)

            navigate('/')

        } catch (error) {
            alert(error.message)
        }
    }

    const login = async (userData) => {
        try {
            const result = await authApi.login(userData)
            setAuth(result)
            navigate('/')

        } catch (error) {
            alert(error.message)
        }
    }

    const logoutAction = async () => {
        try {
            await authApi.logout(auth?.access_token)
            setAuth(null)
        } catch (error) {
            alert(error.message)
        }
    }

    const contextValue = {
        accessToken: auth?.access_token,
        user: auth?.user,
        isAuthenticated: !!auth,
        register,
        login,
        logout: logoutAction,
    }
    return (
        <AuthContext.Provider value={contextValue}>

            <Header isAuth={!!auth} />

            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/expeditions" element={<Expeditions />} />
                <Route path="/create" element={<ExpeditionForm />} />
                <Route path="/edit/:expeditionId" element={<ExpeditionForm />} />
                <Route path="/expeditions/:expeditionId" element={<Details />} />
                <Route path="/register" element={<Register onRegister={register} />} />
                <Route path="/login" element={<Login onLogin={login} />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>

            <Footer />
        </AuthContext.Provider>
    )
}

export default App
