import { Link } from "react-router-dom";

import { Helmet } from 'react-helmet';
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import ClipLoader from 'react-spinners/ClipLoader';
import './cotizaciones.css';
import { Testimonials } from './testimonials';
import { PartnerLogos } from './PartnerLogos';


  const pricingPlans = [
    {
      id: "contratar-landingpage-toledoconsultora",
      title: "Landing Page",
      price: "$199.000",
      description: "Diseño de landing page",
      popular: false,
      features: [
"Diseño Adaptativo a Pc y Móvil",
        "Estrategia de Marketing",
        "Hasta 6 Productos con un link de pago",
        "Boton Reservar o Comprar",
        "Boton para capturar datos cliente con EmailJS",
        "Boton a Whatsapp de tu empresa opcional",        
        "Estrategia de No escapatoria, compre o deje datos"
      ],
      detail: `

Una landing page, o página de aterrizaje, es una página web independiente, diseñada con un único objetivo de conversión. A diferencia de la página de inicio de un sitio web, que suele tener múltiples enlaces y propósitos, la landing page se centra en una oferta específica, como la descarga de un ebook, el registro a un webinar, la solicitud de una demostración o la compra de un producto. Su importancia y valor radican en su capacidad para:

1. Aumentar las tasas de conversión:

Enfoque y claridad: Al eliminar distracciones como menús de navegación complejos o enlaces irrelevantes, la landing page guía al visitante directamente hacia la acción deseada. Esta focalización incrementa significativamente la probabilidad de que complete el objetivo de la página.
Mensaje coherente: El contenido de la landing page está específicamente diseñado para complementar la oferta o la campaña publicitaria que la dirige. Esta coherencia entre el mensaje inicial y la página de destino genera confianza y aumenta la intención de conversión.
Llamada a la acción (CTA) clara y persuasiva: La landing page cuenta con un botón o formulario de CTA prominente y con un texto que motiva al usuario a realizar la acción deseada.
2. Mejorar el rendimiento de las campañas de marketing:

Segmentación efectiva: Las landing pages permiten dirigir tráfico específico a ofertas relevantes. Al segmentar las audiencias y enviar cada segmento a una landing page diseñada para sus intereses, se optimiza el retorno de la inversión (ROI) de las campañas.
Medición y análisis precisos: Al ser páginas independientes con un objetivo claro, las landing pages facilitan el seguimiento y la medición de las métricas de conversión. Esto permite analizar el rendimiento de las campañas, identificar áreas de mejora y optimizar futuras estrategias.
Optimización para SEO y publicidad: Las landing pages bien optimizadas con palabras clave relevantes pueden mejorar el posicionamiento en los motores de búsqueda (SEO) para ofertas específicas. Además, al dirigir el tráfico de publicidad paga a landing pages relevantes, se mejora la calidad del lead y se reduce el costo por adquisición (CPA).
3. Generar leads de calidad:

Recopilación de información relevante: A través de formularios estratégicamente diseñados, las landing pages permiten recopilar información valiosa sobre los visitantes interesados en la oferta. Estos leads suelen ser de mayor calidad, ya que han mostrado un interés específico al completar el formulario.
Nutrición de leads: La información recopilada en la landing page puede utilizarse para segmentar y nutrir a los leads a través de campañas de email marketing personalizadas, guiándolos a través del embudo de ventas.
4. Proporcionar una mejor experiencia al usuario:

Información concisa y relevante: La landing page ofrece la información esencial que el usuario necesita para tomar una decisión rápida y fundamentada sobre la oferta.
Diseño centrado en el usuario: Un diseño limpio, intuitivo y optimizado para dispositivos móviles facilita la navegación y mejora la experiencia del usuario, lo que influye positivamente en las tasas de conversión.
En resumen, una landing page es una herramienta poderosa y esencial para cualquier estrategia de marketing digital. Su enfoque en la conversión, su capacidad para mejorar el rendimiento de las campañas, generar leads de calidad y ofrecer una buena experiencia al usuario la convierten en un activo invaluable para alcanzar los objetivos comerciales.
      `,
      cta: "Solicitar Landing Page",
      link: "https://mpago.la/1P56hD5"
    },
    {
      id: "contratar-pagina-web-toledoconsultora",
      title: "Página Web Tipo Spa",
      price: "$249.000",
      description: "Diseño profesional adaptable",
      popular: false,
      features: [
        "Dominio.com.ar sin cargo incluido en el primer año",
        "Hosting Incluído en el primer año",
        "Incluye Desarrollo de Servicios Web, React, Css, EmailJs",
        "No aplica para Base de datos Postgresql/ORM + Node/Express web server",
"Incluye 5 emails corporativos con el dominio por el primer año",        
"Diseño Adaptativo a Pc y Móvil",
        "SEO básico incluido",
        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Acceso a redes socales y whatsapp",
      ],
            detail: `
            Tener una página web correctamente implementada y gestionada representa una base sólida para cualquier estrategia digital exitosa. Va mucho más allá de ser una simple tarjeta de presentación online; se convierte en un centro de operaciones digital, un canal de comunicación directo con tu audiencia y una plataforma para alcanzar múltiples objetivos comerciales.

El Potencial General de una Página Web Correctamente Utilizada:

Presencia y Visibilidad Global: Una página web te permite estar accesible las 24 horas del día, los 7 días de la semana, para cualquier persona con conexión a internet en cualquier parte del mundo. Esto expande tu alcance geográfico de manera exponencial, trascendiendo las limitaciones físicas.
Construcción de Marca y Credibilidad: Un sitio web profesional y bien diseñado proyecta una imagen sólida y confiable de tu negocio o marca personal. Te brinda la oportunidad de comunicar tus valores, tu propuesta de valor única y tu experiencia, construyendo así credibilidad ante tu audiencia.
Canal de Comunicación y Atención al Cliente: Tu página web puede funcionar como un centro de información para tus clientes potenciales y existentes. Puedes proporcionar detalles sobre tus productos o servicios, responder preguntas frecuentes, ofrecer soporte técnico y facilitar el contacto a través de formularios o chats en vivo.
Generación de Leads y Ventas: Una página web optimizada para la conversión puede ser una poderosa herramienta para generar leads cualificados y aumentar las ventas. A través de formularios de contacto, suscripciones a newsletters, tiendas online integradas y llamadas a la acción estratégicas, puedes convertir visitantes en clientes.
Análisis y Mejora Continua: Las herramientas de análisis web te permiten rastrear el comportamiento de los usuarios en tu sitio, identificar qué funciona y qué no, y tomar decisiones basadas en datos para optimizar tu estrategia digital.
El Poder del SEO, el Posicionamiento y la Autoridad:

Aquí es donde el potencial de tu página web realmente se magnifica:

1. SEO (Optimización para Motores de Búsqueda): La Base de la Visibilidad Orgánica

Potencial: Implementar una estrategia de SEO efectiva significa optimizar tu página web para que los motores de búsqueda como Google entiendan de qué trata tu contenido y lo muestren a los usuarios que realizan búsquedas relevantes.
Cómo se logra:
Investigación de palabras clave: Identificar los términos que tu público objetivo utiliza para buscar información relacionada con tu negocio.
Optimización On-Page: Ajustar elementos internos de tu página, como títulos, meta descripciones, encabezados, contenido, imágenes y estructura de URLs, para incluir esas palabras clave de manera natural y relevante.
Creación de contenido de calidad: Desarrollar contenido valioso, informativo y atractivo que responda a las necesidades de tu audiencia y que los motores de búsqueda consideren relevante.
Optimización técnica: Asegurarse de que tu sitio web sea rápido, মোবাইল-friendly, seguro (HTTPS) y tenga una estructura clara para facilitar la indexación por parte de los motores de búsqueda.
2. Posicionamiento: Alcanzando los Primeros Lugares

Potencial: Un buen SEO conduce a un mejor posicionamiento en los resultados de búsqueda orgánicos. Aparecer en las primeras posiciones (idealmente en la primera página) aumenta drásticamente la visibilidad y el tráfico cualificado hacia tu sitio web.
Valor: Los usuarios tienden a confiar más en los resultados que aparecen en los primeros lugares de búsqueda orgánica, lo que se traduce en una mayor tasa de clics y, potencialmente, en más conversiones. Un buen posicionamiento te otorga una ventaja competitiva significativa.
3. Autoridad: Convirtiéndote en una Fuente de Referencia

Potencial: La autoridad de un sitio web se construye con el tiempo a través de diversos factores, incluyendo la calidad y relevancia del contenido, la cantidad y calidad de los enlaces externos que apuntan hacia tu sitio (backlinks), la experiencia del usuario y la consistencia en la publicación.
Cómo se construye:
Contenido de alto valor: Publicar contenido original, bien investigado y que resuelva los problemas o responda a las preguntas de tu audiencia.
Linkbuilding estratégico: Obtener enlaces de sitios web relevantes y de alta autoridad en tu nicho.
Menciones de marca: Lograr que tu marca sea mencionada en otros sitios web y plataformas.
Señal social: Tener una presencia activa y comprometida en redes sociales que dirija tráfico a tu sitio.
Experiencia del usuario positiva: Asegurarse de que los visitantes tengan una experiencia fluida y agradable en tu sitio web.
Valor: Un sitio web con alta autoridad es percibido como una fuente confiable y experta en su campo. Esto no solo mejora el posicionamiento en los motores de búsqueda, sino que también genera confianza en los usuarios, fomenta el boca a boca y atrae a una audiencia más comprometida.
En resumen, una página web correctamente utilizada, con una estrategia de SEO sólida, tiene el potencial de:

Aumentar significativamente la visibilidad online.
Atraer tráfico orgánico de alta calidad (usuarios que están buscando activamente lo que ofreces).
Mejorar el posicionamiento en los resultados de búsqueda, superando a la competencia.
Construir autoridad y credibilidad en tu nicho de mercado.
Generar leads y aumentar las ventas de manera sostenible.
Fortalecer la presencia de tu marca y la conexión con tu audiencia.
Proporcionar información valiosa y soporte a tus clientes.
Ofrecer una plataforma para el crecimiento y la expansión de tu negocio online.
Invertir tiempo y recursos en la creación y optimización de una página web es una estrategia fundamental para el éxito a largo plazo en el entorno digital actual.
      `,
      cta: "Solicitar Web Page Institucional o Corporativa",
      link: "https://mpago.la/2SQELVR"
    },
    {
      id: "contratar-sistema-web-toledoconsultora",
      title: "Sistema Web Tipo Spa",
      price: "$349.000",
      description: "Diseño profesional adaptable",
      popular: false,
      features: [
        "Dominio.com.ar incluido por 1 año",
"Incluye Desarrollo de Servicios Web, React, Css, EmailJs",
        "Aplica para Base de datos Postgresql/ORM + Node/Express web server",
        "Desarrollo de API hasta 3 endpoints con controlador y modelos",
        "No aplica para sistemas con autenticación de usuarios",
        "No aplica para sistemas con pagos online",
        "Incluye 5 emails corporativos con el dominio por el primer año",        
"Diseño Adaptativo a Pc y Móvil",
        "SEO básico incluido",
        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Acceso a redes socales y whatsapp",
        "Incluye hosting capa gratuita de imagenes",
        "*No incluye gastos de hosting ni gastos de mantenimiento",
      ],
                  detail: `
                  Un sistema integral o personalizado construido con tecnologías web modernas como React en el frontend y bases de datos como PostgreSQL o MongoDB en el backend puede ofrecerte una ayuda significativa en múltiples aspectos, brindando eficiencia, escalabilidad y una experiencia de usuario superior. Desglosemos cómo te puede beneficiar:

Beneficios Generales de un Sistema Integral o Personalizado con Tecnología Web Moderna:

Adaptabilidad a tus necesidades específicas: A diferencia de las soluciones "de caja" que pueden tener funcionalidades innecesarias o carecer de las que realmente necesitas, un sistema personalizado se diseña y desarrolla exactamente para tus flujos de trabajo, procesos y objetivos.
Integración fluida: Un sistema integral puede conectar diferentes áreas de tu operación (ventas, inventario, clientes, marketing, etc.) en una única plataforma coherente, eliminando silos de información, la necesidad de múltiples inicios de sesión y la tediosa tarea de transferir datos entre sistemas dispares.
Automatización de tareas: Se pueden automatizar procesos repetitivos y manuales, liberando tiempo y recursos de tu equipo para que se enfoquen en tareas más estratégicas y creativas. Esto reduce errores humanos y aumenta la eficiencia operativa.
Escalabilidad: Las tecnologías web modernas están diseñadas para manejar grandes volúmenes de datos y un número creciente de usuarios. Un sistema bien construido podrá crecer con tu negocio sin comprometer el rendimiento.
Mantenimiento y evolución más sencillos: Con una arquitectura modular y tecnologías estándar, el mantenimiento, las actualizaciones y la adición de nuevas funcionalidades suelen ser más ágiles y menos costosas en comparación con sistemas legados o propietarios.
Acceso desde cualquier lugar: Al ser una aplicación web, el sistema es accesible desde cualquier dispositivo con conexión a internet (ordenadores, tablets, móviles), lo que facilita el trabajo remoto y la colaboración.
Mejora de la toma de decisiones: Al tener datos centralizados y accesibles, se facilita la generación de informes y análisis, lo que te permite tomar decisiones más informadas y estratégicas para tu negocio.
Experiencia de usuario moderna e intuitiva: React permite construir interfaces de usuario dinámicas, rápidas y atractivas, lo que mejora la satisfacción y productividad de los usuarios.
El Rol de React (Frontend):

React es una biblioteca de JavaScript para construir interfaces de usuario interactivas y dinámicas. Su adopción te beneficia de las siguientes maneras:

Interfaz de usuario rápida y fluida: React utiliza un "DOM virtual" que optimiza las actualizaciones de la interfaz, lo que resulta en una experiencia de usuario más ágil y receptiva. Los cambios se reflejan instantáneamente sin necesidad de recargar la página completa.
Componentes reutilizables: React se basa en una arquitectura de componentes, lo que permite crear bloques de interfaz reutilizables. Esto acelera el desarrollo, facilita el mantenimiento y asegura la consistencia visual en toda la aplicación.
Gran comunidad y ecosistema: React cuenta con una comunidad de desarrolladores muy activa y un amplio ecosistema de librerías y herramientas, lo que facilita encontrar soluciones a problemas y mantenerse actualizado con las mejores prácticas.
Desarrollo eficiente: La naturaleza declarativa de React y sus herramientas de desarrollo facilitan la creación de interfaces complejas de manera más rápida y eficiente.
SEO-friendly (con ciertas consideraciones): Aunque inicialmente las aplicaciones React eran conocidas por ser difíciles de indexar por los motores de búsqueda, las técnicas de "Server-Side Rendering" (SSR) y "Static Site Generation" (SSG) permiten generar el HTML inicial en el servidor, lo que mejora la indexación y el SEO.
Experiencia de desarrollo robusta: React ofrece excelentes herramientas de depuración y pruebas, lo que contribuye a un código más limpio y con menos errores.
El Rol de PostgreSQL (Backend - Base de Datos Relacional):

PostgreSQL es un sistema de gestión de bases de datos relacional (RDBMS) potente, robusto y de código abierto. Su uso te aporta:

Integridad de datos: Las bases de datos relacionales como PostgreSQL garantizan la integridad y consistencia de los datos a través de mecanismos como transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) y restricciones de integridad (claves primarias, claves foráneas, etc.).
Consultas complejas y eficientes: SQL (Structured Query Language) permite realizar consultas complejas y obtener información específica de manera eficiente. PostgreSQL ofrece extensiones y optimizaciones que mejoran aún más el rendimiento de las consultas.
Escalabilidad vertical: PostgreSQL puede manejar grandes volúmenes de datos y un número considerable de usuarios, especialmente con una buena optimización y la posibilidad de escalar el hardware del servidor.
Seguridad robusta: PostgreSQL ofrece características de seguridad avanzadas, como control de acceso granular, autenticación fuerte y cifrado de datos.
Extensibilidad: PostgreSQL es altamente extensible, lo que permite añadir nuevas funcionalidades a través de extensiones para adaptarse a necesidades específicas (por ejemplo, búsqueda de texto completo, datos geoespaciales).
Comunidad sólida y soporte: Al ser de código abierto, cuenta con una gran comunidad que ofrece soporte, documentación y contribuciones constantes. También existen opciones de soporte comercial.
Cumplimiento de estándares: PostgreSQL cumple con muchos estándares SQL, lo que facilita la portabilidad y la interoperabilidad con otras herramientas.
El Rol de MongoDB (Backend - Base de Datos No Relacional - NoSQL):

MongoDB es una base de datos NoSQL orientada a documentos. Su uso te ofrece:

Flexibilidad del esquema: A diferencia de las bases de datos relacionales con esquemas rígidos, MongoDB permite almacenar datos en documentos JSON flexibles. Esto facilita el desarrollo y la adaptación a modelos de datos cambiantes.
Escalabilidad horizontal: MongoDB está diseñado para escalar horizontalmente distribuyendo los datos en múltiples servidores (sharding), lo que permite manejar volúmenes masivos de datos y un alto tráfico de manera eficiente.
Alto rendimiento para ciertas cargas de trabajo: Para aplicaciones con muchas lecturas y escrituras, y donde la estructura de los datos es menos relacional, MongoDB puede ofrecer un rendimiento superior.
Desarrollo ágil: La flexibilidad del esquema y la sintaxis basada en JSON facilitan el desarrollo rápido de aplicaciones.
Replicación y alta disponibilidad: MongoDB ofrece mecanismos de replicación incorporados para garantizar la disponibilidad de los datos y la tolerancia a fallos.
Índices potentes: MongoDB soporta una variedad de índices para optimizar las consultas.
Casos de uso específicos: MongoDB es especialmente adecuado para casos de uso como gestión de contenido, catálogos de productos, análisis en tiempo real y aplicaciones con datos semiestructurados o no estructurados.
En resumen, tener un sistema integral o personalizado con React y una base de datos como PostgreSQL o MongoDB te puede ayudar a:

Optimizar tus procesos de negocio y aumentar la eficiencia operativa.
Mejorar la experiencia de tus usuarios con interfaces rápidas y atractivas.
Gestionar grandes volúmenes de datos de manera segura y eficiente.
Escalar tu sistema a medida que tu negocio crece.
Tomar decisiones más informadas basadas en datos centralizados y accesibles.
Reducir costos a largo plazo gracias a la eficiencia y la facilidad de mantenimiento.
Adaptarte rápidamente a los cambios del mercado y las necesidades de tus clientes.
La elección entre PostgreSQL y MongoDB dependerá de las necesidades específicas de tu proyecto, la naturaleza de tus datos y los patrones de acceso. PostgreSQL es ideal para aplicaciones con relaciones complejas entre datos y la necesidad de una alta integridad transaccional, mientras que MongoDB brilla en aplicaciones con datos flexibles y la necesidad de una alta escalabilidad horizontal. La combinación de React en el frontend con cualquiera de estas potentes bases de datos en el backend te proporciona una base tecnológica sólida para construir una solución web robusta y adaptada a tus requerimientos.
      `,
      cta: "Solicitar Desarrollo de Sistema Integral a medida",
      link: "https://mpago.la/2QJQTSC"
    },
    {
      id: "contratar-sistema-web-completo-toledoconsultora",
      title: "Sistema con base de datos  y autenticación Web Tipo Spa",
      price: "$549.000",
      description: "Diseño profesional adaptable",
      popular: false,
      features: [
        "Dominio.com.ar incluido por 1 año",
        "Incluye Desarrollo de Servicios Web, React, Css, EmailJs",
        "Aplica para Base de datos Postgresql/ORM + Node/Express web server",
        "Desarrollo de API con sus controladoresm rutas y modelos",
        "Aplica para sistemas con autenticación de usuarios",
        "Aplica para sistemas con pagos online con mercadopago",                
"Diseño Adaptativo a Pc y Móvil",
        "SEO básico incluido",
        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Acceso a redes socales y whatsapp",
        "Incluye hosting capa gratuita de imagenes",
"Incluye 5 emails corporativos con el dominio por el primer año",        
        "*No incluye gastos de hosting ni gastos de mantenimiento",
      ],
                  detail: `

Ventajas Clave de un Sistema Web SPA Personalizado con la Estructura Detallada:

Este tipo de desarrollo a medida ofrece una serie de beneficios estratégicos que pueden impulsar el crecimiento, la eficiencia y la imagen de cualquier negocio:

1. Experiencia de Usuario (UX) Superior:

Navegación fluida y rápida: Al ser una SPA, la mayor parte de la interfaz se carga una sola vez. Las interacciones posteriores (cambio de secciones, envío de formularios) se realizan mediante la manipulación dinámica del DOM (Document Object Model) a través de React, lo que resulta en transiciones suaves y tiempos de carga mínimos, similar a una aplicación de escritorio. Esto mejora significativamente la experiencia del usuario.
Interactividad enriquecida: React facilita la creación de interfaces de usuario interactivas y dinámicas, permitiendo incorporar animaciones, validaciones en tiempo real y otras funcionalidades que hacen la experiencia más atractiva y usable.
Diseño adaptativo (Responsive): La inclusión del diseño adaptativo garantiza que el sistema funcione de manera óptima y se vea bien en cualquier dispositivo (ordenadores de escritorio, portátiles, tablets y smartphones). Esto es crucial en un mundo donde los usuarios acceden a la información desde múltiples dispositivos.
2. Desarrollo Robusto y Escalable:

Tecnologías modernas y eficientes: El uso de React para el frontend y Node.js/Express para el backend (con PostgreSQL y un ORM como Sequelize o TypeORM) representa un stack tecnológico moderno, eficiente y ampliamente utilizado en la industria. Esto se traduce en un desarrollo más rápido, un código más mantenible y una mayor escalabilidad del sistema.
Arquitectura modular: La separación entre el frontend (React) y el backend (Node/Express API) promueve una arquitectura modular. Esto facilita el desarrollo concurrente, las pruebas unitarias y la incorporación de nuevas funcionalidades en el futuro sin afectar otras partes del sistema.
API bien definida: El desarrollo de una API con sus controladores, rutas y modelos proporciona una interfaz clara y estructurada para la comunicación entre el frontend y el backend. Esto es fundamental para la escalabilidad y la posible integración con otras aplicaciones o servicios en el futuro.
Gestión de datos eficiente: La elección de PostgreSQL (una base de datos relacional robusta con soporte para transacciones ACID y consultas complejas a través de SQL) o una combinación con un ORM (Object-Relational Mapper) asegura una gestión de datos eficiente y consistente.
3. Seguridad y Autenticación:

Autenticación de usuarios: La inclusión de un sistema de autenticación permite controlar el acceso a diferentes partes del sistema y personalizar la experiencia según el rol del usuario. Esto es esencial para la seguridad de los datos y la gestión de usuarios.
Seguridad en la API: El desarrollo de la API con sus controladores y rutas permite implementar medidas de seguridad específicas en el backend para proteger los datos y prevenir accesos no autorizados.
4. Integración de Pagos Online:

Mercado Pago integrado: La capacidad de integrar pagos online a través de Mercado Pago abre las puertas al comercio electrónico y facilita la monetización de productos o servicios directamente desde la plataforma. Mercado Pago es una solución popular y segura en Latinoamérica, lo que genera confianza en los usuarios.
5. Presencia Online Profesional y Marketing Básico:

Dominio personalizado: El dominio ".com.ar" incluido por un año proporciona una identidad online profesional y facilita el branding.
Emails corporativos: Los 5 emails corporativos con el dominio mejoran la imagen profesional de la empresa y facilitan la comunicación con clientes y proveedores.
SEO básico incluido: La optimización SEO básica ayuda a mejorar la visibilidad del sitio web en los motores de búsqueda, lo que puede atraer tráfico orgánico y clientes potenciales.
Secciones informativas clave: Las secciones "Nosotros" y "Contacto" proporcionan información esencial sobre la empresa y facilitan la comunicación con los usuarios.
Enlaces a redes sociales y WhatsApp: La integración de acceso a redes sociales y WhatsApp facilita la conexión con la audiencia en sus plataformas preferidas y abre canales de comunicación directa.
Navbar y Footer personalizados: Estos elementos de navegación y pie de página personalizados contribuyen a una mejor experiencia de usuario y refuerzan la identidad visual de la marca.
6. Ahorro Inicial y Facilidad de Inicio:

Hosting de imágenes gratuito: La inclusión de hosting gratuito para imágenes reduce los costos iniciales de infraestructura.
Desventajas a Considerar (aunque no son inherentes a la estructura, sino a la necesidad de gestión continua):

Gastos de hosting no incluidos: Es importante tener en cuenta que el hosting del sistema en sí no está incluido y será un costo recurrente.
Gastos de mantenimiento no incluidos: El mantenimiento continuo del sistema (actualizaciones, corrección de errores, nuevas funcionalidades) también generará costos a largo plazo.
En resumen, tener este desarrollo a medida a disposición de cualquier negocio o empresa ofrece las siguientes ventajas competitivas:

Mejora la interacción y satisfacción del cliente a través de una experiencia de usuario moderna y fluida.
Proporciona una plataforma tecnológica robusta, escalable y adaptable a las necesidades específicas del negocio.
Facilita la gestión de usuarios y la seguridad de la información.
Abre oportunidades para el comercio electrónico y la monetización online.
Establece una presencia online profesional y facilita el marketing digital básico.
Reduce los costos iniciales de infraestructura (en cuanto a dominio y hosting de imágenes).
En definitiva, esta estructura de desarrollo a medida sienta las bases para una solución web potente y personalizada que puede impulsar el crecimiento y la eficiencia de cualquier negocio en el entorno digital actual. Es crucial que las empresas consideren los costos de hosting y mantenimiento a largo plazo para una planificación financiera completa.
      `,
      cta: "Solicitar Sistema Integral Desarrollo a medida",
      link: "https://mpago.la/2rp8wtV"
    },
    
    {
      id: "contratar-ecommerce-toledoconsultora",      
      title: "Ecommerce",
      price: "$249.000",
      description: "Tienda online Estándar",
      popular: true,
      features: [
        "Integración con MercadoPago",
        "Panel autogestionable de productos, no aplica para talles ni colores",
        "Sistema con control de stock",
        "Panel autogestionable de pedidos",
        "Panel autogestionable de usuarios",
        "Sin límite de productos",
        "Incluye Diseño y Despliegue de Base de datos y web Server",
"Diseño Adaptativo a Pc y Móvil",
        "Sin Comisiones por venta",
        "*No incluye dominio ni hosting ni gastos de mantenimiento",
        "Navbar y Footer personalizados",
        "Home optimizado para tu negocio, con productos fijos",
        "Secciones: Nosotros, Contacto, Historia de la empresa",
        "Incluye hosting capa gratuita de imagenes",
      ],            detail: `
      Beneficios Clave de la Tienda Online Detallada:

Esta estructura de tienda online ofrece una serie de ventajas significativas para facilitar la venta de productos a través de internet:

1. Facilidad de Gestión y Autonomía:

Panel autogestionable de productos: Permite a la empresa añadir, editar, eliminar y actualizar la información de sus productos (descripción, precio, imágenes, etc.) de manera sencilla y directa, sin necesidad de conocimientos técnicos avanzados ni depender de un desarrollador para cada cambio.
Panel autogestionable de pedidos: Facilita el seguimiento y la gestión de todos los pedidos realizados por los clientes, incluyendo el estado del pedido (pendiente, procesado, enviado, entregado), detalles del cliente y productos solicitados. Esto agiliza el flujo de trabajo de ventas y mejora la atención al cliente.
Panel autogestionable de usuarios: Permite administrar las cuentas de los clientes registrados, visualizar su historial de compras y, potencialmente, segmentarlos para futuras campañas de marketing.
2. Potencial de Ventas y Crecimiento:

Integración con Mercado Pago: La conexión con Mercado Pago, una plataforma de pagos online líder en Latinoamérica, ofrece a los clientes múltiples opciones de pago seguras y confiables (tarjetas de crédito/débito, transferencias, efectivo en puntos de pago). Esto reduce las fricciones en el proceso de compra y aumenta las posibilidades de conversión.
Sin límite de productos: La capacidad de listar una cantidad ilimitada de productos permite a la empresa escalar su catálogo online sin restricciones, adaptándose a su crecimiento y a la variedad de su oferta.
Sin comisiones por venta: A diferencia de algunas plataformas de marketplace que cobran comisiones por cada venta, esta tienda online permite a la empresa conservar la totalidad de sus ganancias, lo que impacta directamente en la rentabilidad.
Alcance ampliado: Una tienda online abre las puertas a un mercado mucho más amplio que una tienda física, permitiendo llegar a clientes a nivel local, regional e incluso nacional.
3. Gestión de Inventario Eficiente:

Sistema con control de stock: La funcionalidad de control de stock permite a la empresa realizar un seguimiento en tiempo real de la disponibilidad de sus productos. Esto evita la venta de artículos agotados, mejora la planificación de reposición y ofrece una mejor experiencia al cliente al mostrar la disponibilidad de los productos.
4. Diseño y Experiencia de Usuario:

Diseño adaptativo (Responsive): Asegura que la tienda online se visualice correctamente y funcione de manera óptima en cualquier dispositivo (ordenadores, tablets y smartphones). Esto es crucial para llegar a todos los segmentos de la audiencia, ya que muchos usuarios navegan y compran desde sus dispositivos móviles.
Navbar y Footer personalizados: Estos elementos de navegación y pie de página personalizados mejoran la usabilidad del sitio, facilitan la navegación entre las secciones y refuerzan la identidad visual de la marca.
Home optimizado para tu negocio, con productos fijos: La página de inicio personalizada y la posibilidad de destacar productos específicos permiten dirigir la atención de los visitantes hacia las ofertas más relevantes o los productos estrella del negocio.
Secciones informativas clave: Las secciones "Nosotros", "Contacto" e "Historia de la empresa" brindan información importante sobre la empresa, generan confianza en los clientes y facilitan la comunicación.
Incluye hosting capa gratuita de imágenes: Reduce los costos iniciales de alojamiento de los elementos visuales de la tienda.
Desventajas a Considerar (Costos Adicionales):

No incluye dominio ni hosting: Es fundamental tener en cuenta que el costo del nombre de dominio (la dirección web) y el alojamiento del sitio web (el espacio en un servidor donde se guardan los archivos de la tienda) no están incluidos y serán gastos recurrentes.
No incluye gastos de mantenimiento: El mantenimiento continuo de la tienda online (actualizaciones de software, seguridad, corrección de errores, posibles mejoras) también generará costos a largo plazo.
En resumen, tener a disposición esta tienda online ofrece a cualquier negocio o empresa:

Una plataforma de comercio electrónico propia y personalizada.
Control total sobre sus productos, pedidos y clientes.
La capacidad de vender online sin pagar comisiones por venta.
Una gestión de inventario eficiente para evitar problemas de stock.
Una experiencia de compra optimizada para diferentes dispositivos.
Integración con una solución de pagos segura y popular.
La posibilidad de escalar su negocio online sin límites de productos.
Una presencia online informativa y profesional.
Reducción de costos iniciales en el alojamiento de imágenes.
A pesar de no incluir el dominio, el hosting y el mantenimiento, esta estructura proporciona una base sólida y funcional para comenzar a vender online y expandir el alcance del negocio. Es crucial que las empresas consideren los costos adicionales para una planificación financiera completa y un funcionamiento continuo de la tienda.
      `,
      cta: "Quiero mi Tienda Online",
      link: "https://mpago.la/2w6ThwW"
    },
    {
      id: "contratar-seo-avanzado-toledoconsultora",
      title: "SEO Avanzado",
      price: "$249.000",
      description: "Posicionamiento estratégico",
      popular: false,
      features: [
        "Estrategia SEO completa",
        "Posicionamos tu negocio en las Primeras 2 páginas de Google",
        "Posicionamiento en Google Maps",
        "Asesoramiento Global de Posicionamiento para tu negocio",
        "Informes de rendimiento",
        "Palabras clave estratégicas",
        "SEO On-page/Off-page",        
        "Análisis de velocidad, rendimiento y experiencia de usuario, propuestas de mejora",
        "Análisis contenido y propuestas de mejora",
      ],            detail: ` 

Beneficios Clave de Contratar la Estrategia SEO Completa de Toledo Consultora:

Al confiar en Toledo Consultora para implementar una estrategia SEO completa, tu negocio puede obtener una ventaja competitiva significativa en el entorno digital, traduciéndose en mayor visibilidad, tráfico cualificado y, en última instancia, un aumento en las oportunidades de negocio. Aquí te presento los beneficios detallados:

1. Mayor Visibilidad y Tráfico Orgánico de Calidad:

Posicionamiento en las Primeras 2 páginas de Google: Este es un beneficio crucial. Estar en las primeras posiciones de Google para las palabras clave relevantes significa que tu negocio será visto por una gran cantidad de usuarios que están activamente buscando los productos o servicios que ofreces. Esto se traduce en un aumento significativo del tráfico orgánico (no pagado) a tu sitio web.
Palabras clave estratégicas: Toledo Consultora realizará una investigación exhaustiva para identificar las palabras clave más relevantes y con mayor potencial de conversión para tu negocio. Al optimizar tu sitio web para estos términos, atraerás a usuarios que tienen una alta intención de compra o interés en tus servicios.
2. Optimización Integral de tu Presencia Online:

SEO On-page/Off-page: Una estrategia SEO completa aborda tanto la optimización interna de tu sitio web (SEO On-page - contenido, estructura, etiquetas, etc.) como los factores externos que influyen en el posicionamiento (SEO Off-page - backlinks, menciones de marca, autoridad del dominio, etc.). Esto asegura una optimización holística para obtener los mejores resultados.
Análisis de contenido y propuestas de mejora: Toledo Consultora analizará el contenido existente en tu sitio web para identificar áreas de mejora en términos de relevancia, calidad, optimización para palabras clave y engagement del usuario. Esto te permitirá ofrecer contenido más valioso y atractivo tanto para los usuarios como para los motores de búsqueda.
Análisis de velocidad, rendimiento y experiencia de usuario, propuestas de mejora: Un sitio web rápido, con buen rendimiento y una experiencia de usuario intuitiva son factores clave para el SEO y la satisfacción del cliente. Toledo Consultora analizará estos aspectos y te proporcionará recomendaciones concretas para optimizar tu sitio y reducir la tasa de rebote.
3. Mayor Visibilidad Local y Captación de Clientes Cercanos:

Posicionamiento en Google Maps: Para negocios con una ubicación física (tiendas, oficinas, restaurantes, etc.), el posicionamiento en Google Maps es fundamental para atraer clientes locales. Toledo Consultora optimizará tu perfil de Google My Business para que aparezcas en los primeros resultados cuando los usuarios busquen negocios como el tuyo en tu área geográfica.
4. Estrategia Sólida y Asesoramiento Experto:

Estrategia SEO completa: No se trata solo de tácticas aisladas, sino de un plan integral y personalizado diseñado para alcanzar tus objetivos de negocio a largo plazo. Toledo Consultora desarrollará una estrategia coherente y adaptada a tu nicho de mercado y competencia.
Asesoramiento Global de Posicionamiento para tu negocio: Obtendrás la guía y el conocimiento de expertos en SEO que te ayudarán a comprender el panorama del posicionamiento web y a tomar decisiones informadas para tu negocio. Este asesoramiento continuo es invaluable para mantener una ventaja competitiva.
5. Medición y Mejora Continua:

Informes de rendimiento: Toledo Consultora proporcionará informes periódicos sobre el rendimiento de tu estrategia SEO, incluyendo métricas clave como el tráfico orgánico, las posiciones de las palabras clave, las conversiones y otros indicadores relevantes. Esto te permitirá visualizar el progreso y entender el impacto de la inversión.
En resumen, contratar los servicios de "Estrategia SEO completa" de Toledo Consultora ofrece los siguientes beneficios cruciales para cualquier negocio:

Aumento significativo de la visibilidad online en los resultados de búsqueda de Google.
Atracción de tráfico orgánico altamente cualificado y con mayor potencial de conversión.
Optimización integral de todos los aspectos clave del SEO (on-page, off-page, contenido, técnico y experiencia de usuario).
Mejora de la visibilidad local y captación de clientes en tu área geográfica a través del posicionamiento en Google Maps.
Desarrollo e implementación de una estrategia SEO personalizada y efectiva.
Asesoramiento experto y continuo para tomar decisiones informadas sobre tu posicionamiento web.
Medición del rendimiento y seguimiento del progreso a través de informes detallados.
Mayor credibilidad y confianza por parte de los usuarios al aparecer en los primeros resultados de búsqueda.
Una ventaja competitiva sostenible en el mercado digital.
Al invertir en una estrategia SEO completa con Toledo Consultora, tu negocio estará sentando las bases para un crecimiento online sólido y a largo plazo.
      `,
      cta: "Mejorar Posicionamiento",
      link: "https://mpago.la/1SgrAx3"
    },
    {
      id: "contratar-campanasdigitales-toledoconsultora",
      title: "Campañas Digitales Google Ads",
      price: "$99.000",
      description: "Gestión profesional",
      popular: false,
      features: [      
        "Gestión Mensual"  ,
        "Gestión de Campañas digitales con Google Ads",
        "Optimización y monitorización continua de la campaña",
        "Gestión de Informes Periódicos",
        "Análisis de rendimiento y propuesta de mejora",
        "Segmentación avanzada",
        "*No incluye presupuesto publicitario, el costo de la campaña es a cargo del cliente",        
        "Realizamos campañas de tráfico, visitas a perfil, llamadas, ventas",
      ],            detail: `

Beneficios Clave de la Gestión Mensual de Campañas Digitales con Google Ads de Toledo Consultora:

Contratar la gestión mensual de tus campañas de Google Ads con Toledo Consultora te permite maximizar el retorno de tu inversión publicitaria, llegar a tu público objetivo de manera efectiva y optimizar continuamente tus resultados. Aquí te presento los beneficios detallados:

1. Optimización y Rendimiento Continuo de tus Campañas:

Optimización y monitorización continua de la campaña: El entorno digital es dinámico y las campañas de publicidad requieren una atención constante. Toledo Consultora se encargará de monitorear el rendimiento de tus campañas de forma regular, realizando ajustes y optimizaciones para mejorar los resultados, reducir costos innecesarios y asegurar que tu inversión publicitaria esté trabajando de la manera más eficiente posible.
Análisis de rendimiento y propuesta de mejora: Periódicamente, Toledo Consultora analizará los datos de rendimiento de tus campañas para identificar tendencias, áreas de oportunidad y posibles problemas. Basándose en este análisis, te proporcionarán propuestas de mejora concretas y accionables para optimizar aún más tus resultados.
2. Llegar a tu Audiencia Correcta:

Segmentación avanzada: Google Ads ofrece una amplia gama de opciones de segmentación para llegar a la audiencia más relevante para tu negocio (ubicación geográfica, datos demográficos, intereses, comportamiento online, etc.). Toledo Consultora implementará estrategias de segmentación avanzadas para asegurar que tus anuncios se muestren a las personas con mayor probabilidad de convertirse en clientes.
3. Información Clara y Transparente:

Gestión de Informes Periódicos: Recibirás informes periódicos y detallados sobre el rendimiento de tus campañas de Google Ads. Estos informes te proporcionarán una visión clara de las métricas clave (impresiones, clics, CTR, conversiones, costo por adquisición, etc.) y te permitirán entender el impacto de tu inversión publicitaria.
4. Campañas Adaptadas a tus Objetivos:

Realizamos campañas de tráfico, visitas a perfil, llamadas, ventas: Toledo Consultora tiene la experiencia para configurar y gestionar campañas de Google Ads enfocadas en tus objetivos específicos. Ya sea que busques aumentar el tráfico a tu sitio web, generar visitas a tu perfil de negocio, recibir más llamadas telefónicas o impulsar las ventas online, ellos adaptarán la estrategia y la configuración de la campaña para lograr tus metas.
Consideración Importante:

No incluye presupuesto publicitario, el costo de la campaña es a cargo del cliente: Es fundamental recordar que el costo directo de los clics y las impresiones generadas por los anuncios en Google Ads es responsabilidad del cliente. Toledo Consultora se encarga de la gestión experta de ese presupuesto para obtener el máximo rendimiento posible.
En resumen, contratar la "Gestión Mensual" de Campañas Digitales con Google Ads de Toledo Consultora ofrece los siguientes beneficios para tu negocio:

Optimización continua y experta de tus campañas de Google Ads para maximizar el retorno de la inversión.
Llegar de manera efectiva a tu público objetivo a través de estrategias de segmentación avanzadas.
Comprensión clara del rendimiento de tus campañas a través de informes periódicos y detallados.
Implementación de campañas diseñadas específicamente para alcanzar tus objetivos de negocio (tráfico, visitas, llamadas, ventas).
Ahorro de tiempo y esfuerzo al delegar la compleja tarea de gestión de campañas a profesionales.
Acceso a la experiencia y el conocimiento de especialistas en Google Ads para obtener mejores resultados.
Adaptación ágil a los cambios en el algoritmo de Google y las tendencias del mercado.
Al confiar en Toledo Consultora para la gestión de tus campañas de Google Ads, puedes enfocarte en otras áreas de tu negocio con la tranquilidad de saber que tu inversión publicitaria está en manos expertas y trabajando para alcanzar tus metas.
      `,
      cta: "Contratar Campañas Digitales",
      link: "https://mpago.la/1NbDWJ9"
    },
    {
      id: "contratar-ecommerce-paginaweb-toledoconsultora",
      title: "Paquete Completo Ecommerce + Pagina Web",
      price: "$749.000",
      description: "Paquete Bussiness",
      popular: false,
      features: [
        "Dominio.com.ar incluido por 1 año",
"Incluye Desarrollo de Servicios Web, React, Css, EmailJs",
"Incluye 5 emails corporativos con el dominio por el primer año",        
         "Integración con MercadoPago",
        "Panel autogestionable de productos, no aplica para talles ni colores",
        "Sistema con control de stock",
        "Panel autogestionable de pedidos",
        "Panel autogestionable de usuarios",
        "Sin límite de productos",
        "Incluye Diseño y Despliegue de Base de datos y web Server",
                "Incluye hosting capa gratuita de imagenes para tus productos",

        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Sin Comisiones por venta",        
        "Diseño Adaptativo a Pc y Móvil",
        "Estrategia SEO completa",
        "Posicionamiento en Google Business y Maps",
        "Campaña Publicitaria Estándar x 30días en Google Ads",
                "*No incluye gastos de hosting de base de datos ni gastos de mantenimiento",

      ],            detail: `
      Beneficios Clave del Paquete Business de Toledo Consultora:

Este paquete integral ofrece una solución completa para establecer y hacer crecer la presencia online de tu negocio, combinando una plataforma de comercio electrónico funcional con estrategias de marketing digital para alcanzar a tu audiencia y aumentar tus ventas.

1. Establecimiento de una Plataforma de Venta Online Sólida:

"Dominio.com.ar incluido por 1 año": Obtener un dominio ".com.ar" profesional desde el inicio brinda identidad local, genera confianza en los clientes argentinos y facilita el branding online. El primer año incluido reduce los costos iniciales.
"Incluye Desarrollo de Servicios Web, React, Css, EmailJs": La utilización de tecnologías modernas como React para el frontend asegura una experiencia de usuario rápida y dinámica. CSS permite un diseño atractivo y personalizado, mientras que EmailJs facilita la implementación de funcionalidades de correo electrónico (notificaciones de pedidos, formularios de contacto, etc.). El desarrollo de servicios web (backend) es fundamental para la lógica de la tienda.
"Incluye 5 emails corporativos con el dominio por el primer año": Contar con correos electrónicos profesionales asociados a tu dominio mejora la imagen de tu negocio y facilita la comunicación con clientes y proveedores de manera creíble.
"Integración con MercadoPago": La conexión con la principal plataforma de pagos online en Argentina ofrece a tus clientes múltiples opciones de pago seguras y confiables, lo que reduce la fricción en el proceso de compra y aumenta las tasas de conversión.
"Panel autogestionable de productos, no aplica para talles ni colores": Un panel intuitivo permite gestionar el catálogo de productos fácilmente (añadir, editar, eliminar información básica como descripción, precio, imágenes). Aunque limitado en cuanto a variaciones, es ideal para negocios con productos simples.
"Sistema con control de stock": La gestión de inventario en tiempo real evita la venta de productos agotados, mejora la planificación de reposición y ofrece una mejor experiencia al cliente al mostrar la disponibilidad.
"Panel autogestionable de pedidos": Facilita el seguimiento y la gestión de todos los pedidos, desde la recepción hasta el envío, optimizando el flujo de trabajo de ventas.
"Panel autogestionable de usuarios": Permite administrar las cuentas de los clientes, visualizar su historial y, potencialmente, segmentarlos para futuras acciones de marketing.
"Sin límite de productos": La capacidad de listar una cantidad ilimitada de artículos permite escalar el catálogo online a medida que crece el negocio.
"Incluye Diseño y Despliegue de Base de datos y web Server": Toledo Consultora se encarga de la infraestructura técnica inicial, lo que simplifica el proceso de lanzamiento de la tienda online.
"Incluye hosting capa gratuita de imagenes para tus productos": Reduce los costos iniciales de almacenamiento de las imágenes de los productos.
"Navbar y Footer personalizados": Elementos de navegación y pie de página personalizados mejoran la usabilidad y refuerzan la identidad de marca.
"Secciones: Nosotros, Contacto": Proporcionan información esencial sobre la empresa y facilitan la comunicación con los clientes.
"Sin Comisiones por venta": A diferencia de marketplaces, conservas la totalidad de tus ganancias por cada venta realizada en tu propia tienda online.
"Diseño Adaptativo a Pc y Móvil": Asegura que la tienda funcione y se vea bien en todos los dispositivos, alcanzando a una audiencia más amplia.
2. Impulso Inicial en Marketing Digital:

"Estrategia SEO completa": Se implementará una estrategia integral para mejorar la visibilidad de tu tienda online en los resultados de búsqueda de Google de forma orgánica, atrayendo tráfico cualificado a largo plazo.
"Posicionamiento en Google Business y Maps": Optimización de tu perfil de Google My Business para mejorar la visibilidad local, atrayendo clientes cercanos y facilitando la información de contacto y ubicación.
"Campaña Publicitaria Estándar x 30 días en Google Ads": Un impulso inicial con publicidad paga en Google Ads permite generar tráfico y visibilidad de forma rápida durante el primer mes, llegando a clientes potenciales que buscan activamente tus productos o servicios.
Consideración Importante:

***"No incluye gastos de hosting de base de datos ni gastos de mantenimiento"***: Es crucial tener en cuenta que el alojamiento continuo de la base de datos y el servidor web, así como los costos de mantenimiento y actualizaciones futuras de la plataforma, no están incluidos en el paquete y serán responsabilidades del cliente a largo plazo.
Beneficios Generales de Contratar el Paquete Business de Toledo Consultora:

Solución integral para lanzar y promocionar tu tienda online: Combina el desarrollo de la plataforma con estrategias de marketing digital esenciales.
Ahorro de tiempo y esfuerzo: Toledo Consultora se encarga de la configuración inicial y las estrategias de marketing, permitiéndote enfocarte en la gestión de tu negocio.
Rápido inicio de operaciones online: Con la infraestructura básica y una campaña publicitaria inicial, puedes comenzar a vender en línea rápidamente.
Mayor visibilidad y potencial de alcance: La combinación de SEO y publicidad paga aumenta la probabilidad de llegar a tu público objetivo.
Control total sobre tu plataforma de ventas: Sin comisiones por venta y con paneles de autogestión, tienes el control de tu negocio online.
Imagen profesional desde el inicio: Dominio propio, correos corporativos y diseño adaptativo contribuyen a una imagen de marca sólida.
En resumen, el Paquete Business de Toledo Consultora ofrece una excelente oportunidad para cualquier negocio que desee establecer una presencia de comercio electrónico completa y comenzar a atraer clientes online desde el principio. La combinación de una plataforma funcional con estrategias de marketing digital iniciales proporciona un impulso significativo para el crecimiento online. Es importante considerar los costos de hosting y mantenimiento a largo plazo para una planificación financiera completa.
      `,
      cta: "Contratar Pack Bussiness",
      link: "https://mpago.la/1ppUGph"
    },
    {
      id: "contratar-asesoria-de-negocios-toledoconsultora",
      title: "Asesoría de Negocios",
      price: "$50.000",
      description: "Sesión estratégica personalizada",
      popular: false,
      features: [
        "Análisis y Optimización del Modelo de Negocio con Soluciones Tecnológicas",
        "Optimización de Procesos a través de la Tecnología Web",
        "Planificación Comercial Estratégica con Marketing Digital",
        "Estrategias de Crecimiento y Escalabilidad Web",
        "Análisis de Mercado y Estrategia SEO Competitiva",
        "Duración de la Asesoría: Sesión individual de 2 horas",
        "Entrega: Informe ejecutivo detallado"
      ],            detail: `
      Lista Concreta de Servicios de Asesoría de Negocios:

Análisis y Optimización del Modelo de Negocio con Soluciones Tecnológicas:

Descripción: Sesión de 2 horas para obtener una visión general del modelo de negocio del cliente, identificar problemas y oportunidades de mejora. Se analizará cómo las tecnologías que ofreces (desarrollo web, SEO, publicidad online, etc.) pueden resolver desafíos específicos y optimizar sus operaciones.
Entregable: Informe ejecutivo detallando el análisis del modelo de negocio, los problemas identificados y las recomendaciones tecnológicas específicas.
Optimización de Procesos a través de la Tecnología Web:

Descripción: Sesión de 2 horas dedicada a analizar los flujos de trabajo y procesos actuales del cliente. Se identificarán cuellos de botella e ineficiencias y se propondrán soluciones tecnológicas personalizadas (automatización con herramientas web, desarrollo de funcionalidades específicas, integración de sistemas, etc.) para mejorar la productividad y reducir costos.
Entregable: Informe ejecutivo con el análisis de los procesos, las áreas de mejora identificadas y las soluciones tecnológicas recomendadas con un enfoque en la tecnología web disponible.
Planificación Comercial Estratégica con Marketing Digital:

Descripción: Sesión de 2 horas enfocada en diseñar una estrategia comercial digital efectiva. Se evaluarán las necesidades y objetivos del cliente para recomendar las herramientas y canales de marketing digital más adecuados:
Generación de tráfico y visibilidad: SEO, Google Ads, campañas en redes sociales.
Captación de leads: Landing pages optimizadas.
Ventas online: Desarrollo de e-commerce.
Presencia local: Optimización de Google Business Profile.
Entregable: Informe ejecutivo con un plan comercial digital detallado, incluyendo las estrategias recomendadas, las herramientas a utilizar y los posibles flujos de acción.
Estrategias de Crecimiento y Escalabilidad Web:

Descripción: Sesión de 2 horas para explorar cómo el cliente puede escalar su presencia y operaciones online. Se analizarán las oportunidades de crecimiento a través de la implementación de nuevas funcionalidades web, la optimización de la infraestructura para manejar un mayor tráfico, la expansión a nuevos mercados online y la implementación de estrategias de retención de clientes.
Entregable: Informe ejecutivo con estrategias de crecimiento y escalabilidad específicas para el proyecto web del cliente, incluyendo recomendaciones técnicas y de marketing.
Análisis de Mercado y Estrategia SEO Competitiva:

Descripción: Sesión de 2 horas dedicada a analizar el panorama digital del cliente y la estrategia SEO de sus principales competidores. Se identificarán las palabras clave clave que utiliza la competencia y se definirán estrategias para superar su posicionamiento y captar una mayor cuota de mercado online.
Entregable: Informe ejecutivo con el análisis del mercado digital, la estrategia SEO de la competencia y un plan de acción para mejorar el posicionamiento SEO del cliente.
Características Comunes a Todos los Servicios:

Duración de la Asesoría: Sesión individual de 2 horas.
Entrega: Informe ejecutivo detallado con el análisis, las recomendaciones y los pasos a seguir.


Presentación de Toledo Consultora

Toledo Consultora se presenta como una opción sólida para empresas que buscan asesoramiento de negocios, gracias a una combinación única de experiencia técnica, conocimiento del panorama digital y un enfoque estratégico. La consultora ofrece una perspectiva integral, respaldada por:

Experiencia en el mundo digital: Toledo Consultora cuenta con experiencia en el desarrollo de soluciones tecnológicas para empresas de diversos sectores, incluyendo plataformas de comercio electrónico, servicios de salud, tecnología y educación. Esto demuestra un profundo entendimiento de los desafíos y oportunidades que enfrentan las empresas en el entorno digital actual.

Capacidad para la transformación digital: La consultora posee un dominio de un amplio espectro de tecnologías relevantes, incluyendo HTML, CSS, JavaScript, React, MongoDB, Postgres, Node.js, Git, GitHub, Docker, Linux y AWS. Este conocimiento permite a Toledo Consultora brindar asesoramiento experto sobre cómo implementar y aprovechar la tecnología para optimizar operaciones, mejorar la presencia en línea e impulsar el crecimiento de sus clientes.

Especialización en optimización de procesos: Toledo Consultora tiene experiencia en metodologías ágiles y Scrum, lo que le permite analizar y mejorar los procesos de negocio, optimizar los flujos de trabajo y aumentar la productividad. Esto es esencial para las empresas que buscan optimizar sus operaciones y lograr una mayor eficiencia.

Habilidades estratégicas y de comunicación: La consultora cuenta con sólidas habilidades de liderazgo, comunicación, trabajo en equipo y adaptabilidad. Estas habilidades son cruciales para comunicarse eficazmente con los clientes, comprender sus necesidades y colaborar en la búsqueda de soluciones.

Conocimiento especializado en campañas electorales: Toledo Consultora posee experiencia en el desarrollo web para campañas electorales, lo que le otorga un conocimiento especializado en estrategias de comunicación política y movilización digital.

Formación en ciencias políticas: La formación en ciencias políticas complementa la experiencia técnica de Toledo Consultora, permitiéndole comprender el contexto político y social en el que operan las organizaciones, y ofrecer estrategias de comunicación y posicionamiento más efectivas.

Enfoque en la innovación: Toledo Consultora se compromete a mantenerse a la vanguardia de las últimas tendencias tecnológicas, incluyendo Inteligencia Artificial, para ofrecer a sus clientes soluciones innovadoras y estrategias de vanguardia.

En resumen, Toledo Consultora ofrece una valiosa combinación de experiencia técnica, visión para los negocios, habilidades interpersonales y conocimiento especializado en campañas electorales y ciencias políticas. Esto la convierte en una opción ideal para empresas y organizaciones que buscan un asesoramiento estratégico e integral para alcanzar sus objetivos.

      `,
      cta: "Contratar Asesoría",
      link: "https://mpago.la/1Bgc6i5"
    }
  ];




