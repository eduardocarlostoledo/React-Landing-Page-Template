// src/components/CookieConsent/CookieConsent.jsx
// GDPR compliant. Blocks third-party scripts until explicit consent.
// Covers Google Analytics, Google Ads and EmailJS.

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import emailjs from "@emailjs/browser";

const CONSENT_KEY = "toledo_cookie_consent";
const CONSENT_VERSION = "1.2";

const DEFAULT_PREFERENCES = {
  analyticsMarketing: false,
  forms: false,
};

function injectScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

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
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = window.gtag || gtag;
        gtag("js", new Date());
        gtag("config", "AW-16912032526");
        gtag("config", "G-WENNK2M7Y0");
      })
      .catch((err) => console.warn("[CookieConsent] gtag load failed", err));
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(doLoad, { timeout: 5000 });
  } else {
    setTimeout(doLoad, 4000);
  }
}

function loadEmailJS() {
  if (window.__emailjsLoaded) return;
  window.__emailjsLoaded = true;
  emailjs.init({ publicKey: "wLtvtXG40GFnhOaf9" });
}

function activateConsent(preferences = DEFAULT_PREFERENCES) {
  if (preferences.analyticsMarketing) {
    loadGtag();
  }

  if (preferences.forms) {
    loadEmailJS();
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);

  useEffect(() => {
    const raw = Cookies.get(CONSENT_KEY);

    if (!raw) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      Cookies.remove(CONSENT_KEY);
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }

    if (parsed.version !== CONSENT_VERSION) {
      Cookies.remove(CONSENT_KEY);
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }

    const savedPreferences = {
      ...DEFAULT_PREFERENCES,
      ...(parsed.preferences || {}),
    };

    setPreferences(savedPreferences);

    if (parsed.status === "accepted") {
      activateConsent(savedPreferences);
    }
  }, []);

  function saveConsent(status, nextPreferences = DEFAULT_PREFERENCES) {
    Cookies.set(
      CONSENT_KEY,
      JSON.stringify({
        status,
        version: CONSENT_VERSION,
        preferences: nextPreferences,
      }),
      {
        expires: status === "accepted" ? 365 : 30,
        sameSite: "Strict",
        secure: true,
      }
    );
  }

  function handleAccept() {
    const acceptedPreferences = {
      analyticsMarketing: true,
      forms: true,
    };

    setPreferences(acceptedPreferences);
    saveConsent("accepted", acceptedPreferences);
    setVisible(false);
    activateConsent(acceptedPreferences);
  }

  function handleDecline() {
    setPreferences(DEFAULT_PREFERENCES);
    saveConsent("declined", DEFAULT_PREFERENCES);
    setShowSettings(false);
    setVisible(false);
  }

  function handleSavePreferences() {
    const nextPreferences = {
      analyticsMarketing: !!preferences.analyticsMarketing,
      forms: !!preferences.forms,
    };

    const nextStatus =
      nextPreferences.analyticsMarketing || nextPreferences.forms
        ? "accepted"
        : "declined";

    saveConsent(nextStatus, nextPreferences);
    setShowSettings(false);
    setVisible(false);

    if (nextStatus === "accepted") {
      activateConsent(nextPreferences);
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Consentimiento de cookies"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(560px, calc(100vw - 2rem))",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "1.25rem 1.5rem",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        fontFamily: "inherit",
      }}
    >
      <p style={{ margin: 0, fontSize: "14px", color: "#374151", lineHeight: 1.6 }}>
        Usamos cookies de analítica, publicidad y comunicación para mejorar tu
        experiencia. Podés aceptar, rechazar o configurar el uso.{" "}
        <a
          href="/politica-de-privacidad"
          style={{ color: "#3B82F6", textDecoration: "underline" }}
        >
          Política de privacidad
        </a>
      </p>

      {showSettings && (
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            padding: "0.9rem 1rem",
            background: "#f8fafc",
            display: "grid",
            gap: "0.75rem",
          }}
        >
          <label
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "flex-start",
              fontSize: "13px",
              color: "#374151",
            }}
          >
            <input
              type="checkbox"
              checked={preferences.analyticsMarketing}
              onChange={(e) =>
                setPreferences((prev) => ({
                  ...prev,
                  analyticsMarketing: e.target.checked,
                }))
              }
              style={{ marginTop: "0.2rem" }}
            />
            <span>
              <strong>Analítica y publicidad</strong>
              <br />
              Google Analytics y Google Ads se cargarán solo si activás esta opción.
            </span>
          </label>

          <label
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "flex-start",
              fontSize: "13px",
              color: "#374151",
            }}
          >
            <input
              type="checkbox"
              checked={preferences.forms}
              onChange={(e) =>
                setPreferences((prev) => ({
                  ...prev,
                  forms: e.target.checked,
                }))
              }
              style={{ marginTop: "0.2rem" }}
            />
            <span>
              <strong>Formulario de contacto</strong>
              <br />
              EmailJS se activa para enviar consultas desde el formulario.
            </span>
          </label>

          <p style={{ margin: 0, fontSize: "12px", color: "#6b7280", lineHeight: 1.5 }}>
            Podés cambiar estas preferencias en cualquier momento borrando la cookie
            <code style={{ marginLeft: "0.3rem" }}>toledo_cookie_consent</code>.
          </p>
        </div>
      )}

      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}
      >
        <button
          type="button"
          onClick={() => setShowSettings((current) => !current)}
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "8px",
            border: "1px solid #2563EB",
            background: "transparent",
            fontSize: "13px",
            color: "#2563EB",
            cursor: "pointer",
          }}
        >
          Configurar
        </button>
        <button
          type="button"
          onClick={handleDecline}
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            background: "transparent",
            fontSize: "13px",
            color: "#6b7280",
            cursor: "pointer",
          }}
        >
          Rechazar
        </button>
        <button
          type="button"
          onClick={showSettings ? handleSavePreferences : handleAccept}
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "8px",
            border: "none",
            background: "#2563EB",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          {showSettings ? "Guardar selección" : "Aceptar"}
        </button>
      </div>
    </div>
  );
}
