import React, { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageLightbox.css';

const ImageLightbox = ({ images, startIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <div className="img-lightbox" onClick={onClose}>
      <button className="img-lightbox-close" onClick={onClose} aria-label="Chiudi">
        <X size={28} />
      </button>
      {images.length > 1 && (
        <>
          <button className="img-lightbox-nav img-lightbox-prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Precedente">
            <ChevronLeft size={32} />
          </button>
          <button className="img-lightbox-nav img-lightbox-next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Successivo">
            <ChevronRight size={32} />
          </button>
        </>
      )}
      <div className="img-lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        {images[currentIndex].alt && <p className="img-lightbox-caption">{images[currentIndex].alt}</p>}
      </div>
      {images.length > 1 && (
        <div className="img-lightbox-counter">{currentIndex + 1} / {images.length}</div>
      )}
    </div>
  );
};

export default ImageLightbox;
