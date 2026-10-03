import Expeditions from "./components/expedition-section/Exeditions"
import Footer from "./components/footer/Footer"
import Header from "./components/header/header"
import HeroSection from "./components/hero-section/HeroSection"

function App() {


    return (
        <>

            {/* ================= HEADER ================= */}
            <Header />
            {/* ================= HOME ================= */}
            <main id="home">

                <HeroSection />

                <Expeditions />
                {/* ================= DETAILS ================= */}

                {/* ================= ADD EXPEDITION ================= */}

                {/* ================= MY EXPEDITIONS ================= */}

                {/* ================= EDIT ================= */}

                {/* ================= LOGIN ================= */}

                {/* ================= REGISTER ================= */}

            </main>
            {/* ================= FOOTER ================= */}
            <Footer/>
        </>
    )
}

export default App
