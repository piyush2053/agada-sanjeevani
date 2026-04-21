import BiText from '../components/BiText';
import './PolicyPages.css';

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <BiText as="h1" en="Privacy Policy" />
        <div className="policy-meta">
          <p><BiText en="Last Updated: April 2025" /></p>
          <p><BiText en="Developed by Nearwe Labs" /></p>
        </div>
      </div>

      <div className="policy-section">
        <BiText as="h2" en="No Data Collection" />
        <BiText 
          en="The App does not collect, store, transmit, or share any personal information. All data entered during use exists only in device memory during the active session and is never saved, uploaded, or transmitted."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="No Internet Connectivity" />
        <BiText 
          en="The App functions entirely offline. It does not make any network requests, connect to external servers, or communicate over the internet."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="No Third-Party SDKs or Analytics" />
        <BiText 
          en="The App does not integrate any third-party analytics, advertising, crash reporting, or tracking SDKs."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Device Permissions" />
        <BiText 
          en="The App requires no special device permissions — no camera, microphone, location, contacts, or storage access."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Children's Privacy" />
        <BiText 
          en="The App is not directed at children under 13. It is a professional medical tool intended for healthcare practitioners and adults. No data from any user is collected."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Contact" />
        <div className="contact-info">
          <BiText 
            en="For questions about this policy, contact: agadasanjeevini2026@gmail.com | Nearwe Labs"
          />
        </div>
      </div>
    </div>
  );
}

