import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
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
import {DetalleCotizacionSEO } from "./components/DetalleCotizacionSEO.jsx"

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { use } from "react";

// Smooth scroll para los links tipo #seccion
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = ({ data }) => (
  <>
    <Navigation />
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

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Elimina el "#"
      const element = document.getElementById(sectionId);

      if (element) {
        const navbarHeight = 220;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100); // Pequeño delay para asegurar que el DOM esté listo
      }
    }
  }, [location]);


  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage data={landingPageData} />} />
      <Route path="/gracias-por-su-compra" element={<Graciasporsucompra />} />
      <Route path="/detalle/:id" element={<DetalleCotizacion />} />
      <Route path="/servicios-globales/:id" element={<DetalleCotizacionSEO />} />
      <Route path="/servicios-profesionales" element={<Cotizaciones />} />
      <Route path="/asesoramiento-profesional" element={<Asesoramiento  data={landingPageData.Asesoramiento} />} />
      <Route path="/acerca-de-nosotros" element={<About  data={landingPageData.About} />} />
      <Route path="/nuestros-servicios" element={<Services  data={landingPageData.Services} />} />
      <Route path="/nuestros-proyectos" element={<Gallery  data={landingPageData.Gallery} />} />
      


    </Routes>
  );
};

export default App;
