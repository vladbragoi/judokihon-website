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

  const rejectCookies = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) {
    return (
      <button 
        className="privacy-widget-btn" 
        onClick={() => setIsVisible(true)}
        title="Gestisci preferenze cookie"
        aria-label="Gestisci preferenze cookie"
      >
        🛡️
      </button>
    );
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Questo sito utilizza i cookie per migliorare servizi e l'esperienza dei lettori. Puoi scegliere di accettare tutti i cookie o rifiutare quelli non essenziali.
          <Link to="/privacy-policy" className="cookie-link">
            Maggiori Informazioni
          </Link>
        </p>
        <div className="cookie-actions">
          <button onClick={rejectCookies} className="btn-primary cookie-btn">
            Rifiuta
          </button>
          <button onClick={acceptCookies} className="btn-primary cookie-btn">
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
