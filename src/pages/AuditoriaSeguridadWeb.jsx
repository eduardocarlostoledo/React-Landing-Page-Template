import React from 'react';
import { Footer } from '../components/Footer';

export default function AuditoriaSeguridadWeb(){
  return (
    <main className="service-page">
      <div className="service-grid">
        <section>
          <h1>Auditoría de seguridad web para pymes</h1>
          <p className="lead">Escaneo OWASP Top 10, autenticado según plan y plan de remediación priorizado para equipos pequeños.</p>

          <h2>Qué revisamos</h2>
          <ul>
            <li>Superficies de entrada (formularios, APIs, autenticaciones)</li>
            <li>Configuraciones de servidor y cabeceras de seguridad</li>
            <li>Dependencias vulnerables</li>
          </ul>

          <h2>Estándares OWASP cubiertos</h2>
          <ul className="owasp-list">
            <li>A01:2021 – Control de Acceso Quebrado (Broken Access Control)</li>
            <li>A03:2021 – Inyección (Injection)</li>
            <li>A02:2021 – Fallas Criptográficas (Cryptographic Failures)</li>
            <li>A05:2021 – Configuración de Seguridad Incorrecta (Security Misconfiguration)</li>
            <li>A06:2021 – Componentes Vulnerables y Desactualizados</li>
          </ul>

          <h2>Stack recomendado</h2>
          <div className="tech-badges">
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">Postgres</span>
          </div>

          <a href="/contacto" className="service-cta">Solicitar diagnóstico gratuito (15 min)</a>
          <p className="service-meta">Todas las consultas van directo a la ruta <strong>/contacto</strong>. Por otro tipo de tecnología consultar.</p>
        </section>

        <aside className="service-card">
          <h3>Entregables rápidos</h3>
          <ul>
            <li>Resumen ejecutivo para responsables</li>
            <li>Lista priorizada de 10 remediaciones</li>
            <li>Checklist para desarrolladores</li>
          </ul>
        </aside>
      </div>

      <Footer />
    </main>
  )
}
