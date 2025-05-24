import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/Hero.css";

import hero1 from "./images/hero/hero1.jpg";
import hero2 from "./images/hero/hero2.jpg";
import hero3 from "./images/hero/hero3.jpg";
import hero4 from "./images/hero/hero4.jpg";

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

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrent(index);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="slider-section" id="neumaticos">
      <div className="slider-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              loading="lazy"
              width="1920"
              height="500"
              src={slides[current].image}
              alt={slides[current].title}
              className="slider-image"
              initial={{ scale: 1.02 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            <div className="slider-content">
              <h2>{slides[current].title}</h2>
              <p>{slides[current].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>

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
