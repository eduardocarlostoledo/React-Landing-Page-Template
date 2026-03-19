import React from 'react';
import { Footer } from '../components/Footer';

export default function SeguridadEcommerce(){
  return (
    <main className="service-page">
      <div className="service-grid">
        <section>
          <h1>Seguridad para e-commerce y pagos online</h1>
          <p className="lead">Auditoría específica para tiendas online: pagos, integraciones y prevención de fraude. Enfoque en minimizar pérdida de ingresos y confianza de clientes.</p>

          <h2>Riesgos que abordamos</h2>
          <ul>
            <li>Exposición de datos de clientes</li>
            <li>Vulnerabilidades en pasarelas de pago</li>
            <li>Integraciones con terceros y APIs</li>
          </ul>

          <h2>Estándares OWASP cubiertos</h2>
          <ul className="owasp-list">
            <li>A01:2021 – Control de Acceso Quebrado (Broken Access Control)</li>
            <li>A03:2021 – Inyección (Injection)</li>
            <li>A02:2021 – Fallas Criptográficas (Cryptographic Failures)</li>
            <li>A05:2021 – Configuración de Seguridad Incorrecta (Security Misconfiguration)</li>
            <li>A06:2021 – Componentes Vulnerables y Desactualizados</li>
          </ul>

          <h2>Stack y plataformas</h2>
          <div className="tech-badges">
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">Postgres</span>
            <span className="tech-badge">WooCommerce</span>
            <span className="tech-badge">Shopify</span>
          </div>

          <a href="/contacto" className="service-cta">Solicitar diagnóstico gratuito (15 min)</a>
          <p className="service-meta">Todas las consultas van directo a la ruta <strong>/contacto</strong>.</p>
        </section>

        <aside className="service-card">
          <h3>Entregables para e-commerce</h3>
          <ul>
            <li>Lista de problemas críticos que afectan conversión</li>
            <li>Guía de corrección priorizada</li>
            <li>Retest opcional tras remediación</li>
          </ul>
        </aside>
      </div>

      <Footer />
    </main>
  )
}
