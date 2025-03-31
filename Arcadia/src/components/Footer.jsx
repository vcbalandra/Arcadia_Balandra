import React from 'react';
import Wrapper from '../assets/wrappers/Footer';
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons'
import logo from "../assets/images/arcadia-logo.png"; 

const LogoImage = styled.img`
  width: 7rem; 
  height: 7rem; 
  margin-left: 3rem;
`;

const Footer = () => {
  return (
    <Wrapper>
    <footer id="footer">
    <div className="footer-container">
      <section className="footer-section">
        <LogoImage src={logo} alt="arcadia" className='footer-logo'/>
        <p className="footer-text">© 2025 Arcadia by VB. All rights reserved.</p>
      </section>
  
      <section className="footer-section">
        <h3 className="footer-heading">About</h3>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact (+63) 9561687410</a></li>
        </ul>
      </section>
  
      <section className="footer-section">
        <h3 className="footer-heading">Follow Us</h3>
        <ul className="footer-links">
        <li>
        <SocialIcon network="facebook" url="https://www.facebook.com" style={{ width: '20px', height: '20px' }} />
        <a href="#" style={{ marginLeft: '7px' }}>Facebook</a>
        </li>
        <li>
        <SocialIcon network="telegram" url="https://www.telegram.com" style={{ width: '20px', height: '20px' }} />
        <a href="#" style={{ marginLeft: '7px' }}>Telegram</a>
        </li>
        <li>
        <SocialIcon network="instagram" url="https://www.instagram.com" style={{ width: '20px', height: '20px' }} />
        <a href="#" style={{ marginLeft: '7px' }}>Instagram</a>
      </li>
        </ul>
      </section>
    </div>
  </footer>
  </Wrapper>
  );
};

export default Footer;