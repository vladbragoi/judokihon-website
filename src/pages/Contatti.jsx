import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
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

const Contatti = () => {
  return (
    <div className="page-container">
      <section className="page-header page-header--dark">
        <div className="page-header-pattern"></div>
        <div className="page-header-content">
          <span className="page-header-kanji">連絡</span>
          <h1>Contatti</h1>
          <p>Dove siamo e come trovarci</p>
        </div>
      </section>

      <section className="section">
        <ScrollSection>
          <h2 className="section-title brush-stroke-heading">Rimaniamo in Contatto</h2>
          <p className="section-subtitle">Per qualunque segnalazione, avviso o informazione non esitare a contattarci.</p>
        </ScrollSection>

        <div className="contatti-layout">
          <div className="contatti-info">
            <ScrollSection delay={0}>
              <div className="info-card">
                <div className="info-card-icon"><MapPin size={28} /></div>
                <div>
                  <h3>Dove Trovarci</h3>
                  <p><strong>JUDO KIHON — BOVOLONE</strong></p>
                  <p>Palestra I° Piano</p>
                  <p>Via Piave, 1</p>
                  <p>37051 Bovolone (VR)</p>
                </div>
              </div>
            </ScrollSection>

            <ScrollSection delay={100}>
              <div className="info-card">
                <div className="info-card-icon"><Phone size={28} /></div>
                <div>
                  <h3>Telefoni</h3>
                  <p><strong>Marco Bertolotto:</strong> (+39) 340 940 7514</p>
                  <p><strong>Paolino Tarocco:</strong> (+39) 339 874 1853</p>
                </div>
              </div>
            </ScrollSection>

            <ScrollSection delay={200}>
              <div className="info-card">
                <div className="info-card-icon"><Mail size={28} /></div>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:info@judokihon.it" className="text-link">info@judokihon.it</a></p>
                </div>
              </div>
            </ScrollSection>

            <ScrollSection delay={300}>
              <div className="info-card">
                <div className="info-card-icon"><ExternalLink size={28} /></div>
                <div>
                  <h3>Link Utili</h3>
                  <p><a href="http://www.fijlkam.it/" target="_blank" rel="noopener noreferrer" className="text-link">www.fijlkam.it</a></p>
                  <p><a href="http://www.judofijlkam-veneto.it/" target="_blank" rel="noopener noreferrer" className="text-link">www.judofijlkam-veneto.it</a></p>
                </div>
              </div>
            </ScrollSection>
          </div>

          <ScrollSection className="contatti-map">
            <div className="map-container">
              <iframe
                width="100%"
                height="500"
                frameBorder="0"
                style={{border: 0, borderRadius: '8px'}}
                src="https://maps.google.it/maps?f=q&amp;source=s_q&amp;hl=it&amp;geocode=&amp;q=Via+Piave,+1,+Bovolone,+VR&amp;aq=0&amp;oq=via+piave+1&amp;sll=45.258762,11.116924&amp;sspn=0.001078,0.002642&amp;ie=UTF8&amp;hq=&amp;hnear=Via+Piave,+1,+Bovolone,+Verona,+Veneto&amp;ll=45.258799,11.117153&amp;spn=0.008564,0.021136&amp;t=m&amp;z=14&amp;output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </ScrollSection>
        </div>
      </section>
    </div>
  );
};

export default Contatti;
