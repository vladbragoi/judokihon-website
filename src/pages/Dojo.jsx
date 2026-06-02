import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ImageLightbox from '../components/ImageLightbox';
import { Helmet } from 'react-helmet-async';
import data from '../data/dojo.json';
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

const Dojo = () => {
  const [lightbox, setLightbox] = useState(null); // { images, index }

  const openLightbox = (images, index) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);

  return (
    <div className="page-container">
      <Helmet>
        <title>Il Dojo - Judo Kihon Bovolone</title>
        <meta
          name="description"
          content="Scopri la storia dell'A.S.D. Judo Kihon Bovolone, i nostri maestri e le foto della nostra palestra e del tatami."
        />
      </Helmet>
      <section className="page-header page-header--dark">
        <div className="page-header-pattern"></div>
        <div className="page-header-content">
          <span className="page-header-kanji">道場</span>
          <h1>Il Dojo</h1>
          <p>Dov'è nata l'idea e chi sono i creatori</p>
        </div>
      </section>

      <section className="section">
        <ScrollSection>
          <h2 className="section-title brush-stroke-heading">I Nostri Maestri</h2>
        </ScrollSection>

        <div className="instructors-grid">
          <ScrollSection delay={0}>
            <div
              className="instructor-card"
              onClick={() => openLightbox(data.instructorsImages, 0)}
              style={{ cursor: 'zoom-in' }}
            >
              <div className="instructor-img-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}${data.instructorsImages[0].src}`}
                  alt={data.instructorsImages[0].alt}
                  className="instructor-img"
                />
              </div>
              <div className="instructor-info">
                <h3>Paolino Tarocco</h3>
                <p className="maestro-role">Maestro 5° Dan JUDO</p>
              </div>
            </div>
          </ScrollSection>

          <ScrollSection delay={150}>
            <div
              className="instructor-card"
              onClick={() => openLightbox(data.instructorsImages, 1)}
              style={{ cursor: 'zoom-in' }}
            >
              <div className="instructor-img-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}${data.instructorsImages[1].src}`}
                  alt={data.instructorsImages[1].alt}
                  className="instructor-img"
                />
              </div>
              <div className="instructor-info">
                <h3>Marco Bertolotto</h3>
                <p className="maestro-role">Maestro 5° Dan JUDO</p>
              </div>
            </div>
          </ScrollSection>

          <ScrollSection delay={300}>
            <div
              className="instructor-card"
              onClick={() => openLightbox(data.instructorsImages, 2)}
              style={{ cursor: 'zoom-in' }}
            >
              <div className="instructor-img-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}${data.instructorsImages[2].src}`}
                  alt={data.instructorsImages[2].alt}
                  className="instructor-img"
                />
              </div>
              <div className="instructor-info">
                <h3>Thomas e Giovanni</h3>
                <p className="maestro-role">Allenatore e Aspirante Allenatore</p>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      <section className="section-dark section">
        <ScrollSection className="storia-content">
          <h2 className="section-title brush-stroke-heading" style={{ color: '#fff' }}>
            La Nostra Storia
          </h2>
          <div className="text-content text-content--light">
            <p>
              La passione per il judo dei nostri maestri, Paolino Tarocco e Marco Bertolotto, inizia
              molti anni fa proprio a Bovolone.
            </p>
            <p>
              Paolino si accosta alla nostra arte marziale nel settembre del 1982; Marco inizia
              qualche anno più tardi, nel 1989. Ma il Dojo è lo stesso: si tratta della "mitica"
              palestra del maestro Sergio Bazzani, che da anni ormai, in Via Dante Alighieri,
              insegna questo sport a moltissimi ragazzi e ragazze.
            </p>
            <p>
              E' nella sua palestra che Paolino e Marco si preparano per sostenere l'esame per la
              cintura nera, conseguita da Paolino nel giugno 1989 e da Marco nel giugno 1996.
            </p>
            <p>
              Con il passare del tempo, e la costante collaborazione con il loro primo mentore,
              inizia la passione per la scuola, soprattutto nei confronti dei più piccoli. Paolino
              ottiene nel giugno 1998 la qualifica di allenatore che lo abilita all'insegnamento,
              qualifica che anche Marco consegue nel 2000. E matura così nei due amici il desiderio
              di aprire una propria palestra.
            </p>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link
                to="/cinture-nere"
                className="btn-primary"
                style={{ display: 'inline-flex', padding: '1rem 2rem', fontSize: '1.1rem' }}
              >
                Albo d'Onore delle Cinture Nere
              </Link>
            </div>
          </div>
        </ScrollSection>
      </section>

      <section className="section">
        <ScrollSection>
          <h2 className="section-title brush-stroke-heading">La Nostra Palestra</h2>
          <div className="images-grid">
            {data.gymImages.map((img, idx) => (
              <div
                key={idx}
                className="grid-img-wrapper"
                onClick={() => openLightbox(data.gymImages, idx)}
                style={{ cursor: 'zoom-in' }}
              >
                <img src={`${import.meta.env.BASE_URL}${img.src}`} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </ScrollSection>
      </section>

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Dojo;
