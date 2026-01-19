import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Features } from "./components/features";
import { Asesoramiento } from "./components/asesoramiento";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Footer } from "./components/Footer";
import { PartnerLogos } from "./components/PartnerLogos";
import { Hero } from "./components/Hero";
import { Chatbot } from "./components/ChatBot";
import { Cotizaciones } from "./components/Cotizaciones";
import { Graciasporsucompra } from "./components/graciasporsucompra";
import { DetalleCotizacion } from "./components/DetalleCotizacion";
import { DetalleCotizacionSEO } from "./components/DetalleCotizacionSEO.jsx";
import IndiceSitemap from "./components/IndiceSitemaps.jsx";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "../src/styles/App.css";
import Sitemap from "./components/Sitemaps.jsx";
import TerminosYCondiciones from "./components/TerminosYCondiciones.jsx";
import Politica from "./components/Politica.jsx";
import { AboutComprarDominio } from "./components/aboutComprarDominio.jsx";
import { AboutGoogleAds } from "./components/aboutGoogleAds.jsx";
import { AboutReseñas } from "./components/aboutReseñas.jsx";
import { AboutPosicionamiento } from "./components/aboutPosicionamiento.jsx";
import { AboutGoogleBussiness } from "./components/aboutGoogleBussiness.jsx";
import { AboutOptimizacion } from "./components/aboutOptimizacion.jsx";
import { AboutRedesSociales } from "./components/aboutRedesSociales.jsx";
import { AboutLandingPage } from "./components/aboutLandingPage.jsx";
import { GlobalNavbar } from "./components/GlobalNavbar";
import { EBook} from "./components/EBook.jsx";
import { HowWeWork } from "./components/HowWeWork.jsx";
import { InstagramFeed } from "./components/InstagramFeed.jsx";
import { SuccessCases } from "./components/SuccessCases.jsx";
import { SocialProof } from "./components/SocialProof.jsx";
import { Guarantees } from "./components/Guarantees.jsx";
import { Differentials } from "./components/Differentials.jsx";
import { LeadMagnet } from "./components/LeadMagnet.jsx";
import { Sistema55 } from "./components/Sistema55.jsx";
import { ConfirmaSuscripcion } from "./components/ConfirmaSuscripcion.jsx";
import { Verdiore } from "./components/verdiore.jsx";
// Smooth scroll para los links tipo #seccion
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = ({ data }) => (
  <>
    <Hero />
    <Services data={data.Services} />
    <SocialProof />
    <Features data={data.Features} />
    <HowWeWork />
    <SuccessCases />
    <Gallery data={data.Gallery} />
    <Testimonials />
    <Guarantees />
    <PartnerLogos />
    <Differentials />
    <Cotizaciones />
    <Asesoramiento data={data.Asesoramiento} />
    <About data={data.About} />
    <Team data={data.Team} />
    <LeadMagnet />
    <Contact data={data.Contact} />
    <Chatbot />
    <Footer />
  </>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);

      if (element) {
        const navbarHeight = 220;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        setTimeout(() => {
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      {isHome ? <Navigation /> : <GlobalNavbar />}

      <Routes>
        <Route path="/" element={<LandingPage data={landingPageData} />} />
        <Route path="/detalle/:id" element={<><DetalleCotizacion /><Footer /></>} />
        <Route path="/servicios-consultora-toledo/:id" element={<><DetalleCotizacionSEO /><Footer /></>} />
        <Route path="/servicios-profesionales" element={<><Cotizaciones /><Footer /></>} />
        <Route path="/asesoramiento-profesional" element={<><Asesoramiento data={landingPageData.Asesoramiento} /><Footer /></>} />
        <Route path="/acerca-de-nosotros" element={<><About data={landingPageData.About} /><Footer /></>} />
        <Route path="/nuestros-servicios" element={<><Services data={landingPageData.Services} /><Footer /></>} />
        <Route path="/nuestros-proyectos" element={<><Gallery data={landingPageData.Gallery} /><Footer /></>} />
        <Route path="/indice-sitemap" element={<><IndiceSitemap /><Footer /></>} />
        <Route path="/indice-del-sitio" element={<><Sitemap /><Footer /></>} />
        <Route path="/gracias-por-su-compra" element={<><Graciasporsucompra /><Footer /></>} />
        <Route path="/terminos-y-condiciones" element={<><TerminosYCondiciones /><Footer /></>} />
        <Route path="/politica-de-privacidad" element={<><Politica /><Footer /></>} />
        <Route path="/contacto" element={<><Contact /><Footer /></>} />
        <Route path="/about-comprar-dominio" element={<><AboutComprarDominio /><Footer /></>} />
        <Route path="/about-google-ads" element={<><AboutGoogleAds /><Footer /></>} />
        <Route path="/about-reseñas" element={<><AboutReseñas /><Footer /></>} />
        <Route path="/about-posicionamiento" element={<><AboutPosicionamiento /><Footer /></>} />
        <Route path="/about-google-business" element={<><AboutGoogleBussiness /><Footer /></>} />
        <Route path="/about-optimizacion" element={<><AboutOptimizacion /><Footer /></>} />
        <Route path="/about-redes-sociales" element={<><AboutRedesSociales /><Footer /></>} />
        <Route path="/about-landing-page" element={<><AboutLandingPage /><Footer /></>} />
        <Route path="/e-book-gratuito" element={<><EBook /><Footer /></>} />
        <Route path="/sistema-5-5" element={<><Sistema55 /><Footer /></>} />
        <Route path="/confirma-suscripcion" element={<><ConfirmaSuscripcion /><Footer /></>} />
        <Route path="/verdiore" element={<><Verdiore /><Footer /></>} />
      </Routes>
    </>
  );
};

export default App;
