import { Route, Routes } from "react-router"
import Expeditions from "./components/expedition-section/Expeditions"
import Footer from "./components/footer/Footer"
import Header from "./components/header/header"
import HeroSection from "./components/hero-section/HeroSection"
import Details from "./components/details/Details"
import Login from "./components/login/Login"
import Register from "./components/register/Register"

import Logout from "./components/logout/logout"
import ExpeditionForm from "./components/expedition-form/ExpeditionForm"
import MyExpeditions from "./components/my-expeditions/MyExpeditions"
import { AuthProvider } from "./context/auth-context"




function App() {


    return (
        <AuthProvider>

            <Header />

            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/expeditions" element={<Expeditions />} />
                <Route path="/create" element={<ExpeditionForm />} />
                <Route path="/edit/:expeditionId" element={<ExpeditionForm />} />
                <Route path="/my-expeditions" element={<MyExpeditions />} />
                <Route path="/expeditions/:expeditionId" element={<Details />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login  />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>

            <Footer />
        </AuthProvider>
    )
}



export default App
