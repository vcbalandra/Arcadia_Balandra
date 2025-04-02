import styled from "styled-components";
import knowledgeBcg from '../images/knowledge-bcg.jpg';

const Wrapper = styled.section`
  color: white;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  .section-hero {
     background-image: url(${knowledgeBcg});
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

  .market-analysis {
    background-color: #e6fcf5;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 4rem;
  }

  .market-container {
    display: flex;
    flex-direction: row;
    padding-top: 3rem;
  }

  .market-title {
    font-size: 40px;
    font-weight: bold;
    color: #37b24d;
    margin-bottom: 1rem;
  }

  .market-message {
    font-size: 20px;
    max-width: 600px;
    word-wrap: break-word;
    margin-bottom: 20px;
    color: #000000;
  }

  .marketImg {
    margin-top: 1rem;
    margin-left: 2rem;
    height: 20rem;
    width: 40rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
  }

  .position-papers {
    background-color: #e6fcf5;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 4rem;
  }

  .papersImg {
    margin-top: 1rem;
    margin-left: 2rem;
    height: 20rem;
    width: 40rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
  }

  .papers-container {
    display: flex;
    flex-direction: row;
    gap: 9rem;
    padding-top: 3rem;
  }

  .papers-title {
    display: flex;
    font-size: 40px;
    font-weight: bold;
    color: #37b24d;
    margin-bottom: 1rem;
    justify-content: flex-end;
  }

  .papers-message {
    font-size: 20px;
    max-width: 600px;
    word-wrap: break-word;
    margin-bottom: 20px;
    color: #000000;
    text-align: right;
  }



  .reports-manifestos {
    background-color: #e6fcf5;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 4rem;
  }

  .reports-container {
    display: flex;
    flex-direction: row;
    padding-top: 3rem;
  }

  .reports-title {
    font-size: 40px;
    font-weight: bold;
    color: #37b24d;
    margin-bottom: 1rem;
  }

  .reports-message {
    font-size: 20px;
    max-width: 600px;
    word-wrap: break-word;
    margin-bottom: 20px;
    color: #000000;
  }

  .reportsImg {
    margin-top: 1rem;
    margin-left: 2rem;
    height: 20rem;
    width: 40rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
  }

  .editorials {
    background-color: #e6fcf5;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 4rem;
  }

  .editorials-container, .waste-container {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
  }

  .editorials-title, .waste-title {
    font-size: 40px;
    font-weight: bold;
    color: #37b24d;
    margin-bottom: 3rem;
  }

  .waste-reports {
    background-color: #e6fcf5;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 4rem;
  }

  .editorials-img {
    margin-top: 1rem;
    margin-left: 2rem;
    height: 20rem;
    width: 25rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
  }

  .embla {
  width: 90vw; 
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
  margin-bottom: 10rem;
}


.embla__slide {
  flex: 0 0 33.33%;
  padding: 10px; 
  box-sizing: border-box; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  text-align: center; 
  flex-direction: column;
  color: #000000;
}

.arcadia-word {
  color: #008080;
  font-size: 30px;
  font-weight: bold;
}


@media (max-width: 1200px) {
  .section-hero, .market-analysis, .position-papers, .reports-manifestos, .editorials, .waste-reports {
    width: 100vw; 
  }

  .section-statement {
    font-size: 28px; 
  }

  .market-container,
  .reports-container {
    flex-direction: column;
    align-items: center;
  }

  .papers-container {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10rem; 
  }

  .marketImg,
  .papersImg,
  .reportsImg {
    height: 12rem; 
    width: 25rem; 
    margin-bottom: 3rem;
  }

  .papers-container {
    margin-top: 3rem;
    gap: 2rem;
  }

  .editorials-title,
  .waste-title {
    font-size: 32px;
    margin-top: 6rem; 
  }

  .embla {
    width: 100vw;
    height: 80vh; 
  }

  .embla__slide {
    flex: 0 0 100%; 
    margin-top: 6rem; 
  }
}


@media (max-width: 768px) {
  .section-hero, .market-analysis, .position-papers, .reports-manifestos, .editorials, .waste-reports {
    width: 100vw; 
  }

  .section-statement {
    font-size: 28px; 
  }

  .market-container,
  .papers-container,
  .reports-container {
    flex-direction: column;
    align-items: center;
  }

  .papers-container {
    margin-top: 10rem;
    gap: 1rem; 
  }

  .papers-message {
    margin-bottom: 6rem;
  }

  .marketImg,
  .reportsImg {
    height: 12rem;
    width: 25rem;
    margin-bottom: 3rem;
  }

  .papersImg {
    height: 12rem;
    width: 25rem;
  }

  .editorials-title {
    font-size: 32px;
    margin-top: 15rem; 
  }

  .waste-title {
    font-size: 32px;
    margin-top: 6rem; 
  }

  .embla {
    width: 100vw;
    height: 80vh;
  }

  .embla__slide {
    flex: 0 0 100%; 
    margin-top: 6rem;
  }
}


@media (max-width: 480px) {
  .section-hero, .market-analysis, .position-papers, .reports-manifestos, .editorials, .waste-reports {
    width: 100vw; 
  }

  .section-statement {
    font-size: 24px; 
  }

  .market-title,
  .papers-title {
    font-size: 32px;
    margin-top: 3rem; 
  }

  .reports-title {
    font-size: 32px;
    margin-top: 10rem; 
  }

  .papers-container {
    flex-direction: column;
    align-items: center;
    margin-top: 25rem; 
  }

  .reports-container {
    flex-direction: column;
    align-items: center;
    margin-top: 6rem; 
  }

  .market-message,
  .reports-message {
    font-size: 18px; 
  }

  .papers-message {
    margin-bottom: 20rem; 
    font-size: 16px;
  }

  .marketImg,
  .reportsImg {
    height: 10rem;
    width: 20rem; 
  }

  .papersImg {
    height: 10rem;
    width: 20rem; 
    margin-top: 6rem;
  }

  .editorials-title {
    font-size: 28px;
    margin-top: 25rem; 
  }

  .waste-title {
    font-size: 28px;
    margin-top: 10rem; 
  }

  .embla {
    width: 100vw;
    height: 70vh;
  }

  .embla__slide {
    flex: 0 0 100%; 
  }

  .container {
    padding: 0 1rem; 
  }

  .arcadia-word {
      font-size: 16px;
    }
}
  `;

export default Wrapper;