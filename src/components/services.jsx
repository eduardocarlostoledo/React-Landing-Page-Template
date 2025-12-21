import React from "react";
import { motion } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import { seoConfig } from "../utils/seoConfig";
import "../styles/servicesSolutions.css";

export const Services = (props) => {
  // SEO Configuration for Services Section
  const servicesSEO = seoConfig.services;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <>
      {useSEO(servicesSEO)}
      <div id="services">
      <div className="container-services">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Nuestras Soluciones</h2>
          <p>
            Podemos brindarte soluciones en las siguientes especialidades
          </p>
        </motion.div>
        <motion.div
          className="row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {props.data
            ? props.data.map((d, i) => (
                <motion.div
                  key={`${d.name}-${i}`}
                  className="col-sm-6"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </motion.div>
              ))
            : "loading"}
        </motion.div>
      </div>
    </div>
    </>
  );
};
