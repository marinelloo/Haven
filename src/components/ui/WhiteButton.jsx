import React from 'react';
import styled from "styled-components";

const WhiteButtonStyled = styled.button`
  font-size: 16px;
  background-color: transparent;
  color: #483E58;
  border: transparent;
  text-decoration: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  margin: 5px;
  padding: 8px 24px;
  border-radius: 10px;
  
  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
  }
`


const WhiteButton = (props) => {
    return (
        <WhiteButtonStyled type = {props.type}>
            {props.children}
        </WhiteButtonStyled>
    );
};

export default WhiteButton;