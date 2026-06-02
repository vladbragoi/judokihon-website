import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Dojo from './pages/Dojo';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BlackBelts from './pages/BlackBelts';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/il-dojo" element={<Dojo />} />
            <Route path="/orari-corsi" element={<Schedule />} />
            <Route path="/galleria" element={<Gallery />} />
            <Route path="/cinture-nere" element={<BlackBelts />} />
            <Route path="/contatti" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
