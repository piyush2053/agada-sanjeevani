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
          <div className="hero-main">
            <div className="hero-text">
              <BiText as="h1" en="Agada Sanjeevini" />

              <div className="hero-subtitle">
                <BiText en="Expert Ayurvedic Toxicology Diagnosis — Offline & Private" />
              </div>

              <div className="hero-description">
                <BiText en="A trusted clinical tool for doctors, students, and Ayurvedic practitioners. Entirely offline. No data collected. No internet required." />
              </div>
                 <Link to="/about" className="hero-cta btn-primary">
            <BiText en="Learn More" />
          </Link>
            </div>

            <div className="hero-download">
              {/* QR Code */}
              <div className="qr-container">
                <a
                  href="https://github.com/piyush2053/agada-releases/releases/download/Agada/AgadaSanjeevini.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://github.com/piyush2053/agada-releases/releases/download/Agada/AgadaSanjeevini.apk"
                    alt="QR Code to download AgadaSanjeevini APK"
                    className="qr-code"
                  />
                </a>
                <BiText en="Scan or tap the QR code to download" />
              </div>

              {/* Download Button */}
              <a
                href="https://github.com/piyush2053/agada-releases/releases/download/Agada/AgadaSanjeevini.apk"
                className="btn-primary download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiText en="Download App" />
              </a>

              <p className="download-note">
                <BiText en="Android 6.0+ required. Enable 'Install from unknown sources' in settings." />
              </p>
            </div>
          </div>
        </div>
      </section>
    

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <BiText as="h3" en="Offline First" />
            <BiText en="Works without internet in any location" />
          </div>

          <div className="feature-card">
            <BiText as="h3" en="No Data Collection" />
            <BiText en="Zero personal data stored or transmitted" />
          </div>

          <div className="feature-card">
            <BiText as="h3" en="Ayurvedic Medicine Database" />
            <BiText en="Classical formulations & remedies" />
          </div>

          <div className="feature-card">
            <BiText as="h3" en="Clinical Assessment Tools" />
            <BiText en="Structured exposure & symptom evaluation" />
          </div>
        </div>
      </section>

      {/* Compliance Badges Section */}
      <section className="compliance-section">
        <div className="compliance-badges">
          <div className="badge">
            <BiText en="Privacy Safe" />
          </div>
          <div className="badge">
            <BiText en="Child Safe" />
          </div>
          <div className="badge">
            <BiText en="No Ads" />
          </div>
          <div className="badge">
            <BiText en="No Tracking" />
          </div>
        </div>
      </section>
    </div>
  );
}