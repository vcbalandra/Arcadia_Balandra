import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Wrapper>
      <nav className="navbar">
        <a href="#section-hero" className="logoLink">
          <div className="logo">
            <Logo />
          </div>
        </a>

        <div className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile' : ''}`}>
          <li>
          <a href="/innovation-solutions-exchange" className="nav-item">
              Innovation & Solutions Exchange
            </a>
          </li>
          <li>
          <a href="/events-collaboration" className="nav-item">
              Events & Collaborations
            </a>
          </li>
          <li>
            <a href="/knowledge-hub" className="nav-item">
              Knowledge Hub
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Navbar;