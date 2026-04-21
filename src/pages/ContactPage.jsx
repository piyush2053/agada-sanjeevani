import BiText from '../components/BiText';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <BiText as="h1" en="Contact & Support" />
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-item">
            <div className="contact-label">
              <BiText en="Email" />
            </div>
            <div className="contact-value">
              <a href="mailto:agadasanjeevini2026@gmail.com">agadasanjeevini2026@gmail.com</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-label">
              <BiText en="Developer" />
            </div>
            <div className="contact-value">
              Nearwe Labs
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-label">
              <BiText en="App Type" />
            </div>
            <div className="contact-value">
              <BiText 
                en="Free, Offline Android Application"
              />
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-label">
              <BiText en="Platform" />
            </div>
            <div className="contact-value">
              Google Play Store
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

