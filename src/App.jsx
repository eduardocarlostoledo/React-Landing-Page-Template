import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Asesoramiento } from "./components/asesoramiento";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { PartnerLogos } from "./components/PartnerLogos.jsx";
import { Hero } from "./components/Hero.jsx";
// import { WhatsAppChat } from "./components/WhatsAppChat.jsx";
import { Chatbot } from "./components/ChatBot.jsx";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      {/* <Header data={landingPageData.Header} /> */}
      <Chatbot />
      <Hero />

      <Asesoramiento data={landingPageData.Asesoramiento} />
      
      <Features data={landingPageData.Features} />
      
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials />
      <Team data={landingPageData.Team} />
      <PartnerLogos />
      <Contact data={landingPageData.Contact} />
      {/* <WhatsAppChat /> */}
    </div>
  );
};

export default App;
