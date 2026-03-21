// src/components/Politica/Politica.jsx
// GDPR / RGPD Art. 13 compliant — Política de Privacidad
// Última revisión: 2026-03-20
// Responsable: Toledo Consultora IT — info@toledoconsultora.com

import React from "react";
import "../styles/politica.css";

// ── Secciones de la política ──────────────────────────────────────────────────

const SECTIONS = [
  {
    id: "responsable",
    title: "1. Responsable del Tratamiento",
    content: (
      <>
        <p>
          En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018
          de Protección de Datos (LOPDGDD), le informamos:
        </p>
        <table className="politica-table">
          <tbody>
            <tr><th>Denominación</th><td>Toledo Consultora IT</td></tr>
            <tr><th>CTO / Responsable</th><td>Eduardo Toledo</td></tr>
            <tr><th>Domicilio</th><td>Posadas, Misiones, Argentina</td></tr>
            <tr><th>Email de contacto</th><td><a href="mailto:info@toledoconsultora.com">info@toledoconsultora.com</a></td></tr>
            <tr><th>Sitio web</th><td><a href="https://toledoconsultora.com" rel="noopener noreferrer">https://toledoconsultora.com</a></td></tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: "datos-recogidos",
    title: "2. Datos Personales que Recopilamos",
    content: (
      <>
        <p>Recopilamos las siguientes categorías de datos según el canal de interacción:</p>

        <h4>2.1 Formulario de contacto</h4>
        <ul>
          <li>Nombre y apellido</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono (opcional)</li>
          <li>Mensaje de consulta</li>
        </ul>
        <p className="politica-note">
          Este formulario utiliza <strong>EmailJS</strong> para el envío. EmailJS actúa como
          encargado del tratamiento bajo acuerdo de confidencialidad. Los datos se transmiten
          cifrados y se utilizan exclusivamente para enviar el mensaje al equipo de Toledo Consultora IT.
        </p>

        <h4>2.2 Datos de navegación (analítica)</h4>
        <ul>
          <li>Dirección IP anonimizada</li>
          <li>Tipo de navegador y sistema operativo</li>
          <li>Páginas visitadas y duración de la sesión</li>
          <li>Fuente de tráfico (búsqueda orgánica, directo, referencia)</li>
        </ul>
        <p className="politica-note">
          Estos datos se recogen mediante <strong>Google Analytics (G-WENNK2M7Y0)</strong> y
          <strong> Google Ads (AW-16912032526)</strong> únicamente si usted otorga consentimiento
          explícito a través del banner de cookies. Sin consentimiento, estos scripts no se cargan.
        </p>

        <h4>2.3 Cookies</h4>
        <p>
          Para información detallada sobre las cookies utilizadas, sus finalidades y cómo
          gestionarlas, consulte nuestra{" "}
          <a href="/politica-de-cookies">Política de Cookies</a>.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "3. Finalidades y Bases Jurídicas del Tratamiento",
    content: (
      <>
        <p>
          El artículo 6 del RGPD exige que todo tratamiento de datos tenga una base jurídica
          legítima. A continuación se detallan las finalidades y su base legal correspondiente:
        </p>
        <table className="politica-table">
          <thead>
            <tr>
              <th>Finalidad</th>
              <th>Base jurídica (Art. 6 RGPD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Responder consultas enviadas por formulario o email</td>
              <td>Art. 6.1(b) — Ejecución de un contrato o medidas precontractuales</td>
            </tr>
            <tr>
              <td>Envío de presupuestos y propuestas comerciales</td>
              <td>Art. 6.1(b) — Medidas precontractuales a petición del interesado</td>
            </tr>
            <tr>
              <td>Análisis de uso del sitio web (Google Analytics)</td>
              <td>Art. 6.1(a) — Consentimiento explícito del usuario</td>
            </tr>
            <tr>
              <td>Publicidad y remarketing (Google Ads)</td>
              <td>Art. 6.1(a) — Consentimiento explícito del usuario</td>
            </tr>
            <tr>
              <td>Seguridad del sitio web y protección contra fraude</td>
              <td>Art. 6.1(f) — Interés legítimo del responsable</td>
            </tr>
            <tr>
              <td>Cumplimiento de obligaciones legales</td>
              <td>Art. 6.1(c) — Obligación legal aplicable</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: "conservacion",
    title: "4. Plazos de Conservación",
    content: (
      <>
        <p>Los datos personales se conservan durante los siguientes plazos:</p>
        <table className="politica-table">
          <thead>
            <tr><th>Tipo de dato</th><th>Plazo de conservación</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Datos de consultas y contacto sin relación contractual</td>
              <td>12 meses desde el último contacto</td>
            </tr>
            <tr>
              <td>Datos de clientes con contrato vigente</td>
              <td>Duración del contrato + 5 años (obligación fiscal y mercantil)</td>
            </tr>
            <tr>
              <td>Datos de analítica web (Google Analytics)</td>
              <td>14 meses (configuración de retención estándar de Google)</td>
            </tr>
            <tr>
              <td>Cookie de consentimiento (<code>toledo_cookie_consent</code>)</td>
              <td>365 días si aceptó / 30 días si rechazó</td>
            </tr>
            <tr>
              <td>Registros de seguridad (logs del servidor)</td>
              <td>90 días</td>
            </tr>
          </tbody>
        </table>
        <p>
          Transcurridos estos plazos, los datos serán suprimidos o anonimizados de forma irreversible.
        </p>
      </>
    ),
  },
  {
    id: "terceros",
    title: "5. Destinatarios y Encargados del Tratamiento",
    content: (
      <>
        <p>
          Toledo Consultora IT no cede ni vende datos personales a terceros con fines
          comerciales propios. Los datos pueden ser accedidos por los siguientes
          <strong> encargados del tratamiento</strong> bajo acuerdo contractual y en el
          marco de los servicios prestados:
        </p>
        <table className="politica-table">
          <thead>
            <tr>
              <th>Encargado</th>
              <th>Finalidad</th>
              <th>País / Transferencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google LLC (Analytics + Ads)</td>
              <td>Analítica web y publicidad (solo con consentimiento)</td>
              <td>EE.UU. — Cláusulas contractuales tipo UE</td>
            </tr>
            <tr>
              <td>EmailJS</td>
              <td>Envío de formularios de contacto</td>
              <td>EE.UU. — Cláusulas contractuales tipo UE</td>
            </tr>
            <tr>
              <td>Netlify Inc.</td>
              <td>Alojamiento del sitio web</td>
              <td>EE.UU. / AWS eu-south-2 — Cláusulas contractuales tipo UE</td>
            </tr>
            <tr>
              <td>Railway</td>
              <td>Infraestructura de backend y base de datos</td>
              <td>EE.UU. / AWS eu-south-2 — Cláusulas contractuales tipo UE</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: "transferencias",
    title: "6. Transferencias Internacionales de Datos",
    content: (
      <>
        <p>
          Toledo Consultora IT tiene su sede en Argentina. La Comisión Europea reconoció a
          Argentina como país con nivel adecuado de protección de datos personales mediante
          Decisión 2003/490/CE, lo que permite la transferencia de datos desde la UE a
          Argentina sin necesidad de garantías adicionales.
        </p>
        <p>
          Para los encargados del tratamiento ubicados en EE.UU. (Google, EmailJS, Netlify, Railway),
          las transferencias se realizan al amparo de las{" "}
          <strong>Cláusulas Contractuales Tipo</strong> aprobadas por la Comisión Europea
          (Decisión de Ejecución UE 2021/914), que garantizan un nivel de protección equivalente
          al exigido en el RGPD.
        </p>
      </>
    ),
  },
  {
    id: "derechos",
    title: "7. Sus Derechos (ARCO+)",
    content: (
      <>
        <p>
          En virtud del RGPD, usted tiene los siguientes derechos sobre sus datos personales:
        </p>
        <table className="politica-table">
          <tbody>
            <tr>
              <th>Acceso (Art. 15)</th>
              <td>Solicitar una copia de los datos personales que tratamos sobre usted.</td>
            </tr>
            <tr>
              <th>Rectificación (Art. 16)</th>
              <td>Solicitar la corrección de datos inexactos o incompletos.</td>
            </tr>
            <tr>
              <th>Supresión (Art. 17)</th>
              <td>Solicitar la eliminación de sus datos cuando ya no sean necesarios o retire su consentimiento.</td>
            </tr>
            <tr>
              <th>Oposición (Art. 21)</th>
              <td>Oponerse al tratamiento basado en interés legítimo o para fines de marketing.</td>
            </tr>
            <tr>
              <th>Limitación (Art. 18)</th>
              <td>Solicitar que suspendamos el tratamiento mientras se resuelve una reclamación.</td>
            </tr>
            <tr>
              <th>Portabilidad (Art. 20)</th>
              <td>Recibir sus datos en formato estructurado y legible por máquina para trasladarlos a otro responsable.</td>
            </tr>
            <tr>
              <th>Retirada del consentimiento</th>
              <td>Retirar el consentimiento en cualquier momento para los tratamientos basados en el Art. 6.1(a), sin que ello afecte a la licitud del tratamiento previo.</td>
            </tr>
          </tbody>
        </table>
        <p>
          Para ejercer cualquiera de estos derechos, envíe un email a{" "}
          <a href="mailto:info@toledoconsultora.com">info@toledoconsultora.com</a> con
          asunto <strong>"Ejercicio de derechos RGPD"</strong> e indique el derecho que desea
          ejercer. Responderemos en un plazo máximo de <strong>30 días</strong>.
        </p>
        <p>
          Si considera que el tratamiento de sus datos no es conforme al RGPD, tiene derecho a
          presentar una reclamación ante la{" "}
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
            Agencia Española de Protección de Datos (AEPD)
          </a>{" "}
          o ante la autoridad de control competente de su país de residencia.
        </p>
      </>
    ),
  },
  {
    id: "seguridad",
    title: "8. Medidas de Seguridad Técnicas y Organizativas",
    content: (
      <>
        <p>
          En cumplimiento del Art. 32 del RGPD, implementamos las siguientes medidas:
        </p>
        <ul>
          <li>
            <strong>Cifrado en tránsito:</strong> HTTPS con TLS 1.2+ en todas las comunicaciones.
            HSTS activado con <code>max-age=31536000; includeSubDomains; preload</code>.
          </li>
          <li>
            <strong>Cabeceras de seguridad HTTP:</strong> Content-Security-Policy, X-Frame-Options (DENY),
            X-Content-Type-Options (nosniff), Referrer-Policy y Permissions-Policy.
          </li>
          <li>
            <strong>Consentimiento previo al tracking:</strong> Google Analytics y Google Ads
            no se cargan hasta que el usuario acepta explícitamente mediante el banner de cookies
            (Art. 7 RGPD).
          </li>
          <li>
            <strong>Cookies seguras:</strong> Todas las cookies emitidas incluyen los atributos
            <code> Secure</code>, <code>HttpOnly</code> y <code>SameSite=Strict</code>.
          </li>
          <li>
            <strong>Control de acceso:</strong> Los sistemas internos requieren autenticación
            multifactor y acceso por rol mínimo necesario.
          </li>
          <li>
            <strong>Divulgación responsable:</strong> Canal de reporte de vulnerabilidades
            disponible en{" "}
            <a href="/.well-known/security.txt">/.well-known/security.txt</a> según RFC 9116.
          </li>
          <li>
            <strong>Auditorías periódicas:</strong> Revisión de seguridad bajo estándar
            OWASP Top 10 con periodicidad trimestral.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "menores",
    title: "9. Menores de Edad",
    content: (
      <p>
        Los servicios de Toledo Consultora IT están dirigidos exclusivamente a empresas y
        profesionales mayores de 18 años. No recopilamos conscientemente datos personales de
        menores. Si tiene conocimiento de que un menor nos ha proporcionado datos sin
        consentimiento parental, contáctenos en{" "}
        <a href="mailto:info@toledoconsultora.com">info@toledoconsultora.com</a> para
        proceder a su supresión inmediata.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "10. Actualizaciones de esta Política",
    content: (
      <>
        <p>
          Esta política puede ser actualizada para reflejar cambios en nuestros servicios,
          en la legislación aplicable o en las prácticas de privacidad. La versión vigente
          estará siempre disponible en esta página con la fecha de última actualización.
        </p>
        <p>
          Para cambios sustanciales que afecten a tratamientos basados en consentimiento,
          le notificaremos con antelación suficiente para que pueda decidir si mantiene
          o retira su consentimiento.
        </p>
        <p className="politica-version">
          Versión actual: <strong>2.0</strong> — Última actualización: <strong>20 de marzo de 2026</strong>
        </p>
      </>
    ),
  },
];

// ── Componente ────────────────────────────────────────────────────────────────

export const Politica = () => {
  return (
    <section id="politica-privacidad" className="politica-section" aria-label="Política de Privacidad">
      <div className="politica-container">

        {/* Header */}
        <header className="politica-header">
          <span className="politica-badge">RGPD · NIS2 · LOPDGDD</span>
          <h1>Política de Privacidad</h1>
          <p className="politica-lead">
            Tratamos sus datos con responsabilidad y transparencia.
            Esta política describe qué datos recopilamos, para qué los usamos,
            cuánto tiempo los conservamos y cómo puede ejercer sus derechos.
          </p>
          <p className="politica-version">
            Versión 2.0 — Última actualización: 20 de marzo de 2026
          </p>
        </header>

        {/* Índice de navegación */}
        <nav className="politica-nav" aria-label="Índice de la política">
          <p className="politica-nav-title">Contenido</p>
          <ol>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Secciones */}
        <div className="politica-body">
          {SECTIONS.map((s) => (
            <article key={s.id} id={s.id} className="politica-section-block">
              <h2>{s.title}</h2>
              <div className="politica-content">{s.content}</div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="politica-footer">
          <p>
            ¿Tiene preguntas sobre esta política? Contáctenos en{" "}
            <a href="mailto:info@toledoconsultora.com">info@toledoconsultora.com</a>
            {" "}o mediante los canales habilitados en nuestro sitio web.
          </p>
          <a href="/" className="politica-back">← Volver al inicio</a>
        </footer>

      </div>
    </section>
  );
};

export default Politica;