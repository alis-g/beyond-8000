import Catalog from "./components/Catalog";
import CategorySection from "./components/Catalog";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/DetailsSection";
import LatestProductsSection from "./components/Login";
import Footer from "./components/Footer";

function App() {


  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aura Style — Дамски дрехи</title>
  <link rel="stylesheet" href="index.css" />

  <Header />
  <main>

    <HeroSection />

    <Catalog />
    {/* ========== DETAILS ========== */}
    
    {/* ========== LOGIN ========== */}
  
    {/* ========== REGISTER ========== */}
    
    {/* ========== CREATE / EDIT PRODUCT ========== */}
    
    {/* ========== MY PRODUCTS ========== */}
  </main>
  <Footer />
</>

 )
}

export default App
