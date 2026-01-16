import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";

// Componente Hero con video de fondo, overlay y animación GSAP
export const HeroVideoBackground = ({
  videoSrc,
  poster,
  overlayGradient,
  children,
  className = ""
}) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Fade-in y parallax sutil con GSAP
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out" }
    );
    gsap.fromTo(
      contentRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <section className={`hero-video-bg ${className}`.trim()}>
      <video
        className="hero-video-bg__video"
        src={videoSrc}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ objectFit: "cover", width: "100vw", height: "150vh" }}
      />
      <div
        className="hero-video-bg__overlay"
        ref={overlayRef}
        style={{ background: overlayGradient }}
      />
      <div className="hero-video-bg__content" ref={contentRef}>
        {children}
      </div>
    </section>
  );
};

HeroVideoBackground.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  poster: PropTypes.string,
  overlayGradient: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};
