import React from "react";



// import "./team.css"; // Asegúrate de que este archivo contenga los estilos necesarios
//  Eliminé la importación de team.css y moví los estilos al componente.
const TerminosYCondiciones = () => {
  return (
    <section className="terminos-y-condiciones-section" style={sectionStyle}>
      <div className="container" style={containerStyle}>
        <h2 className="terminos-y-condiciones-title" style={titleStyle}>Términos y Condiciones</h2>
        <p className="terminos-y-condiciones-parrafo" style={paragraphStyle}>
          Los siguientes términos y condiciones (en adelante, "Términos") rigen el uso de
          nuestros servicios. Al acceder o utilizar nuestros servicios, usted acepta
          quedar vinculado por estos Términos.
        </p>

        <h3 className="terminos-y-condiciones-subtitulo" style={subTitleStyle}>1. Alcance de los Servicios</h3>
        <p className="terminos-y-condiciones-parrafo" style={paragraphStyle}>
          Ofrecemos servicios de desarrollo de software, diseño y consultoría
          tecnológica. El alcance específico de los servicios a proporcionar se
          detallará en la propuesta o contrato correspondiente.
        </p>
        <p className="terminos-y-condiciones-parrafo" style={paragraphStyle}>
          <strong style={strongStyle}>
            Cualquier elemento, funcionalidad o trabajo que no esté explícitamente
            detallado en la documentación, propuesta o contrato, no está incluido
            dentro del alcance del servicio.
          </strong>
        </p>

        <h3 className="terminos-y-condiciones-subtitulo" style={subTitleStyle}>2. Cotizaciones y Pagos</h3>
        <p className="terminos-y-condiciones-parrafo" style={paragraphStyle}>
          Todas las cotizaciones tienen una validez de [X] días a partir de la fecha
          de emisión. Los precios cotizados no incluyen impuestos, a menos que se
          indique lo contrario.
        </p>
        <p className="terminos-y-condiciones-parrafo" style={paragraphStyle}>
          Se requerirá un pago inicial del [X]% antes del inicio del proyecto. Los
          pagos subsiguientes se realizarán de acuerdo con el cronograma de pagos
          establecido en el contrato.
        </p>
        <p className="terminos-y-condiciones-parrafo" style={paragraphStyle}>
          <strong style={strongStyle}>
            Si un servicio o entregable no está estipulado en la cotización original,
            se proporcionará una cotización por separado y estará sujeto a
            aprobación antes de su realización.
          </strong>
        </p>

        <h3 className="terminos-y-condiciones-subtitulo" style={subTitleStyle}>3. Propiedad Intelectual</h3>
        <p className="terminos-y-condiciones-parrafo" style={paragraphStyle}>
          La propiedad intelectual de todo el código, diseño y materiales desarrollados
          por nosotros será propiedad de [Nombre de la Empresa], hasta que se
          reciba el pago completo. Tras la recepción del pago completo, se transferirá
          la propiedad al cliente, según lo estipulado en el contrato.
        </p>

        <h3 className="terminos-y-condiciones-subtitulo" style={subTitleStyle}>4. Confidencialidad</h3>
        <p className="terminos-y-condiciones-parrafo" style={paragraphStyle}>
          Ambas partes se comprometen a mantener la confidencialidad de toda la
          información intercambiada durante la prestación de los servicios.
        </p>

        <h3 className="terminos-y-condiciones-subtitulo" style={subTitleStyle}>5. Garantía</h3>
        <p className="terminos-y-condiciones-parrafo" style={paragraphStyle}>
          Garantizamos que nuestros servicios se prestarán de manera profesional y
          conforme a los estándares de la industria. La garantía se limita a [X] días
          a partir de la fecha de entrega.
        </p>

        <h3 className="terminos-y-condiciones-subtitulo" style={subTitleStyle}>6. Limitación de Responsabilidad</h3>
        <p className="terminos-y-condiciones-parrafo" style={paragraphStyle}>
          En ningún caso seremos responsables por daños indirectos, incidentales,
          especiales o consecuentes que surjan de la prestación de nuestros
          servicios.
        </p>

        <h3 className="terminos-y-condiciones-subtitulo" style={subTitleStyle}>7. Rescisión</h3>
        <p className="terminos-y-condiciones-parrafo" style={paragraphStyle}>
          Cualquiera de las partes puede rescindir el contrato en caso de
          incumplimiento de la otra parte, previa notificación por escrito con [X]
          días de antelación.
        </p>
      </div>
    </section>
  );
};




// Estilos en línea (puedes moverlos a un archivo CSS si lo prefieres)
const sectionStyle = {
  padding: "60px 0",
  backgroundColor: "#f9f9f9",
  
  fontFamily: '"Open Sans", sans-serif',
};

const containerStyle = {
  maxWidth: "1140px",
  margin: "0 auto",
  padding: "0 20px",
};

const titleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  color: "#003766",
  marginBottom: "20px",
  textAlign: "center",
  lineHeight: "1.2",
};

const subTitleStyle = {
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#003766",
  marginTop: "40px",
  marginBottom: "20px",
  lineHeight: "1.4",
};

const paragraphStyle = {
  fontSize: "1.1rem",
  lineHeight: "1.7",
  marginBottom: "20px",
  textAlign: "justify",
  color: "#555",
};

const strongStyle = {
  fontWeight: "600",
  color: "#000",
};
export default TerminosYCondiciones;