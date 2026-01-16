# Testing Guide - Sistema 5-5 Landing Page

## 📋 Checklist de Validación

### 1. **Acceso a la Landing**
```
✅ URL: http://localhost:3000/sistema-5-5
✅ Carga sin errores
✅ Todos los elementos visibles
✅ Sin console errors
```

### 2. **Visual & Responsiveness**
```
✅ Desktop (1200px+): Layout de 2 columnas en Hero
✅ Tablet (768px): Ajuste de columnas
✅ Mobile (<768px): Stack vertical
✅ Animaciones fluidas en scroll
✅ Botones con hover effects (desktop)
✅ Imágenes/emojis renderean correctamente
```

### 3. **Formulario - Validación**

#### Test: Campo Nombre Válido
```
Input: "Juan García"
Expected: ✅ Acepta
Status: __________
```

#### Test: Campo Nombre Inválido (números)
```
Input: "Juan123"
Expected: ❌ Rechaza con mensaje de error
Status: __________
```

#### Test: Email Válido
```
Input: "usuario@dominio.com"
Expected: ✅ Acepta
Status: __________
```

#### Test: Email Inválido (sin @)
```
Input: "usuariodominio.com"
Expected: ❌ Rechaza con mensaje de error
Status: __________
```

#### Test: Campo WhatsApp (Opcional)
```
Input: (vacío)
Expected: ✅ Acepta (no obligatorio)
Status: __________
```

#### Test: Honeypot
```
Action: Intentar llenar campo oculto "company"
Expected: ❌ No hace nada (form se ignora silenciosamente)
Status: __________
```

### 4. **Envío de Formulario**
```
✅ Botón disable mientras se envía ("⏳ Procesando...")
✅ EmailJS recibe los datos en backend
✅ SweetAlert2 modal aparece con 2 opciones
✅ Modal no permite cerrar con ESC (allowEscapeKey: false)
✅ Modal no permite click fuera (allowOutsideClick: false)
```

### 5. **Modal de Confirmación - Opción 1: Descargar PDF**

```
Test: Click en "Descargar PDF"
├─ Expected: sistema55.pdf se descarga
├─ Verifica: Archivo en Downloads
├─ Nombre: Sistema-5-5.pdf
└─ Status: __________
```

### 6. **Modal de Confirmación - Opción 2: Ir al Pago**

```
Test: Click en "Ir al Pago"
├─ Expected: Redirige a https://mpago.la/1P56hD5
├─ Verifica: MercadoPago carga correctamente
├─ Status: __________
```

### 7. **SEO & Meta Tags**
```
✅ Título en tab: "Sistema 5-5 | Guía Maestra de Negocios Digitales"
✅ Og:title presente
✅ Meta description presente
✅ Canonical URL configurada
✅ JSON-LD Schema presente
```

### 8. **Analizador de Velocidad**
```
Lighthouse Score: __________/100
First Contentful Paint (FCP): __________ms
Largest Contentful Paint (LCP): __________ms
Cumulative Layout Shift (CLS): __________
```

---

## 🧪 Test Cases por Sección

### **Hero Section**
```
✅ Badge visible "🚀 Estrategia Probada"
✅ Animación de entrada (fade-in)
✅ 3 Visual Cards con animación float
✅ Responsive: se apila en mobile
```

### **Value Proposition Section**
```
✅ 4 Value Cards presentes
✅ Hover effect en cards (translateY)
✅ Texto "80k Impresiones = $50 USD" visible
✅ Copy "Por apenas $5/mes" highlight en dorado
```

### **Subscription Features Section**
```
✅ 6 Feature items con iconos
✅ Descripción de cada feature visible
✅ Animación stagger al scroll
✅ Border-left dorado en cada feature
```

### **Roadmap Section**
```
✅ 5 Steps numerados (1-5)
✅ Números con fondo azul oscuro
✅ Cada step tiene descripción
✅ Responsive: se apila en mobile
```

### **Form Section**
```
✅ Título "Acceso a la Guía Maestra + Suscripción"
✅ Descripción clara del proceso
✅ 3 campos de input (nombre, email, whatsapp)
✅ Botón submit amarillo/dorado
✅ Texto de garantía abajo
✅ Fondo con gradiente azul
```

### **Guarantee Section**
```
✅ 4 Guarantee items presentes
✅ Cada item tiene icono ✅
✅ Hover effect en items
✅ Responsive grid
```

### **Final CTA Section**
```
✅ Mensaje persuasivo visible
✅ Botón "⬇️ Comienza Ahora" visible
✅ Click scrollea suavemente al formulario
✅ Fondo gradiente aplicado
```

---

## 🐛 Debugging Checklist

Si algo no funciona:

### Problema: Landing no carga
```
1. Verifica: npm start corre sin errores
2. Console: ¿Hay errors en DevTools?
3. Ruta: ¿/sistema-5-5 está en App.jsx?
4. Import: ¿Sistema55 está importado?
```

