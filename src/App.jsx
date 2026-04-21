import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ChildSafety from './pages/ChildSafety';
import TermsOfUse from './pages/TermsOfUse';
import AboutApp from './pages/AboutApp';
import ContactPage from './pages/ContactPage';
import './globals.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/child-safety" element={<ChildSafety />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/about" element={<AboutApp />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
