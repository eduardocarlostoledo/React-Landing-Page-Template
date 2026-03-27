import React, { useEffect } from "react";
import "../styles/politica.css";

const SECTIONS = [
  {
    id: "objetivo",
    title: "1. Objetivo y Alcance",
    content: (
      <>
        <p>
          Esta Política de Seguridad define las medidas técnicas y organizativas
          aplicadas por <strong>Toledo Consultora IT</strong> para proteger la
          confidencialidad, integridad y disponibilidad de la información
          tratada en este sitio web y sus servicios asociados.
        </p>
        <p>
          Aplica a activos web, formularios de contacto, servicios en la nube,
          integraciones de terceros y procesos internos vinculados a operaciones
          digitales.
        </p>
      </>
    ),
  },
  {
    id: "controles",
    title: "2. Controles de Seguridad Implementados",
    content: (
      <ul>
        <li>Cifrado HTTPS/TLS en tránsito para todo el tráfico web.</li>
        <li>
          Cabeceras de seguridad activas: CSP, HSTS, X-Frame-Options, nosniff,
          Referrer-Policy y Permissions-Policy.
        </li>
        <li>
          Restricción de scripts y recursos de terceros mediante políticas CSP.
        </li>
        <li>Consentimiento previo para analítica y publicidad.</li>
        <li>Validaciones de formulario y controles antiabuso básicos.</li>
        <li>Actualización periódica de dependencias del frontend.</li>
      </ul>
    ),
  },
  {
    id: "gestion-incidentes",
    title: "3. Gestión de Incidentes",
    content: (
      <>
        <p>
          Ante eventos de seguridad relevantes, se activa un proceso de
          contención, análisis y remediación técnica, incluyendo registro de
          evidencia y evaluación de impacto.
        </p>
        <p>
          Cuando corresponda por normativa aplicable, se notificará a clientes o
          autoridades dentro de los plazos legales exigibles.
        </p>
      </>
    ),
  },
  {
    id: "divulgacion",
    title: "4. Divulgación Responsable de Vulnerabilidades",
    content: (
      <>
        <p>
          Si identifica una vulnerabilidad, puede reportarla por el canal
          publicado en:
          {" "}
          <a href="/.well-known/security.txt">/.well-known/security.txt</a>.
        </p>
        <p>
          Solicitamos no explotar, alterar ni divulgar públicamente los hallazgos
          antes de su validación y corrección.
        </p>
      </>
    ),
  },
  {
    id: "cumplimiento",
    title: "5. Marco de Cumplimiento",
    content: (
      <ul>
        <li>Buenas prácticas OWASP para aplicaciones web.</li>
        <li>Principios de seguridad por diseño (secure-by-design).</li>
        <li>
          Lineamientos de resiliencia y gestión de riesgos alineados a NIS2 y
          marcos de continuidad operativa.
        </li>
        <li>Controles de privacidad en coordinación con la Política de Privacidad.</li>
      </ul>
    ),
  },
  {
    id: "revision",
    title: "6. Revisión y Actualización",
    content: (
      <>
        <p>
          Esta política se revisa de forma periódica y cuando cambian los
          servicios, la arquitectura técnica o la normativa aplicable.
        </p>
        <p className="politica-version">
          Versión 1.0 - Última actualización: 25 de marzo de 2026
        </p>
      </>
    ),
  },
];

const PoliticaSeguridad = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="politica-section" aria-label="Política de Seguridad">
      <div className="politica-container">
        <header className="politica-header">
          <span className="politica-badge">OWASP · NIS2 · SEGURIDAD WEB</span>
          <h1>Política de Seguridad</h1>
          <p className="politica-lead">
            Documento de referencia sobre controles, prevención y respuesta ante
            incidentes para proteger nuestra infraestructura digital.
          </p>
          <p className="politica-version">
            Versión 1.0 - Última actualización: 25 de marzo de 2026
          </p>
        </header>

        <nav className="politica-nav" aria-label="Índice de la política de seguridad">
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
            Consultas de seguridad:
            {" "}
            <a href="mailto:security@toledoconsultora.com">security@toledoconsultora.com</a>
          </p>
          <div className="politica-footer-links">
            <a href="/politica-de-privacidad">Política de Privacidad</a>
            <span>·</span>
            <a href="/politica-de-cookies">Política de Cookies</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default PoliticaSeguridad;
