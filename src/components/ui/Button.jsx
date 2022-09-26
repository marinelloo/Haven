import React from 'react';
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: 24px;
  background-color: #3066BE;
  color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  border: transparent;
  padding: 16px 32px;
  
  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
  }
`


const Button = (props) => {
    return (
        <ButtonStyled>
            {props.children}
        </ButtonStyled>
    );
};

export default Button;