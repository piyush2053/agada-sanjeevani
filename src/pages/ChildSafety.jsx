import BiText from '../components/BiText';
import './PolicyPages.css';

export default function ChildSafety() {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <BiText as="h1" en="Child Safety Policy" hi="बाल सुरक्षा नीति" />
        <div className="policy-meta">
          <p><BiText en="Last Updated: April 2025" hi="अंतिम अपडेट: अप्रैल 2025" /></p>
        </div>
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Not Directed at Children" hi="बच्चों के लिए नहीं" />
        <BiText 
          en="Agada Sanjeevani is a professional Ayurvedic toxicology reference tool intended for medical doctors, practitioners, students, and adult caregivers. It is not designed for or marketed to children under 13."
          hi="अगद संजीवनी एक पेशेवर आयुर्वेदिक विष विज्ञान संदर्भ उपकरण है जो चिकित्सकों, छात्रों और वयस्क देखभाल कर्ताओं के लिए है। यह 13 वर्ष से कम बच्चों के लिए नहीं है।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="No Child Data Collected" hi="बच्चों का कोई डेटा एकत्र नहीं" />
        <BiText 
          en="We do not knowingly collect any information from children. The app collects no data from any user whatsoever."
          hi="हम जानबूझकर बच्चों से कोई जानकारी एकत्र नहीं करते। ऐप किसी भी उपयोगकर्ता से कोई डेटा एकत्र नहीं करता।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Content Appropriateness" hi="सामग्री की उपयुक्तता" />
        <BiText 
          en="Content consists of clinical medical and Ayurvedic pharmacological reference data. No violence, adult content, gambling, or inappropriate material is present. However, the clinical nature makes it suitable for adult professional use only."
          hi="सामग्री में नैदानिक चिकित्सा और आयुर्वेदिक फार्माकोलॉजी संदर्भ डेटा है। कोई हिंसा, वयस्क सामग्री या अनुचित सामग्री नहीं है। हालांकि, इसकी नैदानिक प्रकृति इसे केवल वयस्क पेशेवर उपयोग के लिए उपयुक्त बनाती है।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="No Ads or In-App Purchases" hi="कोई विज्ञापन या इन-ऐप खरीदारी नहीं" />
        <BiText 
          en="The app contains no advertisements, in-app purchases, or monetization of any kind."
          hi="ऐप में कोई विज्ञापन, इन-ऐप खरीदारी या किसी भी प्रकार का मुद्रीकरण नहीं है।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Report Concerns" hi="चिंताएँ रिपोर्ट करें" />
        <div className="contact-info">
          <BiText 
            en="Contact us at agadasanjeevani@gmail.com | Nearwe Labs"
            hi="हमसे संपर्क करें: agadasanjeevani@gmail.com | Nearwe Labs"
          />
        </div>
      </div>
    </div>
  );
}
