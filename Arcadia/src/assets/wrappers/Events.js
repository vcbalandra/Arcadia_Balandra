import styled from "styled-components";
import sustainability from '../images/sustainability.jpg';

const Wrapper = styled.section`
  color: white;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  .section-hero {
     background-image: url(${sustainability});
        background-size: cover; 
        background-position: center center; 
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100%;
  }

 .container {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
 }

  .section-statement {
    font-size: 42px;
    font-weight: bold;
    color: #008080;
    word-wrap: break-word;
    margin-bottom: 20px;
  }

  .dialogues {
    background-color: #e6fcf5;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 4rem;
  }

  .dialogues-container {
    display: flex;
    flex-direction: row;
    padding-top: 3rem;
  }

   .campaigns-container {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    padding-top: 3rem; 
   }
   
   .upcoming-container, .previous-container {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
 }

.dialogues-title, .campaigns-title, .upcoming-title, .previous-title {
    font-size: 40px;
    font-weight: bold;
    color: #37b24d;
    margin-bottom: 1rem;
}

.dialogues-message {
    font-size: 20px;
    max-width: 600px;
    word-wrap: break-word;
    margin-bottom: 20px;
    color: #000000;
}

.campaigns-message {
    font-size: 20px;
    max-width: 900px;
    word-wrap: break-word;
    margin-bottom: 20px;
    color: #000000;  
    text-align: right;
 }

 .dialogues-sessions {
    font-weight: bold;
    font-size: 18px;
    color: #000000;
 }
  .campaign-activities {
    font-weight: bold;
    font-size: 18px;
    color: #000000;
    text-align: right;
 }

 .dialogueImg {
    margin-top: 1rem;
    margin-left: 2rem;
    height: 20rem;
    width: 40rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
 }

 .campaignImg {
    margin-top: 1rem;
    margin-right: 4rem;
    height: 20rem;
    width: 40rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
 }

  .campaigns {
    background-color: #e6fcf5;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 4rem;
  }

  .upcoming {
    background-color: #e6fcf5;
  }

  .upcoming-img {
    margin-top: 1rem;
    margin-left: 2rem;
    height: 20rem;
    width: 40rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
  }

  .embla {
  width: 100vw; 
  height: 100vh; 
  overflow: hidden; 
  display: flex;
  justify-content: center; 
  align-items: center; 
}


.embla__container {
  display: flex; 
  width: 100%; 
  height: 100%; 
}


.embla__slide {
  flex: 0 0 50%; 
  padding: 10px; 
  box-sizing: border-box; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  text-align: center; 
  flex-direction: column;
  color: #000000;
}

  .previous {
    background-color: #e6fcf5;
  }

  .arcadia-word {
  color: #008080;
  font-size: 30px;
  font-weight: bold;
}


  @media (max-width: 768px) {
    .section-hero, .dialogues, .campaigns, .upcoming, .previous {
      width: 100%;
    }

    .dialogues-container,
    .campaigns-container {
      flex-direction: column;
      padding: 0 1rem;
      text-align: center;
    }

    .dialogues-title,
    .campaigns-title {
      font-size: 32px;
    }

    .upcoming-title {
        margin-top: 6rem;
    }

    .dialogues-message,
    .campaigns-message {
      font-size: 18px;
      max-width: 90%;
    }

    .dialogueImg,
    .campaignImg {
      width: 100%;
      height: auto;
      margin: 1rem 0;
    }

    .dialogues-sessions,
    .campaign-activities {
      font-size: 16px;
      text-align: center;
    }

    .embla__slide {
    flex: 0 0 100%; 
    margin-top: 6rem;
  }
  }

  @media (max-width: 480px) {
    .section-hero, .dialogues, .campaigns, .upcoming, .previous {
      width: 100%;
    }
    
    .dialogues-title,
    .campaigns-title {
      font-size: 28px;
    }

    .upcoming-title {
        margin-top: 6rem;
    }

    .dialogues-message,
    .campaigns-message {
      font-size: 16px;
      max-width: 100%;
    }

    .dialogueImg,
    .campaignImg {
      width: 100%;
      height: auto;
      margin-left: 0;
      margin-right: 0;
    }

    .dialogues-sessions,
    .campaign-activities {
      font-size: 14px;
    }
    
    .upcoming-img {
      margin-top: 1rem;
      margin-left: 2rem;
      height: 20rem;
      width: 25rem;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      object-fit: cover;
    }

    .embla {
    width: 100vw;
    height: 70vh;
    margin-bottom: 6rem;
  }

  .embla__slide {
    flex: 0 0 100%; 
  }
  
  .arcadia-word {
      font-size: 16px;
    }
  }

`;

export default Wrapper;


  
  
