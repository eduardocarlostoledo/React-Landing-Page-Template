const fs = require("fs");
const path = require("path");
const SeoLandingPages=require ("./src/components/SeoLandingPages");

const baseUrl = "https://toledoconsultora.com";

const staticPaths = [
  "",
  "/servicios-profesionales",
  "/asesoramiento-profesional",
  "/acerca-de-nosotros",
  "/nuestros-servicios",
  "/nuestros-proyectos",
  "/gracias-por-su-compra",
  "/indice-sitemap",
  "/indice-del-sitio",  
  "/terminos-y-condiciones",
  "/politica-de-privacidad",
  "/contacto",
  "/about-comprar-dominio",
  "/about-google-ads",
  "/about-reseñas",
 "/about-posicionamiento",
      "/about-google-business",
     "/about-optimizacion",
    "/about-redes-sociales",
    "/about-landing-page",
];

const dynamicPaths = SeoLandingPages.map((p) => `/servicios-consultora-toledo/${p.id}`);

const urls = [...staticPaths, ...dynamicPaths].map((url) => {
  return `<url><loc>${baseUrl}${url}</loc></url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);
console.log("✅ Sitemap actualizado en /public/sitemap.xml");
