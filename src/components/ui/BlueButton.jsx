import React from 'react';
import styled from "styled-components";

const BlueButtonStyled = styled.button`
  font-size: 18px;
  background-color: #74A1F8;
  color: #fefffc;
  padding: 15px 20px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  border: none;
  
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