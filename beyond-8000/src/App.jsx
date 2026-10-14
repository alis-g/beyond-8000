import { Route, Routes } from "react-router"
import Expeditions from "./components/expedition-section/Expeditions"
import Footer from "./components/footer/Footer"
import Header from "./components/header/header"
import HeroSection from "./components/hero-section/HeroSection"
import Details from "./components/details/Details"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Create from "./components/create /Create"

function App() {


    return (
        <>

            <Header />
            <Routes>
                <Route path="/" element={<HeroSection />}/>
                <Route path="/expeditions" element={<Expeditions />}/>
                <Route path="/expeditions/:expeditionId" element={<Details />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create" element={<Create />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
