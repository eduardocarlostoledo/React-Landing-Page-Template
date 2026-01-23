# Informe de H1 — Un H1 semántico único

Generado: 2026-01-23
Resumen: Se añadió un H1 semántico único en `src/components/Hero.jsx`. A continuación aparecen los archivos que todavía contienen `<h1>` y la recomendación para cada uno.

## Estado actual
- H1 principal (único recomendado para la landing/home): `src/components/Hero.jsx` ✅

## Archivos encontrados con `<h1>` (revisión automática)

1. `src/components/IndiceSitemaps.jsx`
   - Línea: contiene `Índice del Sitemap de Toledo Consultora IT`
   - Recomendación: Cambiar a `<h2>` (o mantener H1 solo si es una página única y no hay Hero en esa vista). Para consistencia global usar `<h2>`.

2. `src/components/Sitemaps.jsx`
   - Línea: `Mapa del sitio - Toledo Consultora IT`
   - Recomendación: Cambiar a `<h2>`.

3. `src/components/header.jsx`
   - Contiene un `<h1 className="text-3xl md:text-4xl font-bold">` en un header local.
   - Recomendación: Cambiar a `<h2>` o `<h3>` según jerarquía dentro de la página.

4. `src/components/graciasporsucompra.jsx`
   - `<h1 className="thank-you-title">¡Gracias por tu compra!</h1>`
   - Recomendación: Cambiar a `<h2>` (el Hero H1 se mantiene para la home; esta página puede usar H1 si es standalone, pero para mantener "un H1 global" mantener H2).

5. `src/components/DetalleCotizacion.jsx`
   - `<h1> Contratar {plan.description} en Posadas Misiones </h1>`
   - Recomendación: Cambiar a `<h2>`.

6. `src/components/DetalleCotizacionSEO.jsx`
   - Contiene un `<h1>` vacío/placeholder.
   - Recomendación: Revisar contenido y cambiar a `<h2>` con texto significativo o usar `role`/aria si es necesario.

7. `src/components/ConfirmaSuscripcion.jsx`
   - Dos instancias con `<h1 className="confirma-title-pro">`.
   - Recomendación: Cambiar a `<h2>`/`<h3>`; eliminar duplicados.

8. `src/components/verdiore.jsx`
   - `<h1 className="hero-headline">Recuperá tu cabello de forma natural</h1>`
   - Recomendación: Cambiar a `<h2>` o, si esta es la página principal para `verdiore`, mantener H1 solo cuando la página no incluya el Hero global.

9. `public/variacioncotizacion.html` (static)
   - `<h1>Toledo Consultora IT</h1>`
   - Recomendación: Cambiar a `<h2>` o eliminar si la página tiene ya un H1 semántico en el contenido.

10. `public/cotizacion.html` (static)
    - `<h1>Toledo Consultora IT</h1>`
    - Recomendación: Cambiar a `<h2>`.

11. Documentación / Markdown (no crítico para render HTML)
    - `VERDIORE_CUSTOMIZACION.md`, `VERDIORE_REFERENCIA_TECNICA.md`, `GUIA_USUARIO_SISTEMA_55.md` contienen ejemplos con `<h1>`.
    - Recomendación: Estos archivos son documentación; pueden conservar `<h1>` sin impacto en sitio web. No es prioritario.

## Notas sobre sliders y componentes reutilizados
- Los slides en `Hero.jsx` ya usan `<h2>` para títulos (`motion.h2`) — correcto, evita H1 duplicados en sliders.
- Componentes que se muestran en varias páginas (por ejemplo la navegación) han sido actualizados para usar `h2/h3` en lugar de `h1` (GlobalNavbar / Navigation).

## Siguientes pasos recomendados (ordenados)
1. Aplicar los cambios sugeridos en los archivos listados (convertir `<h1>` a `<h2>`/`<h3>`) para evitar múltiples H1 en vistas donde `Hero` está presente.
2. Revisar rutas que renderizan páginas independientes (por ejemplo `verdiore`, `cotizacion`) y decidir si mantienen H1 local o delegan a `Hero`. Si la página tiene su propio diseño sin Hero, puede conservar H1; de lo contrario convertir a H2.
3. Ejecutar pruebas de accesibilidad (axe, Lighthouse) y validación semántica en las páginas más importantes.
4. Documentar la convención: "Un H1 por página; el H1 principal debe estar en `Hero` para la home; componentes compartidos nunca deben incluir H1".

---

Si querés, procedo a aplicar los cambios sugeridos en los archivos listados (puedo actualizar automáticamente a `<h2>` donde sea seguro). ¿Querés que haga esas modificaciones ahora o prefieres revisarlas archivo por archivo?
