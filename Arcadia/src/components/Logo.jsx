import React from "react";
import styled from "styled-components";
import logo from "../assets/images/arcadia-logo.png"; 


const LogoImage = styled.img`
  width: 7rem; 
  height: 7rem; 
  margin-left: 3rem;
`;

const Logo = () => {
  return <LogoImage src={logo} alt="arcadia" />;
};

export default Logo;