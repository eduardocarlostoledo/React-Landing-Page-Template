// src/components/PoliticaCookies/PoliticaCookies.jsx
// Política de Cookies — Toledo Consultora IT
// Última revisión: 20 de marzo de 2026

import { useEffect } from "react";
import "../styles/politica.css";

const SECTIONS = [
  {
    id: "responsable",
    title: "1. Responsable del tratamiento",
    content: (
      <>
        <p>
          El responsable del tratamiento de los datos recabados mediante cookies
          es <strong>Toledo Consultora IT</strong>, con domicilio en C.52 / 22,
          Posadas, Misiones, Argentina. Para ejercer derechos o consultas,
          escriba a <a href="mailto:info@toledoconsultora.com">info@toledoconsultora.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "cookies-que-uso",
    title: "2. ¿Qué son las cookies?",
    content: (
      <>
        <p>
          Las cookies son pequeños archivos que se almacenan en su navegador
          para mejorar la experiencia de navegación, recordar preferencias y
          medir la actividad del sitio. Utilizamos cookies propias y de terceros,
          siempre cumpliendo con la normativa RGPD y la Ley de Servicios de la Sociedad
          de la Información (LSSI).
        </p>
        <p>
          El banner de cookies (CookieConsent.jsx) bloquea los scripts de terceros
          hasta que el usuario otorga consentimiento explícito. Puede revocar su
          decisión en cualquier momento borrando la cookie <code>toledo_cookie_consent</code>.
        </p>
      </>
    ),
  },
  {
    id: "cookies-detalle",
    title: "3. Cookies utilizadas",
    content: (
      <>
        <table className="politica-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Finalidad</th>
              <th>Tipo</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>toledo_cookie_consent</code></td>
              <td>Registra si aceptó o rechazó el banner de cookies y su versión.</td>
              <td>Esencial</td>
              <td>365 días (acepta) / 30 días (rechaza)</td>
            </tr>
            <tr>
              <td><code>_ga, _gid, _gat</code></td>
              <td>Google Analytics para medir visitas y comportamiento.</td>
              <td>Analítica</td>
              <td>14 meses (configuración estándar)</td>
            </tr>
            <tr>
              <td><code>AW-*</code></td>
              <td>Google Ads para conversiones y remarketing con consentimiento.</td>
              <td>Publicidad</td>
              <td>180 días</td>
            </tr>
            <tr>
              <td><code>elajs</code> / <code>elfsight</code></td>
              <td>Elfsight controla la carga del widget de reseñas.</td>
              <td>Funcional</td>
              <td>Sesión hasta 1 día según navegador</td>
            </tr>
          </tbody>
        </table>
        <p className="politica-note">
          El widget de testimonios y el mapa de Google Maps también requieren
          cookies de terceros. Estos recursos se cargan únicamente si permite
          cookies funcionales o analíticas en el banner de consentimientos.
        </p>
      </>
    ),
  },
  {
    id: "gestion",
    title: "4. Cómo gestionar las cookies",
    content: (
      <>
        <p>
          Puede modificar sus preferencias desde el banner de cookies o
          borrando manualmente las cookies desde el navegador (Chrome, Firefox,
          Safari, Edge). También puede usar plugins que bloqueen cookies de terceros.
        </p>
        <p>
          Para bloquear solo cookies de terceros sin afectar las esenciales,
          configure las opciones del navegador e incluya nuestros dominios
          en excepciones si desea mantenerlo funcional.
        </p>
      </>
    ),
  },
  {
    id: "derechos",
    title: "5. Derechos ARCO y contacto",
    content: (
      <>
        <p>
          Los usuarios pueden ejercer los derechos de acceso, rectificación,
          supresión, oposición, limitación y portabilidad dirigendo un email a
          <a href="mailto:info@toledoconsultora.com">info@toledoconsultora.com</a>, indicando
          el derecho que desea ejercer.
        </p>
        <p>
          Si no recibe respuesta en 30 días, puede reclamar ante la Agencia Española
          de Protección de Datos (AEPD) o ante la autoridad de control correspondiente
          de su país.
        </p>
      </>
    ),
  },
];

const PoliticaCookies = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="politica-section" aria-label="Política de Cookies">
      <div className="politica-container">
        <header className="politica-header">
          <span className="politica-badge">GDPR · AEPD · LSSI</span>
          <h1>Política de Cookies</h1>
          <p className="politica-lead">
            Explicamos qué cookies usamos, con qué finalidad, qué duración tienen
            y cómo puede administrar su consentimiento.
          </p>
          <p className="politica-version">
            Versión 1.0 — última actualización: 20 de marzo de 2026
          </p>
        </header>

        <nav className="politica-nav" aria-label="Índice de la política de cookies">
          <p className="politica-nav-title">Contenido</p>
          <ol>
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="politica-body">
          {SECTIONS.map((section) => (
            <article key={section.id} id={section.id} className="politica-section-block">
              <h2>{section.title}</h2>
              <div className="politica-content">{section.content}</div>
            </article>
          ))}
        </div>

        <footer className="politica-footer">
          <p>
            ¿Dudas o solicitudes sobre cookies? Escríbanos a{" "}
            <a href="mailto:info@toledoconsultora.com">info@toledoconsultora.com</a>.
          </p>
          <div className="politica-footer-links">
            <a href="/politica-de-privacidad">Política de Privacidad</a>
            <span>·</span>
            <a href="/terminos-y-condiciones">Términos y Condiciones</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default PoliticaCookies;
