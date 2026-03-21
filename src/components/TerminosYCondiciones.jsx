// src/components/TerminosYCondiciones/TerminosYCondiciones.jsx
// Términos y Condiciones — Toledo Consultora IT
// Versión: 2.0 | Última revisión: 2026-03-20
// Aplica a: servicios de auditoría, desarrollo web, consultoría y mantenimiento

import { useEffect } from "react";
import "../styles/TerminosYCondiciones.css";

// ── Secciones ─────────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    id: "objeto",
    title: "1. Objeto y Partes",
    content: (
      <>
        <p>
          Los presentes Términos y Condiciones (en adelante, "Términos") regulan la
          relación comercial entre <strong>Toledo Consultora IT</strong> (en adelante,
          "el Prestador"), con domicilio en Posadas, Misiones, Argentina, y cualquier
          persona física o jurídica (en adelante, "el Cliente") que contrate sus
          servicios de auditoría de ciberseguridad, desarrollo web, consultoría
          tecnológica y/o mantenimiento.
        </p>
        <p>
          La aceptación de una propuesta, el inicio de un proyecto o el pago de cualquier
          factura implica la aceptación plena e incondicional de estos Términos.
        </p>
      </>
    ),
  },
  {
    id: "alcance",
    title: "2. Alcance de los Servicios",
    content: (
      <>
        <p>
          El Prestador ofrece los siguientes tipos de servicios, cuyo alcance específico
          se detallará en cada propuesta o contrato:
        </p>
        <ul>
          <li>Auditorías de seguridad web (OWASP Top 10, CVSS)</li>
          <li>Consultoría de cumplimiento normativo (NIS2, GDPR/RGPD, CRA, DORA)</li>
          <li>Desarrollo de aplicaciones web (React, Node.js, Express, PostgreSQL, MongoDB)</li>
          <li>SEO técnico y posicionamiento en motores de búsqueda e IA</li>
          <li>Gestión de campañas publicitarias (Google Ads, Meta Ads)</li>
          <li>Mantenimiento técnico y soporte continuo (CTO-as-a-Service)</li>
        </ul>
        <div className="tyc-alert">
          <strong>Cláusula de alcance estricto:</strong> Cualquier funcionalidad,
          entregable o trabajo que no esté explícitamente descrito en la propuesta o
          contrato firmado queda fuera del alcance del servicio. Las solicitudes
          adicionales generarán una cotización separada sujeta a aprobación previa.
        </div>
        <p>
          Los informes de auditoría y planes de remediación entregados por el Prestador
          tienen carácter técnico-consultivo. <strong>No constituyen asesoramiento
          jurídico</strong> ni garantizan el cumplimiento legal completo frente a ninguna
          autoridad reguladora. Para medidas legales definitivas, se recomienda consultar
          con un asesor jurídico especializado en protección de datos.
        </p>
      </>
    ),
  },
  {
    id: "cotizaciones",
    title: "3. Cotizaciones, Precios y Pagos",
    content: (
      <>
        <h4>3.1 Validez de las cotizaciones</h4>
        <p>
          Las cotizaciones tienen una validez de <strong>15 días corridos</strong> desde
          la fecha de emisión, salvo indicación expresa en contrario. Transcurrido ese
          plazo sin confirmación del Cliente, el Prestador podrá revisarlas.
        </p>

        <h4>3.2 Impuestos e infraestructura</h4>
        <p>
          Los precios cotizados corresponden exclusivamente a los honorarios profesionales
          del equipo. <strong>No incluyen:</strong>
        </p>
        <ul>
          <li>IVA ni impuestos locales aplicables según la jurisdicción del Cliente</li>
          <li>
            Costos de infraestructura de terceros (Netlify, Railway, AWS, Twilio, S3, etc.),
            que se contratan directamente a nombre del Cliente y se facturan por separado
          </li>
          <li>Licencias de software de terceros salvo indicación explícita</li>
        </ul>
        <p>
          La infraestructura estándar para un proyecto pyme ronda los <strong>€80–120/mes</strong>{" "}
          dependiendo del uso (Netlify ~€20, Railway ~€20, S3 ~€20, Twilio ~€20–40).
        </p>

        <h4>3.3 Condiciones de pago</h4>
        <table className="tyc-table">
          <thead>
            <tr><th>Tipo de servicio</th><th>Estructura de pago</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Auditorías (Snapshot, Básico, Profesional, Avanzado)</td>
              <td>100% adelantado antes del inicio</td>
            </tr>
            <tr>
              <td>Proyectos de desarrollo hasta €2.000</td>
              <td>50% al inicio — 50% contra entrega</td>
            </tr>
            <tr>
              <td>Proyectos de desarrollo superiores a €2.000</td>
              <td>40% al inicio — 40% a mitad de proyecto — 20% contra entrega</td>
            </tr>
            <tr>
              <td>Servicios mensuales (mantenimiento, SEO, Ads, CTO-as-a-Service)</td>
              <td>Pago mensual adelantado, primeros 5 días hábiles del mes</td>
            </tr>
          </tbody>
        </table>
        <p>
          El inicio del trabajo queda condicionado a la confirmación del pago correspondiente.
          Los pagos pueden realizarse por transferencia bancaria, PayPal o criptomonedas
          (USDT/USDC) según acuerdo previo.
        </p>

        <h4>3.4 Mora y suspensión del servicio</h4>
        <p>
          El incumplimiento de los plazos de pago por más de <strong>7 días corridos</strong>{" "}
          faculta al Prestador a suspender la prestación del servicio sin responsabilidad,
          hasta regularización del saldo pendiente. Los plazos de entrega se suspenden
          automáticamente durante el período de mora.
        </p>

        <h4>3.5 Urgencias y trabajo fuera de horario</h4>
        <p>
          Las solicitudes urgentes que requieran atención fuera del horario pactado (lunes
          a viernes, 9:00–18:00 ART) o que impliquen entregables no contemplados en el
          contrato original tendrán un <strong>recargo del 50%</strong> sobre la tarifa hora
          acordada, sin superar la jornada de <strong>10 horas laborales por día</strong>.
        </p>
      </>
    ),
  },
  {
    id: "propiedad",
    title: "4. Propiedad Intelectual y Entrega del Proyecto",
    content: (
      <>
        <h4>4.1 Transferencia de propiedad</h4>
        <p>
          Todo el código, diseño, documentación y activos digitales desarrollados por el
          Prestador para el Cliente serán propiedad del Cliente <strong>una vez recibido
          el pago completo</strong> de la etapa o proyecto correspondiente.
        </p>
        <p>
          Mientras existan pagos pendientes, el Prestador conserva los derechos de
          propiedad intelectual sobre los materiales no pagados y puede suspender su
          entrega o uso.
        </p>

        <h4>4.2 Entregables del proyecto</h4>
        <p>
          Al finalizar un proyecto o al momento acordado contractualmente, el Prestador
          entregará al Cliente la totalidad de los activos del proyecto, incluyendo:
        </p>
        <ul>
          <li>Repositorio completo en GitHub (transferencia de ownership)</li>
          <li>Credenciales y acceso a cuentas de Railway, Netlify, AWS, Twilio, N8N, Nodemailer</li>
          <li>Documentación técnica del sistema</li>
          <li>Colección de Postman (APIs documentadas)</li>
          <li>Tablero de Trello con historial, avances y deuda técnica registrada</li>
          <li>Variables de entorno y secrets en vault seguro</li>
        </ul>
        <p>
          El objetivo es que cualquier equipo técnico posterior pueda mantener el proyecto
          de forma independiente. <strong>No se aplican cláusulas de lock-in tecnológico.</strong>
        </p>

        <h4>4.3 Herramientas y librerías de terceros</h4>
        <p>
          El código desarrollado puede incorporar librerías y paquetes de código abierto
          bajo licencias MIT, Apache 2.0 u otras licencias permisivas. El Prestador no
          transfiere derechos sobre software de terceros; estos están sujetos a sus
          propias licencias.
        </p>

        <h4>4.4 Uso del proyecto en portafolio</h4>
        <p>
          Salvo instrucción expresa en contrario por parte del Cliente, el Prestador
          se reserva el derecho de mencionar el proyecto en su portafolio y materiales
          de marketing, sin revelar información confidencial.
        </p>
      </>
    ),
  },
  {
    id: "confidencialidad",
    title: "5. Confidencialidad",
    content: (
      <>
        <p>
          Ambas partes se comprometen a mantener estricta confidencialidad sobre toda la
          información técnica, comercial, financiera o estratégica intercambiada durante
          la relación contractual y durante los <strong>3 años posteriores</strong> a su
          finalización.
        </p>
        <p>
          En particular, el Prestador se compromete a:
        </p>
        <ul>
          <li>
            No divulgar vulnerabilidades, hallazgos de auditoría ni información de
            infraestructura del Cliente a ningún tercero
          </li>
          <li>
            Tratar los resultados de pentesting y análisis OWASP con máxima
            confidencialidad, entregándolos exclusivamente a los contactos autorizados
            por el Cliente
          </li>
          <li>
            Eliminar de sus sistemas las credenciales temporales de acceso
            una vez concluida la auditoría autenticada
          </li>
        </ul>
        <p>
          La obligación de confidencialidad no aplica a información que sea de dominio
          público por causas ajenas al Prestador, ni a información requerida por
          mandato legal o judicial.
        </p>
      </>
    ),
  },
  {
    id: "garantia",
    title: "6. Garantía y Correcciones",
    content: (
      <>
        <table className="tyc-table">
          <thead>
            <tr><th>Tipo de servicio</th><th>Período de garantía</th><th>Alcance</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Auditorías de seguridad</td>
              <td>Sin garantía de resultado</td>
              <td>
                Los informes reflejan el estado del sistema en la fecha del análisis.
                El Prestador no garantiza la ausencia total de vulnerabilidades.
              </td>
            </tr>
            <tr>
              <td>Desarrollo web y aplicaciones</td>
              <td>30 días desde la entrega</td>
              <td>
                Corrección de bugs funcionales detectados en el código entregado,
                sin costo adicional.
              </td>
            </tr>
            <tr>
              <td>Consultoría normativa (NIS2, GDPR, CRA)</td>
              <td>Sin garantía de resultado regulatorio</td>
              <td>
                Los entregables son evidencias técnicas de buena práctica. El
                cumplimiento final ante autoridades depende de factores externos
                al control del Prestador.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          La garantía de desarrollo no cubre modificaciones solicitadas post-entrega,
          cambios en requisitos originales, actualizaciones de dependencias de terceros
          ni errores causados por modificaciones realizadas por el Cliente o terceros
          en el código entregado.
        </p>
      </>
    ),
  },
  {
    id: "responsabilidad",
    title: "7. Limitación de Responsabilidad",
    content: (
      <>
        <p>
          La responsabilidad máxima del Prestador por cualquier causa, incluyendo
          negligencia, no superará el <strong>importe total facturado al Cliente
          en los 3 meses anteriores</strong> al evento que origina el reclamo.
        </p>
        <p>En ningún caso el Prestador será responsable por:</p>
        <ul>
          <li>Daños indirectos, lucro cesante o pérdida de negocio</li>
          <li>
            Sanciones regulatorias (AEPD, ENISA u otras) impuestas al Cliente,
            aun cuando el Prestador haya prestado servicios de consultoría normativa
          </li>
          <li>
            Vulnerabilidades o brechas de seguridad producidas tras la entrega del
            informe de auditoría, especialmente si las remediaciones recomendadas
            no fueron implementadas
          </li>
          <li>
            Interrupciones de servicio causadas por terceros proveedores de
            infraestructura (AWS, Netlify, Railway, Twilio, etc.)
          </li>
          <li>
            Pérdida de datos causada por factores externos al alcance del servicio contratado
          </li>
        </ul>
        <div className="tyc-alert tyc-alert--warn">
          <strong>Nota sobre auditorías:</strong> Un informe de seguridad OWASP o NIS2
          reduce el riesgo pero no lo elimina por completo. El Prestador actúa como
          consultor técnico, no como garante del cumplimiento regulatorio definitivo
          del Cliente ante ningún organismo.
        </div>
      </>
    ),
  },
  {
    id: "rescision",
    title: "8. Duración, Rescisión y Cancelación",
    content: (
      <>
        <h4>8.1 Servicios puntuales (auditorías, proyectos)</h4>
        <p>
          El contrato se extingue con la entrega del entregable final y el pago completo.
          Si el Cliente cancela un proyecto en curso, abonará los trabajos realizados
          hasta la fecha de notificación más un <strong>10% del valor restante</strong>
          como compensación por reserva de capacidad.
        </p>

        <h4>8.2 Servicios recurrentes (mantenimiento, SEO, CTO-as-a-Service)</h4>
        <p>
          Cualquiera de las partes puede rescindir servicios mensuales con un preaviso
          de <strong>15 días corridos</strong> por escrito (email a{" "}
          <a href="mailto:info@toledoconsultora.com">info@toledoconsultora.com</a>).
          No se requiere permanencia mínima. El mes en curso facturado no es reembolsable.
        </p>

        <h4>8.3 Rescisión por incumplimiento</h4>
        <p>
          El Prestador puede rescindir el contrato de forma inmediata y sin penalidad en
          caso de:
        </p>
        <ul>
          <li>Mora en el pago superior a 15 días corridos</li>
          <li>
            Uso del servicio para actividades ilegales, incluyendo el uso de informes
            de auditoría para atacar sistemas de terceros
          </li>
          <li>Comportamiento abusivo o de acoso hacia el equipo de trabajo</li>
        </ul>
      </>
    ),
  },
  {
    id: "datos",
    title: "9. Protección de Datos en la Relación Contractual",
    content: (
      <>
        <p>
          En el marco de la prestación de servicios, el Prestador puede acceder a datos
          personales de empleados, clientes o usuarios del Cliente (especialmente en
          auditorías autenticadas o desarrollo de sistemas con base de datos).
        </p>
        <p>
          En estos casos, el Prestador actúa como <strong>encargado del tratamiento</strong>{" "}
          (Art. 28 RGPD) y se compromete a:
        </p>
        <ul>
          <li>Tratar los datos únicamente para los fines del servicio contratado</li>
          <li>No ceder ni subcontratar el tratamiento sin autorización previa del Cliente</li>
          <li>Aplicar medidas de seguridad técnicas adecuadas (cifrado, acceso mínimo necesario)</li>
          <li>Eliminar o devolver los datos al finalizar el servicio</li>
          <li>Notificar al Cliente cualquier brecha de seguridad que afecte a sus datos</li>
        </ul>
        <p>
          Si el proyecto requiere un Acuerdo de Encargo de Tratamiento (DPA) formal,
          el Cliente puede solicitarlo a{" "}
          <a href="mailto:info@toledoconsultora.com">info@toledoconsultora.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "jurisdiccion",
    title: "10. Ley Aplicable y Jurisdicción",
    content: (
      <>
        <p>
          Los presentes Términos se rigen por las leyes de la{" "}
          <strong>República Argentina</strong>. Para clientes con domicilio en España o la
          Unión Europea, las disposiciones del RGPD y normativa aplicable de la UE
          prevalecerán en lo que corresponda a la protección de datos personales.
        </p>
        <p>
          En caso de controversia, las partes se someten a la jurisdicción de los
          tribunales competentes de la ciudad de{" "}
          <strong>Posadas, Misiones, Argentina</strong>, con renuncia expresa a cualquier
          otro fuero que pudiera corresponder.
        </p>
        <p>
          Antes de acudir a instancias judiciales, las partes se comprometen a intentar
          resolver cualquier disputa de buena fe mediante negociación directa durante
          un plazo de <strong>30 días</strong>.
        </p>
      </>
    ),
  },
  {
    id: "modificaciones",
    title: "11. Modificaciones",
    content: (
      <p>
        El Prestador se reserva el derecho de actualizar estos Términos. Los cambios
        sustanciales se comunicarán al Cliente por email con al menos <strong>15 días
        de antelación</strong>. El uso continuado del servicio tras esa fecha implica
        la aceptación de los nuevos Términos. La versión vigente estará siempre
        disponible en{" "}
        <a href="/terminos-y-condiciones">https://toledoconsultora.com/terminos-y-condiciones</a>.
      </p>
    ),
  },
];

