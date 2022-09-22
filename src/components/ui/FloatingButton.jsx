import React from 'react';
import styled from "styled-components";


const FloatingButtonStyled = styled.button`
  background-color: #3066BE;
  border: transparent;
  color: white;
  padding: 20px;
  border-radius: 80px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  position: absolute;
  bottom: 30px;
  right: 10px;
  box-shadow: 2px 2px 3px #999;
  animation: bounce 2s ease-in-out forwards;
  animation-iteration-count: infinite;

  @keyframes bounce {
  0% {
    transform: translateY(0px)
  }
  50% {
    transform: translateY(20px)
  }
  
  }
  
  @keyframes bounce-shadow {
  0% {
    width: 1%;
    height: 2px;
    opacity: .1;
  }
  
  50% {
    width: 90%;
    height: 6px;
    opacity: 0.3;
  }
  
  100% {
    width: 1%;
    height: 0px;
    opacity: 0;
  }
  }
  
  
  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  }
`


const FloatingButton = (props) => {
    return (
        <FloatingButtonStyled>
            {props.children}
        </FloatingButtonStyled>
    );
};

export default FloatingButton;