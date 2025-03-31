import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #fff;
  color: #008080;
  text-align: center;
  padding: 40px 20px;
  font-size: 16px;
  
  .footer-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px; 
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer-text {
    font-size: 14px;
    font-family: 'Arial', sans-serif;
    margin-bottom: 3rem;
  }

  .footer-heading {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .footer-links {
    list-style: none;
    padding: 0;
  }

  .footer-links li {
    margin-bottom: 10px;
  }

  .footer-links a {
    color: #008080;
    text-decoration: none;
    font-size: 16px;
  }

  .footer-links a:hover {
    text-decoration: underline; 
  }

  .footer-logo {
    margin-right: 3rem;
  }


  
  @media (max-width: 768px) {
    .footer-container {
      grid-template-columns: 1fr; 
    }
    footer {
      text-align: center; 
    }
  }
`;

export default Footer;