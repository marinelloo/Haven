import React from 'react';
import styled from "styled-components";

const BlueButtonStyled = styled.button`
  background-color: #3066BE;
  border: transparent;
  color: white;
  margin: 5px;
  padding: 8px 24px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  
  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  }
`


const BlueButton = (props) => {
    return (
        <BlueButtonStyled type={props.type}>
            {props.children}
        </BlueButtonStyled>
    );
};

export default BlueButton;