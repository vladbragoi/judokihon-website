import React, { useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FileText, Download, Calendar, Users as UsersIcon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
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

/** Calcola il primo lunedì di un dato mese/anno */
function getFirstMonday(year, month) {
  const d = new Date(year, month, 1);
  const day = d.getDay(); // 0=dom, 1=lun, ...
  const offset = day === 0 ? 1 : day === 1 ? 0 : 8 - day;
  d.setDate(1 + offset);
  return d;
}

/** Primo lunedì di settembre */
function getAdultiStartDate(year) {
  return getFirstMonday(year, 8); // mese 8 = settembre
}

/** Primo lunedì dopo il 15 settembre */
function getBambiniStartDate(year) {
  const d = new Date(year, 8, 16); // 16 settembre
  const day = d.getDay();
  const offset = day === 0 ? 1 : day === 1 ? 0 : 8 - day;
  d.setDate(16 + offset);
  return d;
}

function formatDate(d) {
  const giorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const mesi = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ];
  return `${giorni[d.getDay()]} ${d.getDate()} ${mesi[d.getMonth()]} ${d.getFullYear()}`;
}

const Schedule = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  // Da giugno in poi mostra il nuovo anno sportivo (che inizia a settembre)
  // Da settembre a maggio resta il corrente
  const sportYear = now.getMonth() < 5 ? currentYear - 1 : currentYear;

  const adultiDate = useMemo(() => formatDate(getAdultiStartDate(sportYear)), [sportYear]);
  const bambiniDate = useMemo(() => formatDate(getBambiniStartDate(sportYear)), [sportYear]);
  const annoMinIscrizione = sportYear - 6;
  const stagione = `${sportYear}-${sportYear + 1}`;

  return (
    <div className="page-container">
      <Helmet>
        <title>Orari e Corsi - Judo Kihon Bovolone</title>
        <meta
          name="description"
          content="Scopri gli orari degli allenamenti di Judo per bambini, ragazzi e adulti a Bovolone. Scarica il modulo di iscrizione."
        />
      </Helmet>
      <section className="page-header page-header--red">
        <div className="page-header-pattern"></div>
        <div className="page-header-content">
          <span className="page-header-kanji">稽古</span>
          <h1>I Corsi e gli Orari</h1>
          <p>Periodi di allenamento per l'A.S.D. Judo Kihon Bovolone</p>
        </div>
      </section>

      <section className="section">
        <div className="corsi-layout">
          <ScrollSection>
            <h2 className="section-title text-left brush-stroke-heading">Orari di Allenamento</h2>
            <div className="corsi-cards">
              <div className="course-card">
                <div className="course-card-header">
                  <div className="corso-icon">
                    <UsersIcon size={24} />
                  </div>
                  <div>
                    <h3>Bambini e Ragazzi</h3>
                    <span className="badge">Dai 6 agli 11 anni</span>
                  </div>
                </div>
                <div className="orari-details">
                  <div className="orario-row">
                    <Calendar size={16} />
                    <strong>Lunedì e Mercoledì</strong>
                    <span className="orario-time">18:30 — 19:30</span>
                  </div>
                </div>
                <p className="note">
                  Gli allenamenti del corso Bambini e ragazzi ripartono{' '}
                  <strong>{bambiniDate}</strong>.
                  <br />
                  Si accettano le iscrizioni dei bambini dall'anno{' '}
                  <strong>{annoMinIscrizione}</strong>.
                </p>
              </div>

              <div className="course-card">
                <div className="course-card-header">
                  <div className="corso-icon">
                    <UsersIcon size={24} />
                  </div>
                  <div>
                    <h3>Adulti</h3>
                    <span className="badge">Dai 12 anni in su</span>
                  </div>
                </div>
                <div className="orari-details">
                  <div className="orario-row">
                    <Calendar size={16} />
                    <strong>Lunedì, Mercoledì e Venerdì</strong>
                    <span className="orario-time">19:45 — 21:00</span>
                  </div>
                </div>
                <p className="note">
                  Gli allenamenti Adulti ripartono <strong>{adultiDate}</strong>.
                </p>
              </div>
            </div>
          </ScrollSection>

          <ScrollSection className="iscrizione-section">
            <h2 className="section-title text-left brush-stroke-heading">Come Iscriversi</h2>
            <p className="text-content">
              Per iscriversi basta compilare con i propri dati il modulo d'iscrizione e presentarlo
              in palestra, assieme al <strong>certificato medico di buona salute</strong> per
              attività non agonistica.
            </p>

            <div className="document-links">
              <a
                href="/avviso corsi stagione 2024-2025.pdf"
                target="_blank"
                rel="noreferrer"
                className="doc-link"
              >
                <FileText size={22} />
                <div>
                  <span className="doc-title">Volantino Stagione {stagione}</span>
                  <span className="doc-subtitle">Visualizza il volantino informativo</span>
                </div>
              </a>
              <a
                href="/Domanda di ammissione a socio 2024-2025.pdf"
                target="_blank"
                rel="noreferrer"
                className="doc-link"
              >
                <FileText size={22} />
                <div>
                  <span className="doc-title">Modulo Iscrizione {stagione}</span>
                  <span className="doc-subtitle">Scarica e compila il modulo</span>
                </div>
              </a>
              <a href="/programma judo kihon per verifiche.xlsx" className="doc-link">
                <Download size={22} />
                <div>
                  <span className="doc-title">Programma per passaggio Kyu</span>
                  <span className="doc-subtitle">Documento Excel per le verifiche</span>
                </div>
              </a>
            </div>
          </ScrollSection>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