// ── Componente ────────────────────────────────────────────────────────────────

const TerminosYCondiciones = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="tyc-section" aria-label="Términos y Condiciones">
      <div className="tyc-container">

        {/* Header */}
        <header className="tyc-header">
          <span className="tyc-badge">Versión 2.0 — 20 mar 2026</span>
          <h1 className="tyc-title">Términos y Condiciones</h1>
          <p className="tyc-lead">
            Estos Términos rigen todos los servicios de Toledo Consultora IT:
            auditorías de seguridad, desarrollo web, consultoría NIS2/GDPR y mantenimiento.
            Al contratar cualquier servicio, el Cliente acepta íntegramente estas condiciones.
          </p>
        </header>

        {/* Índice */}
        <nav className="tyc-nav" aria-label="Índice">
          <p className="tyc-nav-title">Contenido</p>
          <ol>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Secciones */}
        <div className="tyc-body">
          {SECTIONS.map((s) => (
            <article key={s.id} id={s.id} className="tyc-section-block">
              <h2 className="tyc-subtitle">{s.title}</h2>
              <div className="tyc-content">{s.content}</div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="tyc-footer">
          <p>
            Consultas sobre estos Términos:{" "}
            <a href="mailto:info@toledoconsultora.com">info@toledoconsultora.com</a>
          </p>
          <div className="tyc-footer-links">
            <a href="/politica-de-privacidad">Política de Privacidad</a>
            <span>·</span>
            <a href="/politica-de-cookies">Política de Cookies</a>
            <span>·</span>
            <a href="/">← Volver al inicio</a>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default TerminosYCondiciones;