import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f7fc;

  .form {
    width: 100vw;
    max-width: 450px; 
    padding: 2rem;
    border-radius: 8px;
    background-color: #ffffff; 
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
    border-top: 5px solid #008080;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #008080; 
    margin-bottom: 1.5rem;
    text-align: center;
  }

  p {
    margin-top: 1rem;
    text-align: center;
    font-size: 1rem;
    color: #333; 
  }

  .member-btn {
    color: #008080;
    font-weight: bold;
    margin-left: 0.25rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .member-btn:hover {
    color: #004d4d; 
    text-decoration: underline;
  }

  .btn {
    margin-top: 1.5rem;
    width: 100%; 
    padding: 1rem;
    background-color: #008080; 
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #004d4d;
  }

  .form-row {
    width: 100%;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .form-row input {
    padding: 0.4rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .form-row input:focus {
    border-color: #008080; 
  }

  .form-row label {
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

   .show-password {
    margin-top: 1rem; 
    margin-right: 15rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: flex-start; 
  }
  
    @media (max-width: 480px) {
    .form {
      padding: 1.5rem; 
      margin-top: 5rem; 
    }

    .show-password {
      gap: 1rem;
      justify-content: flex-start; 
    }
  }

  @media (max-width: 768px) {
    .form {
      padding: 2rem; /* Consistent padding for medium screens */
    }

    .show-password {
      gap: 1rem;
      justify-content: flex-start;
    }
  }
`;

export default Wrapper;