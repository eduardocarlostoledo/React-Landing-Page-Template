/**
 * ARTICULO TEMPLATE OPTIMIZADO
 * Componente reutilizable para todos los artículos de Toledo Consultora
 * 
 * Características:
 * - SEO completo (Helmet, Schema Markup, Meta tags)
 * - FAQs estructuradas
 * - Performance optimizado (lazy loading, code splitting)
 * - UX/UI consistente
 * - Accesibilidad WCAG
 * - Posicionamiento IA (OpenAI, Gemini, Bing, DeepSeek)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/about.css';

export const ArticleTemplate = ({
  // SEO Config
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  author = "Toledo Consultora IT",
  contentType = "article",
  readTime = "8 minutos",
  imageUrl,
  canonicalUrl,
  
  // Content
  heading,
  subheading,
  imageSrc,
  imageAlt,
  sections = [], // Array de { h4: string, content: string | Array<string> }
  closing,
  
  // FAQs
  faqs = [],
  
  // CTA
  ctaText = "Contá tu idea la llevamos a cabo",
  ctaHref = "https://wa.me/5493764221063",
  
  // Additional props
  className = "",
  customSchema = null
}) => {
  
  // Generate Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://toledoconsultora.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Toledo Consultora IT",
      "logo": {
        "@type": "ImageObject",
        "url": "https://toledoconsultora.com/logo.png"
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  };

  // Generate FAQ Schema
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Generate BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://toledoconsultora.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Artículos",
        "item": "https://toledoconsultora.com/indice-del-sitio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": heading,
        "item": canonicalUrl || window.location.href
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph (OG) - Para ChatGPT y Social Media */}
        <meta property="og:type" content={contentType} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={canonicalUrl || window.location.href} />
        <meta property="og:site_name" content="Toledo Consultora IT" />
        
        {/* Twitter Card - Para Bing y DeepSeek */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={imageUrl} />
        
        {/* AI-Friendly Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="theme-color" content="#00205b" />
        
        {/* Reading Time - Para IA */}
        <meta name="article:author" content={author} />
        <meta name="article:published_time" content={new Date().toISOString()} />
        <meta name="article:modified_time" content={new Date().toISOString()} />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {customSchema && <script type="application/ld+json">{JSON.stringify(customSchema)}</script>}
      </Helmet>

      {/* ARTICLE CONTENT */}
      <article id="about" className={`about-section ${className}`} itemScope itemType="https://schema.org/Article">
        <div className="about-container">
          
          {/* HEADER */}
          <div className="about-columns">
            
            {/* IMAGE SECTION */}
            <div className="about-image-wrapper">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="about-image"
                itemProp="image"
                loading="lazy"
              />
            </div>

            {/* TEXT SECTION */}
            <div className="about-text">
              {/* Hidden Schema Properties */}
              <meta itemProp="headline" content={title} />
              <meta itemProp="description" content={description} />
              <meta itemProp="author" content={author} />
              <meta itemProp="datePublished" content={new Date().toISOString()} />
              
              {/* Visible Content */}
              <h2 itemProp="name">{heading}</h2>
              <h3 className="article-subheading">{subheading}</h3>
              
              {/* Main Sections */}
              {sections.map((section, idx) => (
                <div key={idx} className="article-section">
                  <h4>{section.h4}</h4>
                  {Array.isArray(section.content) ? (
                    <ul>
                      {section.content.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          {typeof item === 'string' ? item : item.text || item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </div>
              ))}

              {/* Closing CTA */}
              {closing && (
                <div className="article-closing">
                  <p itemProp="articleBody">{closing}</p>
                </div>
              )}
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="article-cta-wrapper">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="article-cta-button"
              aria-label={ctaText}
            >
              {ctaText} <i className="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>

          {/* FAQs SECTION - Structured for SEO */}
          {faqs.length > 0 && (
            <div className="article-faqs-section">
              <h3>Preguntas Frecuentes</h3>
              <div className="faqs-container">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="faq-item">
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Microdata for Accessibility */}
        <div itemScope itemType="https://schema.org/Organization" style={{ display: 'none' }}>
          <span itemProp="name">Toledo Consultora IT</span>
          <link itemProp="url" href="https://toledoconsultora.com" />
          <span itemProp="email">ventas@toledoconsultora.com</span>
          <span itemProp="telephone">+54 3764221063</span>
        </div>
      </article>
    </>
  );
};

export default ArticleTemplate;
