import React from "react";
import "../styles/about.css";
import { useEffect } from "react";

export const AboutGoogleBusiness = () => {

        useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);


  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-columns">
          {/* Imagen ilustrativa */}
          <div className="about-image-wrapper">
            <img
              src="/img/google-business.svg"
              alt="Google Business para negocios locales"
              className="about-image"
            />
          </div>

          {/* Contenido informativo */}
          <div className="about-text">
            <h2>Google Business Profile: Tu negocio en el mapa</h2>
            <h3>
              Tener presencia en Google Business es clave para destacar en búsquedas locales, generar confianza y atraer nuevos clientes.
            </h3>

            <h4>¿Qué es Google Business?</h4>
            <p>
              Es una herramienta gratuita de Google que te permite crear una ficha pública de tu negocio para que aparezca en Google Maps y en los resultados de búsqueda.
            </p>

            <h4>Beneficios de tener una ficha optimizada:</h4>
            <ul>
              <li>Aparecés en Google Maps con ubicación, teléfono y fotos.</li>
              <li>Recibís reseñas que mejoran tu reputación.</li>
              <li>Permitís que te contacten directamente (llamadas, WhatsApp, dirección).</li>
              <li>Mostrás tu horario, servicios y novedades.</li>
              <li>Mejorás tu posicionamiento local sin pagar publicidad.</li>
            </ul>

            <h4>¿Qué podés subir a tu ficha?</h4>
            <ul>
              <li>Imágenes de tu local o productos.</li>
              <li>Publicaciones semanales (novedades, promociones).</li>
              <li>Categorías y subcategorías específicas de tu rubro.</li>
              <li>Horarios actualizados (laborales, feriados, excepcionales).</li>
              <li>Enlace a tu sitio web o tienda online.</li>
            </ul>

            <h4>Ventajas clave para el SEO local:</h4>
            <ul>
              <li>Mejorás la visibilidad en búsquedas geolocalizadas.</li>
              <li>Google considera tu ficha como un factor de relevancia.</li>
              <li>Incrementás el tráfico orgánico sin costo por clic.</li>
              <li>Podés competir con empresas más grandes a nivel local.</li>
            </ul>

            <h4>¿Hay contras?</h4>
            <ul>
              <li>Si no la gestionás bien, tus datos pueden quedar desactualizados.</li>
              <li>Reseñas negativas mal atendidas pueden afectar tu imagen.</li>
              <li>Otros pueden sugerir cambios en tu ficha si no está verificada.</li>
            </ul>

            <p>
              En <strong>Toledo Consultora IT</strong> optimizamos y gestionamos tu ficha de Google Business para que aparezcas en los primeros resultados de búsqueda y destaques en tu ciudad.
            </p>
          </div>
        </div>
      </div><div className="social-links">
          <a
            href="https://wa.me/5493764221063"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >    Contá tu idea la llevamos a cabo {" 👉 "}
             {"  "} <i  style={{  color: "green" }} className="fab fa-whatsapp"></i>
          </a>
          </div>

    </section>
  );
};
