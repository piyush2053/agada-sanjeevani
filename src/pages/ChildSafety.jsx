import BiText from '../components/BiText';
import './PolicyPages.css';

export default function ChildSafety() {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <BiText as="h1" en="Child Safety Policy" />
        <div className="policy-meta">
          <p><BiText en="Last Updated: April 2025" /></p>
        </div>
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Not Directed at Children" />
        <BiText 
          en="Agada Sanjeevini is a professional Ayurvedic toxicology reference tool intended for medical doctors, practitioners, students, and adult caregivers. It is not designed for or marketed to children under 13."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="No Child Data Collected" />
        <BiText 
          en="We do not knowingly collect any information from children. The app collects no data from any user whatsoever."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Content Appropriateness" />
        <BiText 
          en="Content consists of clinical medical and Ayurvedic pharmacological reference data. No violence, adult content, gambling, or inappropriate material is present. However, the clinical nature makes it suitable for adult professional use only."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="No Ads or In-App Purchases" />
        <BiText 
          en="The app contains no advertisements, in-app purchases, or monetization of any kind."
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Report Concerns" />
        <div className="contact-info">
          <BiText 
            en="Contact us at agadasanjeevini2026@gmail.com | Nearwe Labs"
          />
        </div>
      </div>
    </div>
  );
}

