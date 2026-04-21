import BiText from '../components/BiText';
import './PolicyPages.css';

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <BiText as="h1" en="Privacy Policy" hi="गोपनीयता नीति" />
        <div className="policy-meta">
          <p><BiText en="Last Updated: April 2025" hi="अंतिम अपडेट: अप्रैल 2025" /></p>
          <p><BiText en="Developed by Nearwe Labs" hi="Nearwe Labs द्वारा विकसित" /></p>
        </div>
      </div>

      <div className="policy-section">
        <BiText as="h2" en="No Data Collection" hi="कोई डेटा संग्रह नहीं" />
        <BiText 
          en="The App does not collect, store, transmit, or share any personal information. All data entered during use exists only in device memory during the active session and is never saved, uploaded, or transmitted."
          hi="यह ऐप किसी भी व्यक्तिगत जानकारी को एकत्र, संग्रहीत, प्रेषित या साझा नहीं करता। उपयोग के दौरान दर्ज किया गया सभी डेटा केवल सक्रिय सत्र के दौरान डिवाइस की मेमोरी में रहता है।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="No Internet Connectivity" hi="कोई इंटरनेट कनेक्टिविटी नहीं" />
        <BiText 
          en="The App functions entirely offline. It does not make any network requests, connect to external servers, or communicate over the internet."
          hi="यह ऐप पूरी तरह ऑफलाइन काम करता है। यह कोई नेटवर्क अनुरोध नहीं करता, बाहरी सर्वर से नहीं जुड़ता।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="No Third-Party SDKs or Analytics" hi="कोई थर्ड-पार्टी SDK या एनालिटिक्स नहीं" />
        <BiText 
          en="The App does not integrate any third-party analytics, advertising, crash reporting, or tracking SDKs."
          hi="यह ऐप किसी भी थर्ड-पार्टी एनालिटिक्स, विज्ञापन, क्रैश रिपोर्टिंग या ट्रैकिंग SDK को एकीकृत नहीं करता।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Device Permissions" hi="डिवाइस अनुमतियाँ" />
        <BiText 
          en="The App requires no special device permissions — no camera, microphone, location, contacts, or storage access."
          hi="इस ऐप को कोई विशेष डिवाइस अनुमति की आवश्यकता नहीं है — कैमरा, माइक्रोफोन, स्थान, संपर्क या स्टोरेज एक्सेस नहीं।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Children's Privacy" hi="बच्चों की गोपनीयता" />
        <BiText 
          en="The App is not directed at children under 13. It is a professional medical tool intended for healthcare practitioners and adults. No data from any user is collected."
          hi="यह ऐप 13 वर्ष से कम आयु के बच्चों के लिए नहीं है। यह स्वास्थ्य चिकित्सकों और वयस्कों के लिए एक पेशेवर चिकित्सा उपकरण है।"
        />
      </div>

      <div className="policy-section">
        <BiText as="h2" en="Contact" hi="संपर्क" />
        <div className="contact-info">
          <BiText 
            en="For questions about this policy, contact: agadasanjeevani@gmail.com | Nearwe Labs"
            hi="इस नीति के बारे में प्रश्नों के लिए संपर्क करें: agadasanjeevani@gmail.com | Nearwe Labs"
          />
        </div>
      </div>
    </div>
  );
}
