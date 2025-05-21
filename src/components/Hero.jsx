import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Hero.css";

import hero1 from "./images/hero/hero1.jpg";
import hero2 from "./images/hero/hero2.jpg";
import hero3 from "./images/hero/hero3.jpg";
import hero4 from "./images/hero/hero4.jpg";

export const Hero = () => {
  const slides = [
    {
      image: hero1,
      title: "Desarrollo de Software a medida",
      desc: "Desarrollo desde 0 con Full Code",
    },
    {
      image: hero2,
      title: "Uso de nuevas tecnologías",
      desc: "React, Node, Tailwind y más",
    },
    {
      image: hero3,
      title: "Especialistas en React y Node",
      desc: "UX, UI, Frontend, Backend & DB",
    },
    {
      image: hero4,
      title: "Diseño adaptativo",
      desc: "Vistas responsivas para todos los dispositivos",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrent(index);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="slider-section" id="neumaticos">
      <div className="slider-container">
        <motion.div
          className="slide"
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            loading="lazy"
            src={slides[current].image}
            alt={slides[current].title}
            className="slider-image"
            width="100%"
            height="auto"
          />
          <div className="slider-content">
            <h2>{slides[current].title}</h2>
            <p>{slides[current].desc}</p>
          </div>
        </motion.div>

        <button className="arrow left" onClick={prevSlide}>❮</button>
        <button className="arrow right" onClick={nextSlide}>❯</button>

        <div className="indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};
