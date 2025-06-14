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
import { AboutGoogleBusiness } from "./components/aboutGoogleBussiness.jsx";
import { AboutOptimizacion } from "./components/aboutOptimizacion.jsx";
import { AboutRedesSociales } from "./components/aboutRedesSociales.jsx";
import { AboutLandingPage } from "./components/aboutLandingPage.jsx";
import { GlobalNavbar } from "./components/GlobalNavbar";

// Smooth scroll para los links tipo #seccion
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = ({ data }) => (
  <>
    <Hero />
    <Gallery data={data.Gallery} />
    <Testimonials />
    <PartnerLogos />
    <Cotizaciones />
    <Asesoramiento data={data.Asesoramiento} />
    <Features data={data.Features} />
    <About data={data.About} />
    <Services data={data.Services} />
    <Team data={data.Team} />
    <Contact data={data.Contact} />
    <Chatbot />
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
        <Route path="/detalle/:id" element={<DetalleCotizacion />} />
        <Route path="/servicios-consultora-toledo/:id" element={<DetalleCotizacionSEO />} />
        <Route path="/servicios-profesionales" element={<Cotizaciones />} />
        <Route path="/asesoramiento-profesional" element={<Asesoramiento data={landingPageData.Asesoramiento} />} />
        <Route path="/acerca-de-nosotros" element={<About data={landingPageData.About} />} />
        <Route path="/nuestros-servicios" element={<Services data={landingPageData.Services} />} />
        <Route path="/nuestros-proyectos" element={<Gallery data={landingPageData.Gallery} />} />
        <Route path="/indice-sitemap" element={<IndiceSitemap />} />
        <Route path="/indice-del-sitio" element={<Sitemap />} />
        <Route path="/gracias-por-su-compra" element={<Graciasporsucompra />} />
        <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
        <Route path="/politica-de-privacidad" element={<Politica />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/about-comprar-dominio" element={<AboutComprarDominio />} />
        <Route path="/about-google-ads" element={<AboutGoogleAds />} />
        <Route path="/about-reseñas" element={<AboutReseñas />} />
        <Route path="/about-posicionamiento" element={<AboutPosicionamiento />} />
        <Route path="/about-google-business" element={<AboutGoogleBusiness />} />
        <Route path="/about-optimizacion" element={<AboutOptimizacion />} />
        <Route path="/about-redes-sociales" element={<AboutRedesSociales />} />
        <Route path="/about-landing-page" element={<AboutLandingPage />} />
      </Routes>
    </>
  );
};

export default App;
