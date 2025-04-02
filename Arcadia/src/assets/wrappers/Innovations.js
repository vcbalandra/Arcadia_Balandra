import styled from "styled-components";
import arcadiaBcg from '../images/background.jpg';

const Section = styled.section`
  color: white;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  .section-hero {
    background-image: url(${arcadiaBcg});
    background-size: cover; 
    background-position: center center; 
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
  }

  .section-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(40, 60, 70, 0.4); 
    z-index: 1;
  }

  .section-hero > * {
    position: relative;
    z-index: 2;
  }

  .container {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .motto {
    font-size: 30px;
    font-weight: bold;
    color: #008080;
  }

  .hero-message {
    font-size: 20px;
    line-height: 2rem;
    max-width: 600px;
    word-wrap: break-word;
    margin-bottom: 20px;
  }

  .hero-button {
    margin-top: 2rem;
    background-color: #008080;
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 6px;
  }

  .hero-button:hover {
    background-color: rgb(9, 161, 161);
    cursor: pointer;
  }

  .image-container {
    margin-right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .heroImg {
    margin-top: 1rem;
    margin-left: 2rem;
    height: 20rem;
    width: 40rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
  }

  .growing,
  .keys,
  .focus,
  .about {
    background-color: #e6fcf5;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 1rem;
  }

  .growing-container {
    display: flex;
    flex-direction: row;
    margin-left: 3rem;
  }
  
  .keys-container {
    display: flex;
    margin-bottom: 3rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .focus-container,
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .growing-header,
  .keys-header,
  .focus-header,
  .about-header {
    font-size: 40px;
    font-weight: bold;
    color: #37b24d;
    margin-bottom: 1rem;
  }

  .focus-header {
    margin-top: 10rem;
  }

  .growing-message,
  .keys-message,
  .focus-message,
  .about-message,
  .about-hub {
    font-size: 20px;
    max-width: 600px;
    word-wrap: break-word;
    margin-bottom: 20px;
    color: #000000;
  }

  .card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 columns */
  gap: 20px; /* Space between cards */
  padding: 20px;
}

.card {
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.card p {
  font-size: 1em;
  color: #555;
}

.arcadia-word {
  color: #008080;
  font-size: 30px;
  font-weight: bold;
}


  @media (max-width: 1024px) {
    .heroImg {
      height: 15rem;
      width: 30rem;
    }

    .container {
      padding: 1rem;
    }

    .motto {
      font-size: 26px;
    }

    .hero-message {
      font-size: 18px;
    }

    .hero-button {
      font-size: 14px;
      padding: 8px 16px;
    }

    .growing-header {
      font-size: 36px;
    }

    .growing-message {
      font-size: 18px;
    }

    .growing-container {
      flex-direction: column;
      align-items: center;
    }

    .image-container {
      margin-left: 0;
      margin-top: 2rem;
    }

    .keys-container {
      margin-top: 10rem;
    }

    .keys-header {
      font-size: 32px;
    }

    .keys-message {
      font-size: 16px;
      max-width: 80%;
    }

  }

  @media (max-width: 768px) {
  .growing-container,
  .focus-container,
  .about-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 3rem;
  }

  .keys-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 20rem;
  }

  .growing-container {
    margin-left: 0;
  }

  .focus-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .growing, .keys, .focus, .about {
    width: 100vw;
    padding: 3rem 1rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .growing-header {
    font-size: 28px;
  }

  .keys-header {
    font-size: 28px;
    margin-top: 30rem;
  }
  .focus-header {
    font-size: 28px;
    margin-top: 40rem;
  }
  .about-header {
    font-size: 28px;
    margin-top: 15rem;
  }

  .growing-message,
  .keys-message,
  .focus-message,
  .about-message,
  .about-hub {
    font-size: 16px;
    max-width: 90%;
    margin: 0 auto;
  }

  .heroImg {
    width: 100%;
    height: auto;
  }

  
  .card-grid {
    grid-template-columns: 1fr; 
    gap: 1rem; 
  }

  .card {
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    padding: 1px; 
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 30rem;
  }

  .card h2 {
    font-size: 1.2em; 
    margin-bottom: 10px;
  }

  .card p {
    font-size: 0.9em; 
    color: #555;
  }
}

  @media (max-width: 480px) {
    .growing, .keys, .focus, .about {
      width: 100vw; 
    }
    .heroImg {
    width: 100%;
    height: auto;
    }

    .motto {
      font-size: 18px;
    }

    .hero-message {
      font-size: 14px;
    }

    .hero-button {
      font-size: 12px;
      padding: 8px 12px;
    }

    .growing-header {
      font-size: 28px;
    }

    .growing-message {
      font-size: 14px;
    }

    .growing-container {
      flex-direction: column;
      align-items: center;
    }

    .container {
      padding: 0 1rem;
    }

    .keys-container {
      margin-bottom: 30rem;
      margin-top: 30rem;
    }

    .keys-header {
      font-size: 24px;
      margin-top: 20rem;
    }

    .keys-message {
      font-size: 14px;
      max-width: 90%;
    }

    .about-header {
      font-size: 28px;
    }

    .about-message,
    .about-hub {
      font-size: 14px;
      max-width: 90%;
    }

    .about-container {
      margin-top: 7rem;
    }

    .focus-header {
      font-size: 24px;
      
    }

    .focus-container {
      margin-top: 7rem;
    }
    
    .card {
     
    }

    .arcadia-word {
      font-size: 16px;
    }
  }
`;

export default Section;