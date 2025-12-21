import { Helmet } from "react-helmet";

// Custom Hook para aplicar SEO con Helmet
export const useSEO = (seoData) => {
  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      {seoData.canonical && <link rel="canonical" href={seoData.canonical} />}
      
      {/* Open Graph para Redes Sociales */}
      <meta property="og:title" content={seoData.ogTitle || seoData.title} />
      <meta property="og:description" content={seoData.ogDescription || seoData.description} />
      {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
      <meta property="og:url" content={seoData.canonical || "https://toledoconsultora.com"} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_AR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.ogTitle || seoData.title} />
      <meta name="twitter:description" content={seoData.ogDescription || seoData.description} />
      {seoData.ogImage && <meta name="twitter:image" content={seoData.ogImage} />}
      
      {/* Local SEO */}
      <meta name="geo.placename" content="Toledo, Argentina" />
      <meta name="geo.region" content="AR" />
      <meta name="ICBM" content="-34.9011, -56.1645" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Toledo Consultora IT" />
      
      {/* Structured Data for Local Business */}
      {seoData.schema && (
        <script type="application/ld+json">
          {JSON.stringify(seoData.schema)}
        </script>
      )}
    </Helmet>
  );
};

// Componente HOC para aplicar SEO
export const withSEO = (Component, seoData) => {
  return (props) => {
    return (
      <>
        {useSEO(seoData)}
        <Component {...props} />
      </>
    );
  };
};