### Problema: Formulario no envía
```
1. Variables de entorno EmailJS configuradas?
   - REACT_APP_SERVICE_ID
   - REACT_APP_TEMPLATE_ID_CLIENT
   - REACT_APP_PUBLIC_KEY
2. Console: ¿Muestra error de EmailJS?
3. Backend: ¿Recibe los datos?
4. CORS: ¿EmailJS está autorizado?
```

### Problema: Modal SweetAlert no aparece
```
1. SweetAlert2 instalado? npm list sweetalert2
2. Import correcto en Sistema55.jsx?
3. Console: ¿Error de Swal?
4. Props: allowOutsideClick: false está?
```

### Problema: PDF no descarga
```
1. Archivo existe? /public/sistema55.pdf
2. Ruta correcta: /sistema55.pdf (relativa a public)
3. Permisos: El archivo es descargable?
4. Browser: ¿Permite descargas?
```

### Problema: MercadoPago redirect no funciona
```
1. Link correcto: https://mpago.la/1P56hD5
2. Está activo el link?
3. window.location.href funciona? (probar en console)
4. CORS issue? (probar en navegador anónimo)
```

---

## 📊 Performance Testing

```bash
# Lighthouse Test
npm start
# Abre Chrome DevTools → Lighthouse
# Corre audit para mobile y desktop

# Network Tab
# Verifica tamaño de bundle
# Componente: Sistema55.jsx
# Estilos: Sistema55.css
```

Tamaños esperados:
- Sistema55.jsx: ~20KB
- Sistema55.css: ~25KB
- Total: ~45KB (con compresión gzip)

---

## 🎯 Test de Conversión Completo

```
Paso 1: Entra a /sistema-5-5
   ✅ Landing carga
   ✅ Ve propuesta de valor
   ✅ Anima al scroll

Paso 2: Scrollea hasta formulario
   ✅ Forma visible
   ✅ Botón accesible

Paso 3: Completa formulario
   Nombre: "Test User"
   Email: "test@example.com"
   WhatsApp: "+543814567890"
   ✅ Validación pasa

Paso 4: Hace click en Submit
   ✅ Botón disable (muestra "⏳ Procesando...")
   ✅ EmailJS procesa

Paso 5: Modal aparece
   ✅ 2 opciones visibles
   ✅ "Descargar PDF" botón (amarillo)
   ✅ "Ir al Pago" botón (rojo)

Paso 6: Test ambas opciones

   OPCIÓN A: Descargar PDF
   ├─ Click "Descargar PDF"
   ├─ Archivo descarga: Sistema-5-5.pdf ✅
   └─ Modal cierra

   OPCIÓN B: Ir al Pago
   ├─ Click "Ir al Pago"
   ├─ Redirige a MercadoPago ✅
   └─ URL: https://mpago.la/1P56hD5

CONVERSIÓN COMPLETADA ✅
```

---

## 📱 Mobile Testing Específico

```
Device: iPhone 12
┌─ Orientación Portrait
│  ├─ Hero: Stack vertical ✅
│  ├─ Form inputs: Full width ✅
│  ├─ Botones: Tapeable (min 44px) ✅
│  └─ Texto: Readable (min 16px) ✅
│
└─ Orientación Landscape
   ├─ Layout ajusta ✅
   ├─ No scroll horizontal ✅
   └─ Accesible todo ✅

Device: Android
┌─ Chrome
│  └─ Todo funciona ✅
└─ Firefox
   └─ Todo funciona ✅
```

---

## ✅ Sign-off Checklist

```
General
├─ ✅ No console errors
├─ ✅ No console warnings
├─ ✅ Todas las imágenes cargan
└─ ✅ No broken links

Funcionalidad
├─ ✅ Formulario valida correctamente
├─ ✅ EmailJS envía datos
├─ ✅ SweetAlert muestra modal
├─ ✅ PDF descarga
├─ ✅ MercadoPago redirect funciona
└─ ✅ Honeypot evita spam

Diseño
├─ ✅ Responsive mobile OK
├─ ✅ Responsive tablet OK
├─ ✅ Responsive desktop OK
├─ ✅ Animaciones suaves
└─ ✅ Colores corporativos aplicados

SEO
├─ ✅ Meta tags presentes
├─ ✅ JSON-LD schema válido
├─ ✅ Open Graph tags OK
└─ ✅ Canonical URL presente

Performance
├─ ✅ LCP < 2.5s
├─ ✅ FID < 100ms
├─ ✅ CLS < 0.1
└─ ✅ Lighthouse > 80
```

---

## 🚀 Ready for Production?

Cuando todos los checks pasen, la landing está lista para:
- ✅ Deploy a producción
- ✅ Agregar a menú principal
- ✅ Promocionar en redes
- ✅ Usar como landing principal de sistemas 5-5

**Fecha de Testing:** _______________
**Testeado por:** _______________
**Status:** ✅ APROBADO / ❌ NECESITA FIXES
