import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: solid 1px #f1f3f5;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 10;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    height: 110px;
  }

  .nav-links {
    display: flex;
    gap: 40px;
    list-style-type: none;
    margin-right: 6rem;
    margin-top: 1rem;
  }

  .login-btn {
    align-self: center;
    color: #fff;
    background-color: #008080;
    border-radius: 3rem;
    width: 7rem;
  }

  .login-btn:hover {
    background-color: rgb(9, 161, 161);
    cursor: pointer;
  }

  li {
    display: inline;
  }

  .nav-item {
    text-decoration: none;
    color: #008080;
    font-size: 16px;
    font-weight: 500;
    transition: color 0.6s ease;
  }

  .nav-item:hover {
    color: #004d4d;
    text-decoration: underline;
    text-underline-offset: 0.7rem;
    padding-bottom: 1rem;
  }

  .hamburger-menu {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 21px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .hamburger-menu.open .bar:nth-child(1) {
    transform: rotate(45deg);
    transform-origin: top left;
  }

  .hamburger-menu.open .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger-menu.open .bar:nth-child(3) {
    transform: rotate(-45deg);
    transform-origin: bottom left;
  }

  .hamburger-menu .bar {
    height: 4px;
    width: 100%;
    background-color: #008080;
    border-radius: 4px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      width: 100%;
      gap: 12px;
      background-color: #fff;
      position: absolute;
      top: 10vh;
      left: 0;
      padding-top: 2rem;
      padding-bottom: 1rem;
      box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
      z-index: 100;
      opacity: 0;
      transform: translateY(-30px);  
      transition: opacity 0.6s ease, transform 0.6s ease; 
      margin-top: 2rem;
    }

    .nav-links.mobile {
      display: flex;
      opacity: 1;
      transform: translateY(0);
    }

    .hamburger-menu {
      display: flex;
      margin-right: 2rem;
    }
  }
`;

export default Wrapper;