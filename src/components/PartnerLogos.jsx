// PartnerLogos.js
import React from "react";
import { motion } from "framer-motion";
import "./PartnerLogos.css"; // Archivo CSS para estilos
import logo1 from "../logo(1).png"; // Logo de la empresa
import logoCalyaan from "../logocalyaan.png"; // Logo de la empresa
import logoRm from "../logo-rm.png"; // Logo de la empresa
import logoalborada from "../logoalborada.jpg"; // Logo de la empresa
import logocrypto from "../logocrypto.png"; // Logo de la empresa
import logoappel from "../logoappel.png"; // Logo de la empresa
import logoglobal from "../logoglobal.png"; // Logo de la empresa
import logomodatotal from "../logomodatotal.png"; // Logo de la empresa
// JSON con los datos de los logos
const partnerLogos = [
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
    name: "Calyaan SaaS Colombia",
    logo: logoCalyaan,
    url: "https://calyaan.netlify.app/",
  },
  {
    name: "Rm Mandados",
    logo: logoRm,
    url: "https://kaldi-decap.netlify.app/",
  },
  {
    name: "Yerba Mate Alborada",
    logo: logoalborada,
    url: "https://yerbamatealborada.com/",
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
    url: "https://globalhomegroup.netlify.app/",
  },
  {
    name: "Moda Total",
    logo: logomodatotal,
    url: "https://modatotal.netlify.app/",
  }
];

export const PartnerLogos = () => {
  return (
    <div className="partner-logos" id="partners">
      <h2>Confían en Nosotros</h2>
      <div className="logos-container">
        {partnerLogos.map((partner, index) => (
          <motion.div
            key={index}
            className="logo-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
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
      </div>
      <div className="stats-container">
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>19</h3>
          <p>Projects Completed</p>
        </motion.div>
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>5</h3>
          <p>Countries</p>
        </motion.div>
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>5</h3>
          <p>Years of Experience</p>
        </motion.div>
      </div>
    </div>
  );
};
