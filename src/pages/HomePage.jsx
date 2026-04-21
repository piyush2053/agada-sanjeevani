import { Link } from 'react-router-dom';
import BiText from '../components/BiText';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="dot-grid-pattern"></div>
        <div className="hero-content">
          <BiText as="h1" en="Agada Sanjeevani" hi="अगद संजीवनी" />
          
          <div className="hero-subtitle">
            <BiText 
              en="Expert Ayurvedic Toxicology Diagnosis — Offline & Private"
              hi="विशेषज्ञ आयुर्वेदिक विषविज्ञान निदान — ऑफलाइन और निजी"
            />
          </div>

          <div className="hero-description">
            <BiText 
              en="A trusted clinical tool for doctors, students, and Ayurvedic practitioners. Entirely offline. No data collected. No internet required."
              hi="डॉक्टरों, छात्रों और आयुर्वेदिक चिकित्सकों के लिए एक विश्वसनीय नैदानिक उपकरण। पूर्णतः ऑफलाइन। कोई डेटा संग्रह नहीं।"
            />
          </div>

          <Link to="/about" className="hero-cta btn-primary">
            <BiText en="Learn More" hi="अधिक जानें" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <BiText as="h3" en="Offline First" hi="पहले ऑफलाइन" />
            <BiText 
              en="Works without internet in any location"
              hi="किसी भी स्थान पर इंटरनेट के बिना काम करता है"
            />
          </div>

          <div className="feature-card">
            <BiText as="h3" en="No Data Collection" hi="कोई डेटा संग्रह नहीं" />
            <BiText 
              en="Zero personal data stored or transmitted"
              hi="कोई व्यक्तिगत डेटा संग्रहीत या प्रेषित नहीं"
            />
          </div>

          <div className="feature-card">
            <BiText as="h3" en="Ayurvedic Medicine Database" hi="आयुर्वेदिक औषधि डेटाबेस" />
            <BiText 
              en="Classical formulations & remedies"
              hi="शास्त्रीय औषधि फॉर्मूलेशन और उपचार"
            />
          </div>

          <div className="feature-card">
            <BiText as="h3" en="Clinical Assessment Tools" hi="नैदानिक मूल्यांकन उपकरण" />
            <BiText 
              en="Structured exposure & symptom evaluation"
              hi="संरचित एक्सपोज़र और लक्षण मूल्यांकन"
            />
          </div>
        </div>
      </section>

      {/* Compliance Badges Section */}
      <section className="compliance-section">
        <div className="compliance-badges">
          <div className="badge">
            <BiText en="Privacy Safe" hi="गोपनीयता सुरक्षित" />
          </div>
          <div className="badge">
            <BiText en="Child Safe" hi="बाल सुरक्षित" />
          </div>
          <div className="badge">
            <BiText en="No Ads" hi="कोई विज्ञापन नहीं" />
          </div>
          <div className="badge">
            <BiText en="No Tracking" hi="कोई ट्रैकिंग नहीं" />
          </div>
        </div>
      </section>
    </div>
  );
}
