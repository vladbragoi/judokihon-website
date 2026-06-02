import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

const Home = lazy(() => import('./pages/Home'));
const Dojo = lazy(() => import('./pages/Dojo'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const BlackBelts = lazy(() => import('./pages/BlackBelts'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

const LoadingFallback = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      color: 'var(--text-color)',
      fontSize: '1.2rem',
    }}
  >
    <p>Caricamento in corso...</p>
  </div>
);

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/il-dojo" element={<Dojo />} />
              <Route path="/orari-corsi" element={<Schedule />} />
              <Route path="/galleria" element={<Gallery />} />
              <Route path="/cinture-nere" element={<BlackBelts />} />
              <Route path="/contatti" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
