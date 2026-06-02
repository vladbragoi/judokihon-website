import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import IlDojo from './pages/IlDojo';
import OrariCorsi from './pages/OrariCorsi';
import Galleria from './pages/Galleria';
import Contatti from './pages/Contatti';
import CintureNere from './pages/CintureNere';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/il-dojo" element={<IlDojo />} />
            <Route path="/orari-corsi" element={<OrariCorsi />} />
            <Route path="/galleria" element={<Galleria />} />
            <Route path="/cinture-nere" element={<CintureNere />} />
            <Route path="/contatti" element={<Contatti />} />
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
