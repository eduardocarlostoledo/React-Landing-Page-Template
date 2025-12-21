// PartnerLogos.js
import React from "react";
import { motion } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import { seoConfig } from "../utils/seoConfig";
import "../styles/PartnerLogos.css"; // Archivo CSS para estilos
import logo1 from "../logo(1).jpg"; // Logo de la empresa
import logoCalyaan from "../logocalyaan.png"; // Logo de la empresa
import logoRm from "../logo-rm.jpg"; // Logo de la empresa
import logoalborada from "../logoalborada.jpg"; // Logo de la empresa
import logocrypto from "../logocrypto.png"; // Logo de la empresa
import logoappel from "../logoappel.jpg"; // Logo de la empresa
import logoglobal from "../logoglobal.jpg"; // Logo de la empresa
import logomodatotal from "../logomodatotal.png"; // Logo de la empresa
import logolua from "../logolua.png"
import logojuly from "../huallpa-logo.png"; // Logo de la empresa
// JSON con los datos de los logos
const partnerLogos = [
   {
    name: "Yerba Mate Alborada",
    logo: logoalborada,
    url: "https://yerbamatealborada.com/",
  },
  {
    name: "Calyaan SaaS Colombia",
    logo: logoCalyaan,
    url: "https://calyaan.netlify.app/",
  },
  
  {
    name: "CryptoSeed.ai",
    logo: logocrypto,
    url: "https://cryptoseed.ai/",
  },
  {
    name: "Appel Neumaticos PY",
    logo: logoappel,
    url: "https://appelneumaticos.com/",
  },
  {
    name: "Global Home Group",
    logo: logoglobal,
    url: "https://globalhomegroup.com.ar/",
  },
  {
    name: "Rm Mandados",
    logo: logoRm,
    url: "https://kaldi-decap.netlify.app/",
  },
 
  {
    name: "Store Computer",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/009/096/946/small/monitor-screen-computer-with-colorful-rainbow-bubble-illustration-logo-design-vector.jpg", // Reemplazar con la URL real
    url: "https://storecomputer.netlify.app/",
  },
  {
    name: "El Gato Negro Premium - Eliquids",
    logo: logo1,
    url: "https://elgatonegropremium.netlify.app/",
  },
  {
    name: "Moda Total",
    logo: logomodatotal,
    url: "https://modatotal.netlify.app/",
  },
  {
    name: "Lua Collection Circuito",
    logo: logolua,
    url: "https://luacollection.netlify.app/",
  },
  {
    name: "July Marroquinería",
    logo: logojuly,
    url: "https://july-marroquineria.netlify.app/",
  },
];

export const PartnerLogos = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.1 },
    },
  };

  // SEO Configuration for Partners Section
  const partnersSEO = seoConfig.home;

  return (
    <>
      {useSEO(partnersSEO)}
      <div className="partner-logos" id="partners">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={headerVariants}
        viewport={{ once: true }}
      >
        Confían en Nosotros
      </motion.h2>
      <motion.div
        className="logos-container"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {partnerLogos.map((partner, index) => (
          <motion.div
            key={index}
            className="logo-item"
            variants={itemVariants}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
          >
            <div className="logo-image">
              <img src={partner.logo} alt={partner.name} />
            </div>
            <p className="logo-name">
              <a href={partner.url} target="_blank" rel="noopener noreferrer"
              style={{color: "white"}}>
                {partner.name}
              </a>
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="stats-container"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div
          className="stat-item"
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <h3>Más de 20</h3>
          <p>Projectos Completados</p>
        </motion.div>
        <motion.div
          className="stat-item"
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <h3>Clientes en 6 países</h3>
          <p>Argentina, Paraguay, Colombia, Estados Unidos, Australia, Brasil</p>
        </motion.div>
        <motion.div
          className="stat-item"
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <h3>Más de 5</h3>
          <p>Años de experiencia en desarrollo web</p>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};
