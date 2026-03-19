import React from "react";

export function Hero() {
  return (
    <section className="hero" style={{ padding: "60px 24px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          
          <div style={{ flex: "1 1 520px" }}>
            {/* Etiqueta de urgencia normativa */}
            <span style={{ color: "#e11d48", fontWeight: "bold", fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>
              Cumplimiento Obligatorio 2026
            </span>
            
            <h1 style={{ fontSize: 36, lineHeight: 1.2, marginBottom: 16, color: "#0f172a" }}>
              Protege tu empresa (y tu patrimonio) de las sanciones de la Directiva NIS2 y RGPD
            </h1>
            
            <p style={{ fontSize: 18, color: "#334155", marginBottom: 24, lineHeight: 1.5 }}>
              ¿Tu infraestructura superaría una auditoría de inversión? Diagnosticamos tus fallos críticos bajo <strong>OWASP Top 10</strong> y generamos tu plan de remediación en tiempo récord. 
              Menos burocracia, más seguridad real.
            </p>

            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <a
                href="#snapshot"
                style={{ 
                  padding: "14px 24px", 
                  background: "#0f172a", 
                  color: "#fff", 
                  borderRadius: 6, 
                  textDecoration: "none",
                  fontWeight: "bold",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}
              >
                Obtener Snapshot de Riesgo (€100)
              </a>
              <a href="#planes" style={{ fontSize: 16, fontWeight: "600", textDecoration: "none", color: "#0b74de" }}>
                Ver planes de cumplimiento →
              </a>
            </div>
            
            <p style={{ fontSize: 14, color: "#64748b", marginTop: 12 }}>
              * Entrega instantánea. El coste se deduce de cualquier plan contratado.
            </p>

            <div style={{ marginTop: 32, padding: "12px", borderLeft: "4px solid #0b74de", background: "#eff6ff" }}>
              <p style={{ margin: 0, fontSize: 14, color: "#1e40af" }}>
                <strong>Enfoque CTO-as-a-Service:</strong> No entregamos informes genéricos. Entregamos el <strong>SBOM</strong> y las acciones técnicas que tu equipo necesita para cerrar rondas de inversión con éxito.
              </p>
            </div>
          </div>

          {/* Sidebar de Planes - Se mantiene pero con lenguaje más "Legal" */}
          <aside style={{ flex: "0 0 380px", background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 10px 25px rgba(15,23,42,0.08)", border: "1px solid #e2e8f0" }}>
            <h3 style={{ marginTop: 0, fontSize: 20, marginBottom: 20 }}>Planes de Adecuación</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                  <span>Básico — Auditoría</span>
                  <span style={{ color: "#0b74de" }}>€399</span>
                </div>
                <div style={{ fontSize: 13, color: "#64748b" }}>Análisis externo OWASP y Checklist Prioritario.</div>
              </li>

              <li style={{ marginBottom: 20, padding: "12px", background: "#f1f5f9", borderRadius: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                  <span>Profesional — NIS2/GDPR</span>
                  <span style={{ color: "#0b74de" }}>€1.490</span>
                </div>
                <div style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>Mapeo normativo completo y plan de remediación técnica. <strong>Ideal para startups.</strong></div>
              </li>

              <li>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                  <span>Avanzado — Resiliencia</span>
                  <span style={{ color: "#0b74de" }}>€2.990</span>
                </div>
                <div style={{ fontSize: 13, color: "#64748b" }}>Pentesting, Certificado de Seguridad Interno y Soporte Directo.</div>
              </li>
            </ul>
            <button style={{ width: "100%", marginTop: 20, padding: "12px", borderRadius: 6, border: "1px solid #cbd5e1", background: "#fff", cursor: "pointer", fontWeight: "600" }}>
              Descargar ejemplo de informe
            </button>
          </aside>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;


// import React from "react";

// export function Hero() {
//   return (
//     <section className="hero" style={{ padding: "48px 24px", background: "#f8fafc" }}>
//       <div style={{ maxWidth: 1100, margin: "0 auto" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
//           <div style={{ flex: "1 1 520px" }}>
//             <h1 style={{ fontSize: 28, lineHeight: 1.1, marginBottom: 12 }}>
//               Evita multas por NIS2 Directive y General Data Protection Regulation: auditoría de ciberseguridad para pymes en 7 días
//             </h1>
//             <p style={{ fontSize: 16, color: "#334155", marginBottom: 18 }}>
//               Escaneamos tu web y servicios contra OWASP Top 10, realizamos pruebas automáticas y te entregamos un plan claro y
//               priorizado para cumplir NIS2 & GDPR — sin informes técnicos largos.
//             </p>

//             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 6 }}>
//               <a
//                 href="#contact"
//                 className="btn-primary"
//                 style={{ padding: "12px 18px", background: "#0b74de", color: "#fff", borderRadius: 6, textDecoration: "none" }}
//               >
//                 Solicitar diagnóstico gratuito (15 min)
//               </a>
//               <a href="#planes" className="btn-secondary" style={{ padding: "10px 16px", borderRadius: 6, textDecoration: "none", color: "#0b74de" }}>
//                 Ver planes y precios
//               </a>
//             </div>
//             <p style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>Sin compromiso. Te decimos en 15 min si estás en riesgo.</p>

//             <p style={{ marginTop: 18, fontSize: 14 }}>
//               <strong>Enfoque práctico:</strong> no entregamos PDFs inútiles — entregamos acciones que tu equipo puede aplicar en
//               días.
//             </p>
//           </div>

//           <aside style={{ flex: "0 0 360px", background: "#fff", borderRadius: 8, padding: 18, boxShadow: "0 6px 18px rgba(15,23,42,0.06)" }}>
//             <h3 style={{ marginTop: 0 }}>Planes rápidos</h3>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//               <li style={{ marginBottom: 12 }}>
//                 <strong>Básico — Detección rápida</strong>
//                 <div style={{ fontSize: 13 }}>€399 • 3–7 días</div>
//                 <div style={{ fontSize: 13 }}>Escaneo OWASP Top 10, escaneo automático, checklist y PDF con 10 acciones prioritarias.</div>
//               </li>

//               <li style={{ marginBottom: 12 }}>
//                 <strong>Profesional — Cumplimiento mínimo</strong>
//                 <div style={{ fontSize: 13 }}>€1.490 • 7–10 días</div>
//                 <div style={{ fontSize: 13 }}>Incluye autenticado básico, mapeo NIS2/GDPR y plan de remediación con estimaciones.</div>
//               </li>

//               <li>
//                 <strong>Avanzado — Validación y soporte</strong>
//                 <div style={{ fontSize: 13 }}>€2.990 • 10–14 días</div>
//                 <div style={{ fontSize: 13 }}>Pentest-lite, retest, certificado interno y 2h mentoring.</div>
//               </li>
//             </ul>
//             <a href="#planes" style={{ display: "inline-block", marginTop: 12, textDecoration: "none", color: "#0b74de" }}>
//               Ver todos los detalles
//             </a>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
