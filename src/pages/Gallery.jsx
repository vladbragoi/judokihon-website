import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ZoomIn } from 'lucide-react';
import ImageLightbox from '../components/ImageLightbox';
import { Helmet } from 'react-helmet-async';
import data from '../data/gallery.json';
import './Pages.css';

const ScrollSection = ({ children, className = '' }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div ref={ref} className={`reveal-section ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <div className="page-container">
      <Helmet>
        <title>Galleria - Judo Kihon Bovolone</title>
        <meta
          name="description"
          content="Foto della palestra, degli eventi e dei ragazzi dell'A.S.D. Judo Kihon Bovolone."
        />
      </Helmet>
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
            {data.images.map((img, idx) => (
              <div key={idx} className="gallery-item" onClick={() => setLightboxIndex(idx)}>
                <img src={`${import.meta.env.BASE_URL}${img.src}`} alt={img.alt} loading="lazy" />
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
          images={data.images.map((img) => ({
            ...img,
            src: `${import.meta.env.BASE_URL}${img.src}`,
          }))}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
        />
      )}
    </div>
  );
};

export default Gallery;
