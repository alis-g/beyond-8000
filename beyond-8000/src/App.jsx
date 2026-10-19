import { Route, Routes, useNavigate } from "react-router"
import Expeditions from "./components/expedition-section/Expeditions"
import Footer from "./components/footer/Footer"
import Header from "./components/header/header"
import HeroSection from "./components/hero-section/HeroSection"
import Details from "./components/details/Details"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Create from "./components/create /Create"
import { useState } from "react"
import { authApi } from "./api"

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
    return (
        <>

            <Header isAuth = {!!auth}/>
            <Routes>
                <Route path="/" element={<HeroSection />}/>
                <Route path="/expeditions" element={<Expeditions />}/>
                <Route path="/expeditions/:expeditionId" element={<Details />} />
                <Route path="/login" element={<Login onLogin={login} />} />
                <Route path="/register" element={<Register onRegister={register} />} />
                <Route path="/create" element={<Create />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
