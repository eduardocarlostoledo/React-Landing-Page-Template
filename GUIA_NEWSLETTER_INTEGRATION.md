# 📧 GUÍA: INTEGRACIÓN DE NEWSLETTER EN EL FOOTER

## 🎯 Objetivo

Conectar el formulario del footer con un servicio de email para capturar leads y construir lista de contactos.

---

## 📋 Opciones de Integración

### 1️⃣ MAILCHIMP (Recomendado - Gratuito hasta 500 contactos)

#### Paso 1: Crear Cuenta en Mailchimp
```
1. Ir a: https://mailchimp.com
2. Sign up (crear cuenta)
3. Verificar email
4. Crear audience (audiencia)
```

#### Paso 2: Obtener API Key
```
1. Ir a: Account → Extras → API keys
2. Generar nueva API key
3. Copiar la clave
```

#### Paso 3: Instalar Paquete
```bash
npm install @mailchimp/mailchimp_marketing
```

#### Paso 4: Actualizar Footer.jsx
```jsx
import mailchimp from '@mailchimp/mailchimp_marketing';

const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  
  const email = e.target.querySelector('.newsletter-input').value;
  
  try {
    mailchimp.setConfig({
      apiKey: process.env.REACT_APP_MAILCHIMP_API_KEY,
      server: process.env.REACT_APP_MAILCHIMP_SERVER,
    });

    await mailchimp.lists.addListMember(
      process.env.REACT_APP_MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: 'subscribed',
      }
    );

    alert('✅ ¡Suscripción exitosa!');
    e.target.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('❌ Error en la suscripción');
  }
};
```

#### Paso 5: Configurar Environment Variables
```
// .env
REACT_APP_MAILCHIMP_API_KEY=tu_api_key_aqui
REACT_APP_MAILCHIMP_SERVER=us1
REACT_APP_MAILCHIMP_AUDIENCE_ID=tu_audience_id_aqui
```

#### Paso 6: Actualizar el Formulario
```jsx
<form className="footer-newsletter" onSubmit={handleNewsletterSubmit}>
  <input 
    type="email" 
    placeholder="Tu email" 
    className="newsletter-input" 
    required
    aria-label="Email para newsletter"
  />
  <button type="submit" className="newsletter-btn">
    Suscribirse
  </button>
</form>
```

---

### 2️⃣ EMAILJS (Alternativa - Sin backend requerido)

#### Paso 1: Crear Cuenta
```
1. Ir a: https://www.emailjs.com
2. Sign up
3. Conectar un email service (Gmail, Outlook, etc)
```

#### Paso 2: Instalar Paquete
```bash
npm install @emailjs/browser
```

#### Paso 3: Actualizar Footer.jsx
```jsx
import emailjs from '@emailjs/browser';

useEffect(() => {
  emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
}, []);

const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  
  const email = e.target.querySelector('.newsletter-input').value;
  
  try {
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        user_email: email,
        to_email: 'newsletter@toledoconsultora.com',
        message: 'Nuevo suscriptor al newsletter'
      }
    );

    alert('✅ ¡Gracias por suscribirse!');
    e.target.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('❌ Error en la suscripción');
  }
};
```

#### Paso 4: Environment Variables
```
REACT_APP_EMAILJS_PUBLIC_KEY=tu_public_key
REACT_APP_EMAILJS_SERVICE_ID=tu_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id
```

---

### 3️⃣ FIREBASE (Para proyecto escalable)

#### Paso 1: Setup Firebase
```bash
npm install firebase
```

#### Paso 2: Configurar Firebase
```jsx
// src/config/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // ... más config
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

#### Paso 3: Guardar Emails
```jsx
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  
  const email = e.target.querySelector('.newsletter-input').value;
  
  try {
    await addDoc(collection(db, 'newsletter_subscribers'), {
      email: email,
      timestamp: new Date(),
      source: 'footer'
    });

    alert('✅ ¡Suscripción exitosa!');
    e.target.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('❌ Error');
  }
};
```

---

## 🔒 Seguridad & Best Practices

### 1. Proteger API Keys
```
❌ NUNCA commitear .env files
✅ SIEMPRE usar environment variables

.gitignore:
.env
.env.local
.env.*.local
```

### 2. Validación
```jsx
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

if (!validateEmail(email)) {
  alert('Email inválido');
  return;
}
```

### 3. Rate Limiting
```jsx
const [isSubmitting, setIsSubmitting] = useState(false);

const handleNewsletterSubmit = async (e) => {
  if (isSubmitting) return;
  setIsSubmitting(true);
  
  // ... submit logic
  
  setTimeout(() => setIsSubmitting(false), 2000);
};
```

### 4. GDPR Compliance
```jsx
// Agregar checkbox de consentimiento
<label>
  <input type="checkbox" required />
  Acepto recibir emails informativos
</label>
```

---

## 📊 Tracking de Conversiones

### Google Analytics
```jsx
const handleNewsletterSubmit = async (e) => {
  // ... código de suscripción
  
  // Track en GA
  window.gtag?.('event', 'newsletter_signup', {
    'conversion_id': email,
    'source': 'footer',
    'timestamp': new Date()
  });
};
```

### Pixel de Facebook
```jsx
// En index.html <head>
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};}
</script>

// En Footer.jsx
const handleNewsletterSubmit = async (e) => {
  // ... código
  fbq('track', 'Lead', {'value': '1.00', 'currency': 'EUR'});
};
```

---

## 🧪 Testing

### Prueba en Local
```bash
npm start
# Ir al footer
# Ingresar email de prueba
# Verificar que se ejecuta correctamente
```

### Prueba en Producción
```bash
npm run build
serve -s build
# Probar form nuevamente
```

---

## 📈 Estrategia Post-Suscripción

### 1. Email de Bienvenida
```
Crear secuencia automática:
1. Welcome email (inmediato)
2. Descarga gratuita (día 1)
3. Primero de 3 emails (día 3)
4. Propuesta especial (día 7)
```

### 2. Segmentación
```
Agrupar por:
- Sector (B2B, B2C, Otros)
- Interés (SEO, Ads, Design)
- Ubicación (España, Latam, Otros)
```

### 3. A/B Testing
```
Probar:
- Subject lines
- CTA text
- Send times
- Email design
```

---

## 🆘 Troubleshooting

### Error: "API Key not found"
```
✓ Verificar .env file
✓ Verificar que npm start reinició (para cargar .env)
✓ Usar console.log para debug
```

### Error: "Invalid email"
```
✓ Validar formato email antes de enviar
✓ Usar regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

### No se capturan emails
```
✓ Verificar credenciales API
✓ Verificar audience ID (Mailchimp)
✓ Verificar logs en consola del navegador (F12)
```

---

## 📚 Recursos

- [Mailchimp API Docs](https://mailchimp.com/help/guides/)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [GDPR Compliance](https://gdpr-info.eu/)

---

## ✅ CHECKLIST IMPLEMENTACIÓN

- [ ] Elegir plataforma (Mailchimp/EmailJS/Firebase)
- [ ] Crear cuenta en servicio
- [ ] Obtener API credentials
- [ ] Instalar paquete npm
- [ ] Crear .env file
- [ ] Actualizar Footer.jsx
- [ ] Agregar validación
- [ ] Implementar tracking
- [ ] Agregar consentimiento GDPR
- [ ] Probar en local
- [ ] Probar en staging
- [ ] Deploy a producción
- [ ] Monitorear conversiones

---

**Recomendación**: Usar **Mailchimp** para comenzar (gratuito + fácil + poderoso)

**Estimado de tiempo**: 30-45 minutos implementación completa
