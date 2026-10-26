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
import { ToastContainer } from "react-toastify"
import NotFound from "./components/not-found/NotFound"
import GuestRoute from "./components/route-guards/GuestRoute"
import PrivateRoute from "./components/route-guards/PrivateRoute"

function App() {

    return (
        <AuthProvider>

            <Header />

            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/expeditions" element={<Expeditions />} />
                <Route path="/create" element={
                    <PrivateRoute>
                        <ExpeditionForm />
                    </PrivateRoute>} />
                <Route path="/edit/:expeditionId" element={
                    <PrivateRoute>
                        <ExpeditionForm />
                    </PrivateRoute>} />
                <Route path="/my-expeditions" element={
                    <PrivateRoute>
                        <MyExpeditions />
                    </PrivateRoute>} />
                <Route path="/expeditions/:expeditionId" element={<Details />} />
                <Route path="/register" element={
                    <GuestRoute>
                        <Register />
                    </GuestRoute>} />
                <Route path="/login" element={
                    <GuestRoute>
                        <Login />
                    </GuestRoute>} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <ToastContainer />

            <Footer />
        </AuthProvider>
    )
}



export default App
