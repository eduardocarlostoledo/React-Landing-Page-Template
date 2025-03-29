import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  // Cargar el widget de Elfsight
  useEffect(() => {
    if (!widgetLoaded) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.defer = true;
      script.onload = () => setWidgetLoaded(true);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [widgetLoaded]);

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>Testimonios de nuestros clientes en Google Bussines</h2>
          
        </motion.div>

        <motion.div className="widget-wrapper" variants={itemVariants}>
          <div 
            className="elfsight-app-ee107658-e146-4bcf-9ca9-ab0cb731e261"
            data-elfsight-app-lazy
          />
        </motion.div>

        <motion.div className="cta-section" variants={itemVariants}>
          <p>¿Has trabajado con nosotros?</p>
          <motion.a
            href="https://search.google.com/local/writereview?placeid=1183308153456408063"
            target="_blank"
            rel="noopener noreferrer"
            className="review-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Deja tu reseña en Google
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};