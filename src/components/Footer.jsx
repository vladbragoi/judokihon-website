import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import './Footer.css';

const FacebookIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,35 L1440,60 L0,60 Z" fill="var(--bg-dark, #1a1a1a)" />
        </svg>
      </div>

      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo-text">
              <span className="footer-logo-title">Judo Kihon Bovolone</span>
              <span className="footer-tagline">Associazione Sportiva Dilettantistica</span>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/judokihon" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navigazione</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/il-dojo">Il Dojo</Link></li>
              <li><Link to="/orari-corsi">I Corsi</Link></li>
              <li><Link to="/galleria">Gallery</Link></li>
              <li><Link to="/contatti">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contacts">
              <li><MapPin size={16} /> Via Piave, 1 — 37051 Bovolone (VR)</li>
              <li><Mail size={16} /> <a href="mailto:info@judokihon.it">info@judokihon.it</a></li>
              <li><Phone size={16} /> Marco: (+39) 340 940 7514</li>
              <li><Phone size={16} /> Paolino: (+39) 339 874 1853</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Link Utili</h4>
            <ul className="footer-links">
              <li><a href="http://www.fijlkam.it/" target="_blank" rel="noopener noreferrer">FIJLKAM <ExternalLink size={12} /></a></li>
              <li><a href="http://it.wikipedia.org/wiki/Judo" target="_blank" rel="noopener noreferrer">Storia del Judo <ExternalLink size={12} /></a></li>
              <li><a href="http://it.wikipedia.org/wiki/Kata_del_judo" target="_blank" rel="noopener noreferrer">I Kata <ExternalLink size={12} /></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            &copy; {currentYear} Judo Kihon Bovolone. Tutti i diritti riservati.
            {' | '}
            <Link to="/privacy-policy" className="privacy-link" style={{ color: 'var(--accent-color)' }}>Privacy Policy & Cookie Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
