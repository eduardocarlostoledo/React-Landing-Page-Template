import React from 'react';
import { Footer } from '../components/Footer';

export default function CybersecuritySpain(){
  return (
    <main className="service-page">
      <div className="service-grid">
        <section>
          <h1>Auditoría de ciberseguridad para pymes en España</h1>
          <p className="lead">Auditoría práctica orientada a cumplimiento NIS2 y GDPR. Informe claro, prioridades y plan de remediación.</p>

          <h2>Qué entregamos</h2>
          <ul>
            <li>Informe ejecutivo claro dirigido a responsables no técnicos</li>
            <li>Vulnerabilidades priorizadas por riesgo y coste</li>
            <li>Checklist accionable y estimaciones de remediación</li>
          </ul>

          <h2>Estándares OWASP cubiertos</h2>
          <ul className="owasp-list">
            <li>A01:2021 – Control de Acceso Quebrado (Broken Access Control)</li>
            <li>A03:2021 – Inyección (Injection)</li>
            <li>A02:2021 – Fallas Criptográficas (Cryptographic Failures)</li>
            <li>A05:2021 – Configuración de Seguridad Incorrecta (Security Misconfiguration)</li>
            <li>A06:2021 – Componentes Vulnerables y Desactualizados</li>
          </ul>

          <h2>Stack técnico</h2>
          <div className="tech-badges">
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">Postgres</span>
          </div>

          <p className="service-meta">Trabajamos con Node.js + Express + Postgres. Por otro tipo de tecnología consultar.</p>

          <a href="/contacto" className="service-cta">Solicitar diagnóstico gratuito (15 min)</a>
          <p className="service-meta">Todas las consultas van directo a la ruta <strong>/contacto</strong>.</p>
        </section>

        <aside className="service-card">
          <h3>Planes rápidos</h3>
          <div>
            <strong>Básico</strong>
            <div>€399 • 3–7 días</div>
            <div>Escaneo OWASP Top 10 + checklist</div>
          </div>
          <hr/>
          <div>
            <strong>Profesional</strong>
            <div>€1.490 • 7–10 días</div>
            <div>Escaneo autenticado + mapeo NIS2/GDPR</div>
          </div>
          <hr/>
          <div>
            <strong>Avanzado</strong>
            <div>€2.990 • 10–14 días</div>
            <div>Pentest-lite + retest + certificado</div>
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  )
}
