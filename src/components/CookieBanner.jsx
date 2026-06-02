import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Questo sito utilizza i cookie per migliorare servizi e l'esperienza dei lettori.
          Se decidi di continuare la navigazione consideriamo che accetti il loro uso.
          <Link to="/privacy-policy" className="cookie-link">Maggiori Informazioni</Link>
        </p>
        <button onClick={acceptCookies} className="btn-primary cookie-btn">Accetta e Chiudi</button>
      </div>
    </div>
  );
};

export default CookieBanner;