export const DetalleCotizacion = () => {

  

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  const { id } = useParams();
  const navigate = useNavigate();
  const plan = pricingPlans.find(p => p.id === id);

  const botonRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (botonRef.current) {
      botonRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, []);

  const sendEmailNotification = async (clientData) => {
    try {
      const featuresHTML = plan.features.map(f => `<li style="margin-bottom: 5px;">${f.trim()}</li>`).join('');

      const templateParams = {
        plan_title: plan.title,
        plan_price: plan.price.toLocaleString(),
        plan_features: featuresHTML,
        client_name: clientData.nombre,
        email: clientData.email,
        support_email: 'ventas@toledoconsultora.com',
        to_email: clientData.email,
        current_year: new Date().getFullYear()
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_ADMIN,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );

      Swal.fire({
        icon: 'success',
        title: '¡Confirmación enviada!',
        html: `Hemos enviado los detalles de tu cotización a <strong>${clientData.email}</strong>. <br/>Redirigiendo a MercadoPago...`,
        confirmButtonColor: '#3085d6',
        timer: 3000,
        timerProgressBar: true,
        didClose: () => {
          window.location.href = plan.link;
        }
      });
    } catch (error) {
      console.error('Error al enviar el email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al enviar la confirmación. Serás redirigido a MercadoPago igualmente.',
        confirmButtonColor: '#d33',
        didClose: () => {
          window.location.href = plan.link;
        }
      });
    }
  };

  const handleContratar = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Dejanos tus datos para comenzar',
      html:
        `<div style="display: flex; flex-direction: column; gap: 10px;">` +
        `<input id="swal-input1" class="swal2-input" placeholder="Nombre del negocio" />` +
        `<input id="swal-input2" class="swal2-input" placeholder="Correo electrónico" type="email" />` +
        `<input id="swal-input3" class="swal2-input" placeholder="WhatsApp (opcional)" type="tel" />` +
        `</div>`,
      confirmButtonText: 'Confirmar y continuar',
      confirmButtonColor: '#101629',
      focusConfirm: false,
      preConfirm: () => {
        const nombre = document.getElementById('swal-input1').value.trim();
        const email = document.getElementById('swal-input2').value.trim();
        const telefono = document.getElementById('swal-input3').value.trim();

        if (!nombre || !email) {
          Swal.showValidationMessage('Nombre y correo electrónico son obligatorios');
          return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          Swal.showValidationMessage('Por favor ingresa un email válido');
          return false;
        }

        return { nombre, email, telefono };
      },
      backdrop: true,
      showClass: {
        popup: 'swal2-show animate__animated animate__fadeInDown'
      },
      customClass: {
        popup: 'swal2-popup-custom'
      }
    });

    if (formValues) {
      setProcessing(true);
      localStorage.setItem('clienteInfo', JSON.stringify({
        ...formValues,
        plan: plan.title,
        price: plan.price,
        date: new Date().toISOString()
      }));

      await sendEmailNotification(formValues);
      setProcessing(false);
    }
  };

  if (!plan) {
    return (
 <>
        <Helmet>
          <title>No encontrado | Toledo Consultora</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="pricing-section">
          <div className="pricing-container">
            <h2 className="section-header">No se encontró la cotización</h2>
            <button className="pricing-button" onClick={() => navigate(-1)}>Volver</button>
          </div>
        </div>
      </>


    );
  }

  if (loading || processing) {
    return (
      <div className="loading-overlay">
        <ClipLoader color="#101629" size={60} />
      </div>
    );
  }

  return (

    <>
<Helmet>
  <title>{plan.title} | Toledo Consultora</title>
  <meta name="description" content={plan.description} />
  <link rel="canonical" href={`https://toledoconsultora.com/detalle/${plan.id}`} />

  {/* SEO social */}
  <meta property="og:title" content={`${plan.title} | Toledo Consultora`} />
  <meta property="og:description" content={plan.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://toledoconsultora.com/detalle/${plan.id}`} />
  <meta property="og:image" content="https://toledoconsultora.com/logo.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={`${plan.title} | Toledo Consultora`} />
  <meta name="twitter:description" content={plan.description} />
  <meta name="twitter:image" content="https://toledoconsultora.com/logo.png" />
</Helmet>


    <section className="pricing-section">
      


      <div className="pricing-container">
        <div className="card-header">
          <h1>DETALLES DEL SERVICIO A CONTRATAR: </h1>
          <h2>Servicio: {plan.description} Precio en Pesos {plan.price} Toledo Consultora </h2>
        </div>

        <div className="pricing-grid">
          <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            <div className="card-header">
              <h3>{plan.title}</h3>
              <h4>{plan.detail} </h4>
              <div className="price">{plan.price}<span> / único</span></div>
            </div>
            <div className="card-body">
              <ul className="feature-list">
                {plan.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button ref={botonRef} className="pricing-button" onClick={handleContratar}>
                Contratar
              </button>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <PartnerLogos />

      <button className="pricing-button" onClick={handleContratar}>
        Contratar
      </button>

<div style={{textAlign: "center"}}>
            <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>
            <p>{" "}</p>
                <Link to="/politica-de-privacidad">Política de Privacidad</Link>
                <p>{" "}</p>
                </div>
              


    </section>
    </>
  );
};
