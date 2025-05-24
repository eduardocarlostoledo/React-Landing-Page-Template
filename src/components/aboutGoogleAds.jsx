import React from "react";
import "../styles/about.css";

export const AboutGoogleAds = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-columns">
          <div className="about-image-wrapper">
            <img
              src="/img/google-ads.webp"
              alt="Campañas en Google Ads con Toledo Consultora"
              className="about-image"
            />
          </div>

          <div className="about-text">
            <h2>Publicidad en Google Ads</h2>
            <h3>
              Guía completa para entender cómo funciona, qué tipos de campañas existen y cómo aprovecharlas.
            </h3>

            <h4>¿Qué es Google Ads?</h4>
            <p>
              Es la plataforma de publicidad paga de Google que permite mostrar anuncios en los resultados de búsqueda, sitios asociados, YouTube y más. Ideal para atraer tráfico inmediato y segmentado.
            </p>

            <h4>¿Cuáles son los costos?</h4>
            <ul>
              <li>Funciona por subasta (no hay tarifa fija).</li>
              <li>El anunciante establece un presupuesto diario o mensual.</li>
              <li>Se paga por clic (CPC), visualización o conversión.</li>
              <li>El CPC puede variar según la competencia del rubro.</li>
            </ul>

            <h4>Tipos de campañas:</h4>
            <ul>
              <li><strong>Búsqueda:</strong> Anuncios en resultados de Google.</li>
              <li><strong>Display:</strong> Banners en sitios asociados.</li>
              <li><strong>YouTube:</strong> Videos antes o durante la reproducción.</li>
              <li><strong>Shopping:</strong> Para ecommerce y productos físicos.</li>
              <li><strong>Performance Max:</strong> Automatización inteligente multiplataforma.</li>
              <li><strong>Remarketing:</strong> Anuncios dirigidos a quienes visitaron tu web.</li>
            </ul>

            <h4>Beneficios de usar Google Ads:</h4>
            <ul>
              <li>Resultados inmediatos.</li>
              <li>Segmentación precisa por ubicación, edad, intereses, etc.</li>
              <li>Control total de presupuesto y duración.</li>
              <li>Medición exacta de resultados.</li>
              <li>Ideal para lanzamientos, promociones o captar leads.</li>
            </ul>

            <h4>Métricas clave para evaluar el rendimiento:</h4>
            <ul>
              <li><strong>Impresiones:</strong> Cuántas veces se mostró tu anuncio.</li>
              <li><strong>CTR (Click Through Rate):</strong> Porcentaje de clics vs impresiones. Un buen CTR indica relevancia del anuncio.</li>
              <li><strong>CPC (Costo Por Clic):</strong> Cuánto pagás por cada visita.</li>
              <li><strong>Conversiones:</strong> Acciones clave como compras, formularios completados o llamadas.</li>
              <li><strong>Tasa de conversión:</strong> Porcentaje de visitas que realizaron una acción esperada.</li>
            </ul>

            <h4>Estrategias recomendadas:</h4>
            <ul>
              <li>Usar palabras clave con intención comercial.</li>
              <li>Crear anuncios con llamados a la acción claros.</li>
              <li>Segmentar bien el público y zonas geográficas.</li>
              <li>Probar distintas variantes de anuncios (A/B testing).</li>
              <li>Medir resultados desde Google Ads + Google Analytics.</li>
            </ul>

            <p>
              En <strong>Toledo Consultora IT</strong> creamos, optimizamos y escalamos tus campañas en Google Ads para que generes más tráfico, más clientes y más ventas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
