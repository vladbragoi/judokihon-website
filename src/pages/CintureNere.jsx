import React, { useState, useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown, ChevronUp } from 'lucide-react';
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

const cintureNere = [
  // Maestri fondatori
  { nome: 'Paolino Tarocco', dan: '6° Dan', anno: 2021, ruolo: 'Maestro — Fondatore' },
  { nome: 'Paolino Tarocco', dan: '5° Dan', anno: 2007, ruolo: 'Maestro — Fondatore' },
  
  { nome: 'Marco Bertolotto', dan: '5° Dan', anno: 2015, ruolo: 'Maestro — Fondatore' },
  { nome: 'Marco Bertolotto', dan: '4° Dan', anno: 2008, ruolo: 'Maestro — Fondatore' },
  
  // Allievi (ordinati per grado decrescente)
  { nome: 'Thomas Marangoni', dan: '3° Dan', anno: 2015, ruolo: 'Allenatore' },
  
  { nome: 'Vladislav Bragoi', dan: '2° Dan', anno: 2019, ruolo: 'Atleta' },
  { nome: 'Giovanni Borgogna', dan: '2° Dan', anno: 2016, ruolo: 'Aspirante Allenatore' },
  { nome: 'Federico Chiaramonte', dan: '2° Dan', anno: 2015, ruolo: 'Atleta' },
  
  { nome: 'Kevin De Paoli', dan: '1° Dan', anno: 2016, ruolo: 'Atleta' },
  { nome: 'Vladislav Bragoi', dan: '1° Dan', anno: 2015, ruolo: 'Atleta' },
  { nome: 'Giovanni Borgogna', dan: '1° Dan', anno: 2015, ruolo: 'Aspirante Allenatore' },
  { nome: 'Federico Chiaramonte', dan: '1° Dan', anno: 2014, ruolo: 'Atleta' },
];

const allVideos = [
  { id: 'R9PIRonRuUA', title: 'Thomas: 3° Dan - 2015' },
  { id: '1-uHxWeo6wc', title: 'Giovanni: 2° Dan - 2015' },
  { id: 'G6Us6uQGuFE', title: 'Kevin: 1° Dan - 2015' },
  { id: 'lXxwRGTcPNY', title: 'Federico: 2° Dan - 2014' },
  { id: 'VpfT3guzXeY', title: 'Vlad: 1° Dan - 2014' },
];

const VIDEOS_PER_PAGE = 3;

const CintureNere = () => {
  const [videoPage, setVideoPage] = useState(0);

  const totalPages = Math.ceil(allVideos.length / VIDEOS_PER_PAGE);
  const visibleVideos = useMemo(() => {
    const start = videoPage * VIDEOS_PER_PAGE;
    return allVideos.slice(start, start + VIDEOS_PER_PAGE);
  }, [videoPage]);

  return (
    <div className="page-container">
      <section className="page-header page-header--dark">
        <div className="page-header-pattern"></div>
        <div className="page-header-content">
          <span className="page-header-kanji">黒帯</span>
          <h1>Cinture Nere</h1>
          <p>I judoka che hanno raggiunto il traguardo della cintura nera nel nostro Dojo</p>
        </div>
      </section>

      <section className="section">
        <ScrollSection>
          <h2 className="section-title brush-stroke-heading">Albo d'Onore</h2>
          <p className="section-subtitle">
            La nostra palestra ha formato diverse cinture nere nel corso degli anni.
            Un traguardo di disciplina, impegno e passione.
          </p>
        </ScrollSection>

        <div className="cinture-grid">
          {cintureNere.map((judoka, idx) => (
            <ScrollSection key={idx} delay={(idx % 4) * 80}>
              <div className="diploma-card">
                {/* Angoli decorativi */}
                <div className="diploma-corner diploma-corner--tl"></div>
                <div className="diploma-corner diploma-corner--tr"></div>
                <div className="diploma-corner diploma-corner--bl"></div>
                <div className="diploma-corner diploma-corner--br"></div>

                {/* Header con loghi */}
                <div className="diploma-logos">
                  <img src={`${import.meta.env.BASE_URL}images/logo-coni.svg`} alt="CONI" className="diploma-logo-small" />
                  <img src={`${import.meta.env.BASE_URL}images/fijlkam.png`} alt="FIJLKAM" className="diploma-logo-main" />
                  <img src={`${import.meta.env.BASE_URL}images/logo-small.png`} alt="Judo Kihon" className="diploma-logo-small" />
                </div>

                <div className="diploma-body">
                  <p className="diploma-label">Cintura Nera</p>
                  <p className="diploma-dan">{judoka.dan}</p>
                  <p className="diploma-nome">{judoka.nome}</p>
                  <div className="diploma-divider"></div>
                  <p className="diploma-ruolo">{judoka.ruolo}</p>
                  <p className="diploma-anno">Decorrenza {judoka.anno}</p>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <ScrollSection>
          <h2 className="section-title brush-stroke-heading" style={{ color: '#fff' }}>Video degli Esami</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '3rem' }}>
            I momenti indimenticabili in cui i nostri atleti hanno sostenuto l'esame per la cintura nera.
          </p>
        </ScrollSection>

        <div className="video-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {visibleVideos.map((video) => (
            <ScrollSection key={video.id} style={{ height: '100%' }}>
              <div className="video-item" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="video-label" style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: '500', flexGrow: 0 }}>{video.title}</p>
                <div className="video-wrapper" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
          <div className="video-pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '3rem' }}>
            <button
              onClick={() => setVideoPage((p) => Math.max(0, p - 1))}
              disabled={videoPage === 0}
              className="video-page-btn"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--accent-color)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', opacity: videoPage === 0 ? 0.5 : 1 }}
            >
              <ChevronUp size={18} style={{ transform: 'rotate(-90deg)' }} /> Precedenti
            </button>
            <span className="video-page-info" style={{ color: '#fff' }}>{videoPage + 1} / {totalPages}</span>
            <button
              onClick={() => setVideoPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={videoPage >= totalPages - 1}
              className="video-page-btn"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--accent-color)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', opacity: videoPage >= totalPages - 1 ? 0.5 : 1 }}
            >
              Successivi <ChevronDown size={18} style={{ transform: 'rotate(-90deg)' }} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default CintureNere;
