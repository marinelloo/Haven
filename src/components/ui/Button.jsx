import React from 'react';
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: 24px;
  background-color: transparent;
  color: #fefffc;
  border: 2px solid #fefffc;
  padding: 15px 30px;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  
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