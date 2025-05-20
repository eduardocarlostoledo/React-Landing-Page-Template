import React from "react";
import "./TerminosYCondiciones.css";
import { useEffect } from "react";
const TerminosYCondiciones = () => {

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  return (
    <section className="tyc-section">
      <div className="tyc-container">
        <h2 className="tyc-title">Términos y Condiciones</h2>

        <p className="tyc-paragraph">
          Los siguientes términos y condiciones (en adelante, "Términos") rigen el uso de
          nuestros servicios. Al acceder o utilizar nuestros servicios, usted acepta
          quedar vinculado por estos Términos.
        </p>

        <h3 className="tyc-subtitle">1. Alcance de los Servicios</h3>
        <p className="tyc-paragraph">
          Ofrecemos servicios de desarrollo de software, diseño y consultoría
          tecnológica. El alcance específico de los servicios a proporcionar se
          detallará en la propuesta o contrato correspondiente.
        </p>
        <p className="tyc-paragraph tyc-strong">
          Cualquier elemento, funcionalidad o trabajo que no esté explícitamente
          detallado en la documentación, propuesta o contrato, no está incluido
          dentro del alcance del servicio.
        </p>

        <h3 className="tyc-subtitle">2. Cotizaciones y Pagos</h3>
        <p className="tyc-paragraph">
          Todas las cotizaciones tienen una validez de [X] días a partir de la fecha
          de emisión. Los precios cotizados no incluyen impuestos, a menos que se
          indique lo contrario.
        </p>
        <p className="tyc-paragraph">
          Se requerirá un pago inicial del [X]% antes del inicio del proyecto. Los
          pagos subsiguientes se realizarán de acuerdo con el cronograma de pagos
          establecido en el contrato.
        </p>
        <p className="tyc-paragraph tyc-strong">
          Si un servicio o entregable no está estipulado en la cotización original,
          se proporcionará una cotización por separado y estará sujeto a
          aprobación antes de su realización.
        </p>

        <h3 className="tyc-subtitle">3. Propiedad Intelectual</h3>
        <p className="tyc-paragraph">
          La propiedad intelectual de todo el código, diseño y materiales desarrollados
          por nosotros será propiedad de [Nombre de la Empresa], hasta que se
          reciba el pago completo. Tras la recepción del pago completo, se transferirá
          la propiedad al cliente, según lo estipulado en el contrato.
        </p>

        <h3 className="tyc-subtitle">4. Confidencialidad</h3>
        <p className="tyc-paragraph">
          Ambas partes se comprometen a mantener la confidencialidad de toda la
          información intercambiada durante la prestación de los servicios.
        </p>

        <h3 className="tyc-subtitle">5. Garantía</h3>
        <p className="tyc-paragraph">
          Garantizamos que nuestros servicios se prestarán de manera profesional y
          conforme a los estándares de la industria. La garantía se limita a [X] días
          a partir de la fecha de entrega.
        </p>

        <h3 className="tyc-subtitle">6. Limitación de Responsabilidad</h3>
        <p className="tyc-paragraph">
          En ningún caso seremos responsables por daños indirectos, incidentales,
          especiales o consecuentes que surjan de la prestación de nuestros
          servicios.
        </p>

        <h3 className="tyc-subtitle">7. Rescisión</h3>
        <p className="tyc-paragraph">
          Cualquiera de las partes puede rescindir el contrato en caso de
          incumplimiento de la otra parte, previa notificación por escrito con [X]
          días de antelación.
        </p>
      </div>
    </section>
  );
};

export default TerminosYCondiciones;
