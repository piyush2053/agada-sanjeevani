import BiText from '../components/BiText';
import './AboutApp.css';

export default function AboutApp() {
  return (
    <div className="about-page">
      <div className="about-header">
        <BiText as="h1" en="About Agada Sanjeevani" hi="अगद संजीवनी के बारे में" />
      </div>

      <div className="about-section">
        <BiText as="h2" en="What is Agada Tantra?" hi="अगद तंत्र क्या है?" />
        <BiText 
          en="Agada Tantra is the classical branch of Ayurveda dedicated to toxicology — the ancient science of poisons, antidotes, and toxic exposures."
          hi="अगद तंत्र आयुर्वेद की वह शाखा है जो विषविज्ञान को समर्पित है — विषों, प्रतिविषों और विषाक्त एक्सपोज़र का प्राचीन विज्ञान।"
        />
      </div>

      <div className="about-section">
        <BiText as="h2" en="What the App Does" hi="ऐप क्या करता है?" />
        <BiText 
          en="Guides clinicians through structured assessment of toxic exposures — Bite (snake, scorpion, insect), Toxic Food, and External Contact — with classical Ayurvedic remedy suggestions."
          hi="चिकित्सकों को विषाक्त एक्सपोज़र के संरचित मूल्यांकन में मार्गदर्शन करता है — काटना (सांप, बिच्छू, कीट), विषाक्त भोजन, और बाहरी संपर्क — शास्त्रीय आयुर्वेदिक उपचार सुझावों के साथ।"
        />
      </div>

      <div className="about-section">
        <BiText as="h2" en="Who It's For" hi="यह किसके लिए है?" />
        <BiText 
          en="Doctors, Ayurvedic practitioners, medical students, and rural health workers."
          hi="डॉक्टर, आयुर्वेदिक चिकित्सक, चिकित्सा छात्र और ग्रामीण स्वास्थ्य कार्यकर्ता।"
        />
      </div>

      <div className="about-section">
        <BiText as="h2" en="Why Offline?" hi="ऑफलाइन क्यों?" />
        <BiText 
          en="Designed for use in areas with no internet connectivity — ensuring the tool is available exactly when and where it matters most."
          hi="बिना इंटरनेट कनेक्टिविटी वाले क्षेत्रों में उपयोग के लिए डिज़ाइन किया गया — यह सुनिश्चित करते हुए कि उपकरण ठीक तब और वहाँ उपलब्ध हो जब सबसे अधिक आवश्यकता हो।"
        />
      </div>

      <div className="developer-card">
        <BiText as="h3" en="Developed by Nearwe Labs" hi="Nearwe Labs द्वारा विकसित" />
        <BiText 
          as="p"
          en="Building purposeful digital health tools for Bharat."
          hi="भारत के लिए उद्देश्यपूर्ण डिजिटल स्वास्थ्य उपकरण बनाना।"
        />
      </div>
    </div>
  );
}
