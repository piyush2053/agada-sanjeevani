import { useState } from 'react';
import { Link } from 'react-router-dom';
import BiText from './BiText';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <div className="navbar-logo-text">Agada Sanjeevani</div>
          <div className="navbar-logo-tagline">by Nearwe Labs</div>
        </Link>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/privacy-policy" onClick={() => setIsOpen(false)}>Privacy</Link>
          </li>
          <li>
            <Link to="/child-safety" onClick={() => setIsOpen(false)}>Child Safety</Link>
          </li>
          <li>
            <Link to="/terms" onClick={() => setIsOpen(false)}>Terms</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
