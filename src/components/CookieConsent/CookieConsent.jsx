// src/components/CookieConsent/CookieConsent.jsx
// GDPR compliant — bloquea TODOS los scripts de terceros hasta consentimiento explícito
// Cubre: Google Analytics (G-WENNK2M7Y0) · Google Ads (AW-16912032526) · EmailJS
// npm install js-cookie

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import emailjs from '@emailjs/browser';
const CONSENT_KEY     = "toledo_cookie_consent";
const CONSENT_VERSION = "1.1"; // ⬆ Incrementar si cambia la política o los servicios

// ─── Utilidad: inyectar script evitando duplicados ───────────────────────────

function injectScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src   = src;
    s.async = true;
    s.onload  = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

// ─── Loader: Google Analytics + Google Ads ───────────────────────────────────
// Se ejecuta en idle para no competir con el hilo principal tras el clic.

function loadGtag() {
  if (window.__gtagLoaded) return;
  window.__gtagLoaded = true;

  const doLoad = () => {
    Promise.all([
      injectScript("https://www.googletagmanager.com/gtag/js?id=AW-16912032526"),
      injectScript("https://www.googletagmanager.com/gtag/js?id=G-WENNK2M7Y0"),
    ])
      .then(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = window.gtag || gtag;
        gtag("js", new Date());
        gtag("config", "AW-16912032526");
        gtag("config", "G-WENNK2M7Y0");
      })
      .catch((err) => console.warn("[CookieConsent] gtag load failed", err));
  };

  // Diferido real: idle callback con fallback a 4 s
  if ("requestIdleCallback" in window) {
    requestIdleCallback(doLoad, { timeout: 5000 });
  } else {
    setTimeout(doLoad, 4000);
  }
}

// ─── Loader: EmailJS ─────────────────────────────────────────────────────────
// EmailJS procesa nombre + email del formulario → dato personal → requiere
// consentimiento explícito bajo GDPR Art.5 (1)(a).

function loadEmailJS() {
  if (window.__emailjsLoaded) return;
  window.__emailjsLoaded = true;

  injectScript("https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js")
    .then(() => {
      if (typeof emailjs !== "undefined") {
        emailjs.init({ publicKey: "wLtvtXG40GFnhOaf9" });
      }
    })
    .catch((err) => console.warn("[CookieConsent] EmailJS load failed", err));
}

// ─── Punto de entrada: activa todos los servicios consentidos ────────────────
// Agregar aquí cualquier servicio futuro (Meta Pixel, Hotjar, etc.).

function activateConsent() {
  loadGtag();
  loadEmailJS();
}

// ─── Componente ──────────────────────────────────────────────────────────────

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raw = Cookies.get(CONSENT_KEY);

    if (!raw) {
      // Sin decisión previa → mostrar banner
      // Delay de 1.5 s para no impactar LCP
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }

    // Parsear — soporte de cookie legacy (string plano "accepted")
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      // Versión antigua: forzar re-consentimiento
      Cookies.remove(CONSENT_KEY);
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }

    // Política actualizada → re-pedir consentimiento
    if (parsed.version !== CONSENT_VERSION) {
      Cookies.remove(CONSENT_KEY);
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }

    // Consentimiento vigente
    if (parsed.status === "accepted") {
      activateConsent();
    }
    // Si es "declined" → ningún script se carga ✓
  }, []);

  // ─── Persistencia ───────────────────────────────────────────────────────────

  function saveConsent(status) {
    Cookies.set(
      CONSENT_KEY,
      JSON.stringify({ status, version: CONSENT_VERSION }),
      {
        expires  : status === "accepted" ? 365 : 30,
        sameSite : "Strict",
        secure   : true,
      }
    );
  }

  function handleAccept() {
    saveConsent("accepted");
    setVisible(false);
    activateConsent();
  }

  function handleDecline() {
    saveConsent("declined");
    setVisible(false);
    // Ningún script de terceros se ejecuta ✓
  }

  if (!visible) return null;

  // ─── UI ─────────────────────────────────────────────────────────────────────

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Consentimiento de cookies"
      aria-live="polite"
      style={{
        position      : "fixed",
        bottom        : "1.5rem",
        left          : "50%",
        transform     : "translateX(-50%)",
        width         : "min(560px, calc(100vw - 2rem))",
        background    : "#ffffff",
        border        : "1px solid #e2e8f0",
        borderRadius  : "12px",
        padding       : "1.25rem 1.5rem",
        boxShadow     : "0 4px 24px rgba(0,0,0,0.12)",
        zIndex        : 9999,
        display       : "flex",
        flexDirection : "column",
        gap           : "1rem",
        fontFamily    : "inherit",
      }}
    >
      <p style={{ margin: 0, fontSize: "14px", color: "#374151", lineHeight: 1.6 }}>
        Usamos cookies de análisis y publicidad (Google Analytics, Google Ads) y de
        comunicación (EmailJS) para mejorar tu experiencia. Podés aceptar o rechazar
        su uso.{" "}
        <a
          href="/politica-de-privacidad"
          style={{ color: "#3B82F6", textDecoration: "underline" }}
        >
          Política de privacidad
        </a>
      </p>

      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
        <button
          onClick={handleDecline}
          style={{
            padding      : "0.5rem 1.25rem",
            borderRadius : "8px",
            border       : "1px solid #d1d5db",
            background   : "transparent",
            fontSize     : "13px",
            color        : "#6b7280",
            cursor       : "pointer",
          }}
        >
          Rechazar
        </button>
        <button
          onClick={handleAccept}
          style={{
            padding      : "0.5rem 1.25rem",
            borderRadius : "8px",
            border       : "none",
            background   : "#2563EB",
            color        : "#ffffff",
            fontSize     : "13px",
            fontWeight   : 500,
            cursor       : "pointer",
          }}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}