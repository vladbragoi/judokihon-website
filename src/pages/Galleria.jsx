import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ZoomIn } from 'lucide-react';
import ImageLightbox from '../components/ImageLightbox';
import './Pages.css';

const ScrollSection = ({ children, className = '' }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div ref={ref} className={`reveal-section ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const images = [
  { src: `${import.meta.env.BASE_URL}images/staff tecnico.JPG`, alt: 'Staff Tecnico' },
  { src: `${import.meta.env.BASE_URL}images/16-12-11.jpg`, alt: '16 dicembre 2011' },
  { src: `${import.meta.env.BASE_URL}images/anno_1970.jpg`, alt: 'Anno 1970' },
  { src: `${import.meta.env.BASE_URL}fotogalleria/images/16-12-11 tutti.jpg`, alt: '16 dicembre 2011 — Maestri e Allievi' },
  { src: `${import.meta.env.BASE_URL}fotogalleria/images/HJUDO 011.jpg`, alt: 'I nostri ragazzi' },
  { src: `${import.meta.env.BASE_URL}fotogalleria/images/HJUDO 003.jpg`, alt: 'Allenamento in palestra' },
  { src: `${import.meta.env.BASE_URL}fotogalleria/images/HJUDO 005.jpg`, alt: 'Tecnica Judo' },
  { src: `${import.meta.env.BASE_URL}fotogalleria/images/Gustavo, Paolino e Giancarlo.jpg`, alt: 'G. Zocca, G. Salardi e P. Tarocco' },
  { src: `${import.meta.env.BASE_URL}images/maestri_storici.JPG`, alt: 'Maestri Storici (C. Croceri, C. Barioli, G. Salardi, G. Tomelleri)' },
  { src: `${import.meta.env.BASE_URL}images/JUD PAL BOV 027.jpg`, alt: 'Lo staff' },
  { src: `${import.meta.env.BASE_URL}fotogalleria/images/tatami.jpg`, alt: 'Tatami' },
  { src: `${import.meta.env.BASE_URL}fotogalleria/images/palestra.jpg`, alt: 'Palestra' },
];

const Galleria = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <div className="page-container">
      <section className="page-header page-header--red">
        <div className="page-header-pattern"></div>
        <div className="page-header-content">
          <span className="page-header-kanji">写真</span>
          <h1>Galleria</h1>
          <p>Le foto degli eventi e della nostra palestra</p>
        </div>
      </section>

      <section className="section">
        <ScrollSection>
          <div className="gallery-masonry">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="gallery-item"
                onClick={() => setLightboxIndex(idx)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <ZoomIn size={28} />
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollSection>
      </section>

      {lightboxIndex >= 0 && (
        <ImageLightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
        />
      )}
    </div>
  );
};

export default Galleria;
