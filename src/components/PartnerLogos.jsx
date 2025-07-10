// PartnerLogos.js
import React from "react";
import { motion } from "framer-motion";
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
          <h3>Más de 20</h3>
          <p>Projectos Completados</p>
        </motion.div>
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Clientes en 6 países</h3>
          <p>Argentina, Paraguay, Colombia, Estados Unidos, Australia, Brasil</p>
        </motion.div>
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>Mas de 5</h3>
          <p>Años de experiencia en desarrollo web</p>
        </motion.div>
      </div>
    </div>
  );
};
