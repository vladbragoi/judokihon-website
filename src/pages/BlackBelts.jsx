import React, { useState, useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import data from '../data/blackBelts.json';
import './Pages.css';

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

const VIDEOS_PER_PAGE = 3;

const BlackBelts = () => {
  const [videoPage, setVideoPage] = useState(0);

  const totalPages = Math.ceil(data.allVideos.length / VIDEOS_PER_PAGE);
  const visibleVideos = useMemo(() => {
    const start = videoPage * VIDEOS_PER_PAGE;
    return data.allVideos.slice(start, start + VIDEOS_PER_PAGE);
  }, [videoPage]);

  return (
    <div className="page-container">
      <Helmet>
        <title>Cinture Nere - Judo Kihon Bovolone</title>
        <meta
          name="description"
          content="L'albo d'onore delle cinture nere dell'A.S.D. Judo Kihon Bovolone e i video dei passaggi di grado."
        />
      </Helmet>
      <section className="page-header page-header--dark">
        <div className="page-header-pattern"></div>
        <div className="page-header-content">
          <span className="page-header-kanji">黒帯</span>
          <h1>Cinture Nere</h1>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', color: 'rgba(255,255,255,0.9)' }}>
            <p style={{ marginBottom: '1.2rem', fontSize: '1.15rem', lineHeight: '1.6' }}>
              La cintura nera rappresenta un traguardo fondamentale nel percorso di ogni judoka, il culmine di anni di dedizione e disciplina sul tatami. Per il suo conseguimento e per l'acquisizione dei Dan successivi, il{' '}
              <a href="https://www.fijlkam.it/judo/attivita-didattica/graduazione/graduazione-regionale.html" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'underline', fontWeight: '500' }}>
                programma d'esame ufficiale FIJLKAM
              </a>
              {' '}prevede come elemento obbligatorio lo studio dei <strong>Kata</strong>.
            </p>
            <p style={{ margin: '0', fontSize: '1.15rem', lineHeight: '1.6' }}>
              Letteralmente traducibili come "forme", i Kata non sono semplici coreografie ma sequenze preordinate che tramandano la grammatica, la tecnica e i princìpi originari del combattimento. In questa pagina celebriamo l'Albo d'Onore di chi ha raggiunto questo ambito traguardo nel nostro Dojo.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <ScrollSection>
          <h2 className="section-title brush-stroke-heading">Albo d'Onore</h2>
          <p className="section-subtitle">
            La nostra palestra ha formato diverse cinture nere nel corso degli anni. Un traguardo di
            disciplina, impegno e passione.
          </p>
        </ScrollSection>

        <div className="black-belts-grid">
          {data.blackBelts.map((athlete, idx) => (
            <ScrollSection key={idx} delay={(idx % 4) * 80}>
              <div className="diploma-card">
                {/* Angoli decorativi */}
                <div className="diploma-corner diploma-corner--tl"></div>
                <div className="diploma-corner diploma-corner--tr"></div>
                <div className="diploma-corner diploma-corner--bl"></div>
                <div className="diploma-corner diploma-corner--br"></div>

                {/* Header con loghi */}
                <div className="diploma-logos">
                  <img
                    src={`${import.meta.env.BASE_URL}images/logo-coni.svg`}
                    alt="CONI"
                    className="diploma-logo-small"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}images/fijlkam.png`}
                    alt="FIJLKAM"
                    className="diploma-logo-main"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}images/logo-small.png`}
                    alt="Judo Kihon"
                    className="diploma-logo-small"
                  />
                </div>

                <div className="diploma-body">
                  <p className="diploma-label">Cintura Nera</p>
                  <p className="diploma-dan">{athlete.dan}</p>
                  <p className="diploma-nome">{athlete.name}</p>
                  <div className="diploma-divider"></div>
                  <p className="diploma-ruolo">{athlete.role}</p>
                  <p className="diploma-anno">Decorrenza {athlete.year}</p>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <ScrollSection>
          <h2 className="section-title brush-stroke-heading" style={{ color: '#fff' }}>
            Video degli Esami
          </h2>
          <p
            className="section-subtitle"
            style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '3rem' }}
          >
            I momenti indimenticabili in cui i nostri atleti hanno sostenuto l'esame per la cintura
            nera, dimostrando tecnica e dedizione.
          </p>
        </ScrollSection>

        <div
          className="video-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {visibleVideos.map((video) => (
            <ScrollSection key={video.id} style={{ height: '100%' }}>
              <div
                className="video-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  background: 'rgba(0,0,0,0.3)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <p
                  className="video-label"
                  style={{
                    color: '#fff',
                    fontSize: '1.1rem',
                    marginBottom: '1rem',
                    fontWeight: '500',
                    flexGrow: 0,
                  }}
                >
                  {video.title}
                </p>
                <div
                  className="video-wrapper"
                  style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                    style={{ flexGrow: 1 }}
                  ></iframe>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
        {totalPages > 1 && (
          <div
            className="video-pagination"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '3rem',
            }}
          >
            <button
              onClick={() => setVideoPage((p) => Math.max(0, p - 1))}
              disabled={videoPage === 0}
              className="video-page-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'var(--accent-color)',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                opacity: videoPage === 0 ? 0.5 : 1,
              }}
            >
              <ChevronUp size={18} style={{ transform: 'rotate(-90deg)' }} /> Precedenti
            </button>
            <span className="video-page-info" style={{ color: '#fff' }}>
              {videoPage + 1} / {totalPages}
            </span>
            <button
              onClick={() => setVideoPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={videoPage >= totalPages - 1}
              className="video-page-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'var(--accent-color)',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                opacity: videoPage >= totalPages - 1 ? 0.5 : 1,
              }}
            >
              Successivi <ChevronDown size={18} style={{ transform: 'rotate(-90deg)' }} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlackBelts;
