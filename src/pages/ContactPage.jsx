import BiText from '../components/BiText';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <BiText as="h1" en="Contact & Support" hi="संपर्क और सहायता" />
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-item">
            <div className="contact-label">
              <BiText en="Email" hi="ईमेल" />
            </div>
            <div className="contact-value">
              <a href="mailto:agadasanjeevani@gmail.com">agadasanjeevani@gmail.com</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-label">
              <BiText en="Developer" hi="डेवलपर" />
            </div>
            <div className="contact-value">
              Nearwe Labs
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-label">
              <BiText en="App Type" hi="ऐप प्रकार" />
            </div>
            <div className="contact-value">
              <BiText 
                en="Free, Offline Android Application"
                hi="निःशुल्क, ऑफलाइन Android ऐप्लिकेशन"
              />
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-label">
              <BiText en="Platform" hi="प्लेटफ़ॉर्म" />
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
