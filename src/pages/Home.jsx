import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Helmet } from 'react-helmet-async';
import './Home.css';
import { BookOpen, Users, Clock, Info, ChevronDown, ArrowRight } from 'lucide-react';
import ImageLightbox from '../components/ImageLightbox';

const ScrollSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-section ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const [lightboxImg, setLightboxImg] = useState(null);
  return (
    <div className="home-page">
      <Helmet>
        <title>Home - Judo Kihon Bovolone</title>
        <meta
          name="description"
          content="A.S.D. Judo Kihon Bovolone. Disciplina, Rispetto, Tradizione. Scopri i nostri corsi di Judo per bambini, ragazzi e adulti."
        />
      </Helmet>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/dojo.webp')` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        <div className="hero-content animate-fade-in">
          <p className="hero-kanji">柔道 基本</p>
          <h1 className="hero-title">
            A.S.D. Judo Kihon
            <br />
            Bovolone
          </h1>
          <div className="hero-divider">
            <span></span>
            <span className="hero-circle"></span>
            <span></span>
          </div>
          <p className="hero-subtitle">Disciplina · Rispetto · Tradizione</p>
          <div className="hero-quote">
            <p>
              "Sul tatami, ci torni sempre... perché lì è il tuo posto...
              <br />
              torni perché completi te stesso...
              <br />
              torni perché hai bisogno di sbattere la faccia contro i tuoi limiti...
              <br />
              torni perché le sensazioni che suscita il tatami è adrenalina pura e fanno parte di
              te...
              <br />
              torni perché anche se non ci fossero motivi razionali... tu torneresti lo stesso."
            </p>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scorri</span>
          <ChevronDown size={20} />
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
              fill="var(--bg-primary)"
            />
          </svg>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="section quick-nav-section">
        <ScrollSection>
          <h2 className="section-title brush-stroke-heading">Esplora il Nostro Mondo</h2>
        </ScrollSection>

        <div className="quick-nav-grid">
          <ScrollSection delay={0}>
            <Link to="/il-dojo" className="quick-nav-card">
              <div className="card-accent"></div>
              <div className="card-icon">
                <Users size={28} />
              </div>
              <h3>Il Dojo</h3>
              <p>Scopri chi siamo, la nostra struttura e la nostra filosofia marziale.</p>
              <span className="card-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
          </ScrollSection>

          <ScrollSection delay={100}>
            <Link to="/orari-corsi" className="quick-nav-card">
              <div className="card-accent"></div>
              <div className="card-icon">
                <Clock size={28} />
              </div>
              <h3>Orari e Corsi</h3>
              <p>Tutti gli orari per bambini, ragazzi e adulti. Inizia il tuo percorso oggi.</p>
              <span className="card-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
          </ScrollSection>

          <ScrollSection delay={200}>
            <Link
              to="/cinture-nere"
              className="quick-nav-card"
            >
              <div className="card-accent"></div>
              <div className="card-icon">
                <BookOpen size={28} />
              </div>
              <h3>I Dan</h3>
              <p>L'Albo d'Onore delle nostre cinture nere e il programma d'esame per conseguirli.</p>
              <span className="card-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
          </ScrollSection>

          <ScrollSection delay={300}>
            <a
              href="http://it.wikipedia.org/wiki/Judo"
              target="_blank"
              rel="noreferrer"
              className="quick-nav-card"
            >
              <div className="card-accent"></div>
              <div className="card-icon">
                <Info size={28} />
              </div>
              <h3>Storia del Judo</h3>
              <p>Cos'è il Judo, dove nasce e chi è il Maestro fondatore Jigoro Kano.</p>
              <span className="card-arrow">
                <ArrowRight size={16} />
              </span>
            </a>
          </ScrollSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="cta-pattern"></div>
        <ScrollSection className="cta-content">
          <h2>Inizia il Tuo Percorso</h2>
          <p>
            Il Judo non è solo uno sport. È una via per il miglioramento fisico e morale,
            accessibile a tutte le età.
          </p>
          <div className="cta-buttons">
            <Link to="/orari-corsi" className="btn-primary">
              Scopri i Corsi
            </Link>
            <Link to="/contatti" className="btn-secondary">
              Contattaci
            </Link>
          </div>
        </ScrollSection>
      </section>

      {/* Welcome / About Section */}
      <section className="section welcome-section">
        <ScrollSection>
          <h2 className="section-title brush-stroke-heading">Chi Siamo</h2>
        </ScrollSection>
        <ScrollSection>
          <div className="welcome-content">
            <div className="welcome-text">
              <h3 className="welcome-heading">Benvenuti al Judo Kihon</h3>
              <p>
                La nostra associazione sportiva dilettantistica si impegna a diffondere i principi e
                i valori del Judo tradizionale giapponese. Non solo uno sport, ma una via per il
                miglioramento fisico e morale, accessibile a tutte le età.
              </p>
              <Link to="/il-dojo" className="welcome-link">
                Scopri la nostra storia <ArrowRight size={16} />
              </Link>
            </div>
            <div className="welcome-image-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                className="welcome-image-wrapper"
                onClick={() => setLightboxImg(`${import.meta.env.BASE_URL}images/jigoro-kano.webp`)}
                style={{ cursor: 'zoom-in', width: '100%' }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/jigoro-kano.webp`}
                  alt="Jigoro Kano - Fondatore del Judo"
                  className="welcome-image"
                />
                <div className="welcome-image-frame"></div>
              </div>
              <p className="welcome-caption">Jigoro Kano (1860 - 1938) – Il fondatore del Judo</p>
            </div>
          </div>
        </ScrollSection>
      </section>

      {lightboxImg && (
        <ImageLightbox
          images={[{ src: lightboxImg, alt: 'Jigoro Kano - Fondatore del Judo' }]}
          startIndex={0}
          onClose={() => setLightboxImg(null)}
        />
      )}
    </div>
  );
};

export default Home;
