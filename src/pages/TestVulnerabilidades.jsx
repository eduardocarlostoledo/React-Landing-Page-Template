import React from 'react';
import { Footer } from '../components/Footer';

export default function TestVulnerabilidades(){
  return (
    <main className="service-page">
      <div className="service-grid">
        <section>
          <h1>Test de vulnerabilidades (OWASP Top 10)</h1>
          <p className="lead">Escaneos automáticos y autenticados con prioridad por riesgo. Informe con pasos concretos para remediar.</p>

          <h2>Tipos de pruebas</h2>
          <ul>
            <li>Escaneo no autenticado (crawling público)</li>
            <li>Escaneo autenticado (revisión de sesiones y roles)</li>
            <li>Pentest-lite manual en puntos críticos (solo en Avanzado)</li>
          </ul>

          <h2>Estándares OWASP cubiertos</h2>
          <ul className="owasp-list">
            <li>A01:2021 – Control de Acceso Quebrado (Broken Access Control)</li>
            <li>A03:2021 – Inyección (Injection)</li>
            <li>A02:2021 – Fallas Criptográficas (Cryptographic Failures)</li>
            <li>A05:2021 – Configuración de Seguridad Incorrecta (Security Misconfiguration)</li>
            <li>A06:2021 – Componentes Vulnerables y Desactualizados</li>
          </ul>

          <h2>Stack compatible</h2>
          <div className="tech-badges">
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">Postgres</span>
          </div>

          <a href="/contacto" className="service-cta">Solicitar diagnóstico gratuito (15 min)</a>
          <p className="service-meta">Todas las consultas van directo a la ruta <strong>/contacto</strong>.</p>
        </section>

        <aside className="service-card">
          <h3>Resultados que entregamos</h3>
          <ul>
            <li>Prioridad por riesgo y coste</li>
            <li>Pruebas reproducibles para equipo dev</li>
            <li>Retest opcional tras remediación</li>
          </ul>
        </aside>
      </div>

      <Footer />
    </main>
  )
}
