import BiText from '../components/BiText';
import './AboutApp.css';

export default function AboutApp() {
  return (
    <div className="about-page">
      <div className="about-header">
        <BiText as="h1" en="About Agada Sanjeevini" />
      </div>

      <div className="about-section">
        <BiText as="h2" en="What is Agada Tantra?" />
        <BiText 
          en="Agada Tantra is the classical branch of Ayurveda dedicated to toxicology — the ancient science of poisons, antidotes, and toxic exposures."
        />
      </div>

      <div className="about-section">
        <BiText as="h2" en="What the App Does" />
        <BiText 
          en="Guides clinicians through structured assessment of toxic exposures — Bite (snake, scorpion, insect), Toxic Food, and External Contact — with classical Ayurvedic remedy suggestions."
        />
      </div>

      <div className="about-section">
        <BiText as="h2" en="Who It's For" />
        <BiText 
          en="Doctors, Ayurvedic practitioners, medical students, and rural health workers."
        />
      </div>

      <div className="about-section">
        <BiText as="h2" en="Why Offline?" />
        <BiText 
          en="Designed for use in areas with no internet connectivity — ensuring the tool is available exactly when and where it matters most."
        />
      </div>

      <div className="developer-card">
        <BiText as="h3" en="Developed by Nearwe Labs" />
        <BiText 
          as="p"
          en="Building purposeful digital health tools for Bharat."
        />
      </div>
    </div>
  );
}

