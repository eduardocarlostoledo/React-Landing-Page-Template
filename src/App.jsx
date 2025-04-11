import React, { useState, useEffect } from "react";
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
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

// Smooth scroll para los links tipo #seccion
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = ({ data }) => (
  <>
    <Navigation />
    <Hero />
    <Asesoramiento data={data.Asesoramiento} />
    <Features data={data.Features} />
    <About data={data.About} />
    <Services data={data.Services} />
    <Gallery data={data.Gallery} />
    <Testimonials />
    <Team data={data.Team} />
    <PartnerLogos />
    <Cotizaciones />
    <Contact data={data.Contact} />
    <Chatbot />
  </>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage data={landingPageData} />} />
      <Route path="/gracias-por-su-compra" element={<Graciasporsucompra />} />
      <Route path="/detalle/:id" element={<DetalleCotizacion />} />

    </Routes>
  );
};

export default App;
