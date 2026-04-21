import BiText from '../components/BiText';
import './PolicyPages.css';

export default function TermsOfUse() {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <BiText as="h1" en="Terms of Use" />
        <div className="policy-meta">
          <p><BiText en="Last Updated: April 2025" /></p>
        </div>
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Medical Disclaimer" />
        <BiText 
          en="This app is an informational reference tool based on classical Ayurvedic texts. It does NOT replace professional medical judgment. Always consult a qualified healthcare professional."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Offline Use Only" />
        <BiText 
          en="No account, login, or internet connection is required or used."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="No Warranties" />
        <BiText 
          en="The app is provided as-is without warranties of accuracy, completeness, or fitness for a particular purpose."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Limitation of Liability" />
        <BiText 
          en="Nearwe Labs shall not be liable for any clinical decisions made based on information provided by this app."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Intellectual Property" />
        <BiText 
          en="All content including Ayurvedic formulations and clinical protocols is the intellectual property of Nearwe Labs."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Contact" />
        <div className="contact-info">
          <BiText 
            en="agadasanjeevini2026@gmail.com | Nearwe Labs"
          />
        </div>
      </div>
    </div>
  );
}

