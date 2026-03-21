// src/components/AvisoLegal/AvisoLegal.jsx
// Aviso Legal — Toledo Consultora IT
// Última actualización: 20 de marzo de 2026

import { useEffect } from "react";
import "../styles/TerminosYCondiciones.css";

const SECTIONS = [
  {
    id: "titular",
    title: "1. Titularidad",
    content: (
      <>
        <p>
          Este sitio web es operado por <strong>Toledo Consultora IT</strong>,
          con domicilio registrado en C.52 / 22, Posadas, Misiones, Argentina,
          y correo electrónico <a href="mailto:info@toledoconsultora.com">info@toledoconsultora.com</a>.
          El número de teléfono oficial es +54 376 422 1063.
        </p>
        <p>
          La titularidad del dominio toledoconsultora.com y sus subdominios
          pertenece exclusivamente a Toledo Consultora IT S.A.S.
        </p>
      </>
    ),
  },
  {
    id: "objeto",
    title: "2. Objeto y alcance de los contenidos",
    content: (
      <>
        <p>
          El presente Aviso Legal regula el acceso, uso y descarga de la información
          publicada en este sitio, incluidos textos, imágenes, vídeos, formularios,
          marcas, logotipos y materiales protegidos por derechos de propiedad intelectual.
        </p>
        <p>
          El usuario se compromete a utilizar este sitio y sus recursos con fines lícitos,
          absteniéndose de realizar actuaciones contrarias a la legislación vigente,
          ni a dañar, inutilizar o sobrecargar los sistemas de Toledo Consultora IT.
        </p>
      </>
    ),
  },
  {
    id: "propiedad-intelectual",
    title: "3. Propiedad intelectual e industrial",
    content: (
      <>
        <p>
          Todos los contenidos del sitio (textos, imágenes, diseño, código,
          audio y vídeo) están protegidos como propiedad intelectual de Toledo
          Consultora IT o de sus proveedores. Queda prohibida la reproducción total
          o parcial sin autorización expresa por escrito.
        </p>
        <p>
          Las marcas, logotipos y signos distintivos que aparecen en el sitio
          son propiedad de Toledo Consultora IT o de terceros y su uso no autorizado
          se considera infracción de derechos de propiedad industrial.
        </p>
      </>
    ),
  },
  {
    id: "responsabilidad",
    title: "4. Limitación de responsabilidad",
    content: (
      <>
        <p>
          Toledo Consultora IT no garantiza la disponibilidad continua del sitio,
          la ausencia de errores o de códigos maliciosos. No responde por los daños
          directos o indirectos derivados del uso del sitio o de los contenidos
          alojados en servidores de terceros.
        </p>
        <p>
          Los enlaces a sitios externos se ofrecen únicamente como referencia.
          Toledo Consultora IT no controla ni responde del contenido, privacidad
          o funcionamiento de esas páginas.
        </p>
      </>
    ),
  },
  {
    id: "datos",
    title: "5. Acceso y tratamiento de datos",
    content: (
      <>
        <p>
          El acceso al formulario de contacto, chat o botones de mensajería directa
          supone que el usuario proporciona datos personales que se tratan siguiendo
          nuestra <a href="/politica-de-privacidad">Política de Privacidad</a>.
        </p>
        <p>
          Solo se conservan los datos estrictamente necesarios durante el tiempo
          indispensable para responder consultas o ejecutar servicios contratados,
          respetando la legislación de la Unión Europea (RGPD) y Argentina.
        </p>
      </>
    ),
  },
  {
    id: "legislacion",
    title: "6. Legislación aplicable",
    content: (
      <>
        <p>
          Las relaciones derivadas del uso del sitio se rigen por la legislación
          aplicable en la República Argentina, sin perjuicio de la aplicación de
          normas de protección de datos europeas cuando corresponda.
        </p>
        <p>
          En caso de controversia, ambas partes se someten a la jurisdicción de los
          tribunales de la ciudad de Posadas, Misiones, Argentina, con renuncia expresada
          a otros fueros posibles.
        </p>
      </>
    ),
  },
];

const AvisoLegal = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="tyc-section" aria-label="Aviso Legal">
      <div className="tyc-container">
        <header className="tyc-header">
          <span className="tyc-badge">Actualizado 2026</span>
          <h1 className="tyc-title">Aviso Legal</h1>
          <p className="tyc-lead">
            Este Aviso Legal describe las condiciones de uso del sitio web
            de Toledo Consultora IT y complementa la información publicada en
            nuestros Términos, Política de Privacidad y Política de Cookies.
          </p>
        </header>

        <nav className="tyc-nav" aria-label="Índice del Aviso Legal">
          <p className="tyc-nav-title">Contenido</p>
          <ol>
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="tyc-body">
          {SECTIONS.map((section) => (
            <article key={section.id} id={section.id} className="tyc-section-block">
              <h2 className="tyc-subtitle">{section.title}</h2>
              <div className="tyc-content">{section.content}</div>
            </article>
          ))}
        </div>

        <footer className="tyc-footer">
          <p>
            Para consultas legales o avisos de infracción, escriba a{" "}
            <a href="mailto:info@toledoconsultora.com">info@toledoconsultora.com</a>.
          </p>
          <div className="tyc-footer-links">
            <a href="/terminos-y-condiciones">Términos y Condiciones</a>
            <span>·</span>
            <a href="/politica-de-privacidad">Política de Privacidad</a>
            <span>·</span>
            <a href="/">← Volver al inicio</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default AvisoLegal;
