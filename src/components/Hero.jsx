import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./Hero.css";

// Importar imágenes

import hero1 from "./images/hero/hero1.jpg";
import hero2 from "./images/hero/hero2.jpg";
import hero3 from "./images/hero/hero3.jpg";
import hero4 from "./images/hero/hero4.jpg";


export const Hero = () => {
  const cars = [
    { image: hero1, title: "Desarrollo de Software a medida", desc: "Desarrollo desde 0 con Full Code" },
    { image: hero2, title: "Uso de nuevas tecnologias", desc: "Tecnologías vigentes como React, Node, Tailwind" },
    { image: hero3, title: "Expecialistas en react y node", desc: "Ux, UI, Frontend, Backend & Databases" },
    { image: hero4, title: "Diseño adaptativo a dispositivos", desc: "Diseños adaptables a multiples dispositivos y vistas" },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cars.length) % cars.length);
  };

  return (
    <section className="slider-section" id="neumaticos">
      <div className="slider-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="slide"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img
              src={cars[current].image}
              alt={`Slide ${current}`}
              className="slider-image"
            />
            <div className="slider-content">
              <h2>{cars[current].title}</h2>
              <p>{cars[current].desc}</p>
              {/* <button className="slider-btn">Ver Más</button> */}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Botones */}
        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>
        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>

        {/* Indicadores */}
        <div className="indicators">
          {cars.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};


