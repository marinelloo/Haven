import React from 'react';
import styled from "styled-components";

const InputStyled = styled.input`
    width: 100%;
  
`

const Input = (props) => {
    return (
        <InputStyled type="text" placeholder={props.placeholder}/>
    );
};

export default Input;