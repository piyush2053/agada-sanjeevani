import { Link } from 'react-router-dom';
import BiText from './BiText';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About App</h3>
          <p>
            Agada Sanjeevani is an offline Ayurvedic toxicology reference tool for medical professionals.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/child-safety">Child Safety</Link></li>
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <strong>Email:</strong> agadasanjeevani@gmail.com
          </p>
          <p>
            <strong>Developer:</strong> Nearwe Labs
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>© 2025 Agada Sanjeevani — Developed by Nearwe Labs. All rights reserved.</p>
          <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            विकसित: Nearwe Labs | 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
