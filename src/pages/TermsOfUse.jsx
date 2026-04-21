import BiText from '../components/BiText';
import './PolicyPages.css';

export default function TermsOfUse() {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <BiText as="h1" en="Terms of Use" hi="उपयोग की शर्तें" />
        <div className="policy-meta">
          <p><BiText en="Last Updated: April 2025" hi="अंतिम अपडेट: अप्रैल 2025" /></p>
        </div>
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Medical Disclaimer" hi="चिकित्सा अस्वीकरण" />
        <BiText 
          en="This app is an informational reference tool based on classical Ayurvedic texts. It does NOT replace professional medical judgment. Always consult a qualified healthcare professional."
          hi="यह ऐप शास्त्रीय आयुर्वेदिक ग्रंथों पर आधारित एक सूचनात्मक संदर्भ उपकरण है। यह पेशेवर चिकित्सा निर्णय का स्थान नहीं लेता।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Offline Use Only" hi="केवल ऑफलाइन उपयोग" />
        <BiText 
          en="No account, login, or internet connection is required or used."
          hi="कोई खाता, लॉगिन या इंटरनेट कनेक्शन आवश्यक नहीं है।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="No Warranties" hi="कोई वारंटी नहीं" />
        <BiText 
          en="The app is provided as-is without warranties of accuracy, completeness, or fitness for a particular purpose."
          hi="ऐप सटीकता, पूर्णता या किसी विशेष उद्देश्य के लिए उपयुक्तता की वारंटी के बिना प्रदान किया जाता है।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Limitation of Liability" hi="दायित्व की सीमा" />
        <BiText 
          en="Nearwe Labs shall not be liable for any clinical decisions made based on information provided by this app."
          hi="Nearwe Labs इस ऐप द्वारा प्रदान की गई जानकारी के आधार पर किए गए किसी भी नैदानिक निर्णय के लिए उत्तरदायी नहीं होगा।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Intellectual Property" hi="बौद्धिक संपदा" />
        <BiText 
          en="All content including Ayurvedic formulations and clinical protocols is the intellectual property of Nearwe Labs."
          hi="आयुर्वेदिक फॉर्मूलेशन और नैदानिक प्रोटोकॉल सहित सभी सामग्री Nearwe Labs की बौद्धिक संपत्ति है।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Contact" hi="संपर्क" />
        <div className="contact-info">
          <BiText 
            en="agadasanjeevani@gmail.com | Nearwe Labs"
            hi="agadasanjeevani@gmail.com | Nearwe Labs"
          />
        </div>
      </div>
    </div>
  );
}
