import React, { useEffect } from "react";
import "../styles/politica.css";

const SECTIONS = [
  {
    id: "aceptacion",
    title: "1. Aceptación del Servicio",
    content: (
      <p>
        Al contratar, solicitar presupuesto o utilizar los formularios de este
        sitio, usted declara haber leído y aceptado estas condiciones de
        servicio, junto con la Política de Privacidad, Política de Cookies y
        Política de Seguridad vigentes.
      </p>
    ),
  },
  {
    id: "alcance",
    title: "2. Alcance y Naturaleza de los Servicios",
    content: (
      <ul>
        <li>Consultoría tecnológica y digital.</li>
        <li>Servicios de marketing, SEO y optimización web.</li>
        <li>Desarrollo, mantenimiento y soporte técnico.</li>
        <li>Servicios de auditoría y mejora de seguridad web.</li>
      </ul>
    ),
  },
  {
    id: "obligaciones-cliente",
    title: "3. Obligaciones del Cliente",
    content: (
      <ul>
        <li>Proveer información veraz y actualizada.</li>
        <li>No utilizar los servicios para actividades ilícitas.</li>
        <li>Respetar plazos de aprobación y validación entregables.</li>
        <li>Abonar los servicios según la propuesta acordada.</li>
      </ul>
    ),
  },
  {
    id: "propiedad",
    title: "4. Propiedad Intelectual y Uso",
    content: (
      <>
        <p>
          Salvo pacto en contrario, el código, contenidos, documentación y
          activos creados para el cliente se entregan bajo las condiciones
          comerciales acordadas en la propuesta o contrato.
        </p>
        <p>
          El uso de marcas y materiales de terceros sigue sujeto a sus
          respectivas licencias.
        </p>
      </>
    ),
  },
  {
    id: "responsabilidad",
    title: "5. Limitación de Responsabilidad",
    content: (
      <p>
        Toledo Consultora IT realizará los servicios bajo criterios
        profesionales y buenas prácticas. No garantiza resultados comerciales
        específicos ajenos al control técnico directo (por ejemplo, decisiones
        de plataformas externas, cambios de algoritmos o eventos de fuerza
        mayor).
      </p>
    ),
  },
  {
    id: "modificaciones",
    title: "6. Actualizaciones de Condiciones",
    content: (
      <>
        <p>
          Estas condiciones pueden actualizarse para reflejar cambios de
          servicio, procesos internos o normativa aplicable.
        </p>
        <p className="politica-version">
          Versión 1.0 - Última actualización: 25 de marzo de 2026
        </p>
      </>
    ),
  },
];

const CondicionesAceptacionServicio = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="politica-section" aria-label="Condiciones de Aceptación del Servicio">
      <div className="politica-container">
        <header className="politica-header">
          <span className="politica-badge">TÉRMINOS COMERCIALES · ACEPTACIÓN</span>
          <h1>Condiciones de Aceptación del Servicio</h1>
          <p className="politica-lead">
            Condiciones generales aplicables al uso y contratación de los
            servicios ofrecidos en este sitio.
          </p>
          <p className="politica-version">
            Versión 1.0 - Última actualización: 25 de marzo de 2026
          </p>
        </header>

        <nav className="politica-nav" aria-label="Índice de condiciones">
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
          <div className="politica-footer-links">
            <a href="/politica-de-privacidad">Política de Privacidad</a>
            <span>·</span>
            <a href="/politica-de-cookies">Política de Cookies</a>
            <span>·</span>
            <a href="/politica-de-seguridad">Política de Seguridad</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CondicionesAceptacionServicio;
