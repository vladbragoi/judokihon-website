import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/il-dojo', label: 'Il Dojo' },
    { path: '/orari-corsi', label: 'I Corsi' },
    { path: '/galleria', label: 'Galleria' },
    { path: '/contatti', label: 'Contatti' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-link" aria-label="Torna alla home">
          <img
            src={`${import.meta.env.BASE_URL}images/logo-small.png`}
            alt="A.S.D. Judo Kihon Bovolone"
            className="logo"
          />
          <div className="logo-text">
            <span className="logo-title">Judo Kihon Bovolone</span>
            <span className="logo-subtitle">Associazione Sportiva Dilettantistica</span>
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Navigazione principale">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'nav-link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'hamburger--open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav--open' : ''}`}>
        <nav className="mobile-nav-inner">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'mobile-nav-link--active' : ''}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mobile-nav-subtitle">A.S.D. Judo Kihon Bovolone</p>
      </div>
    </header>
  );
};

export default Header;
