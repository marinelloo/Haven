import styled from "styled-components";

export const LoginPageStyled = styled.div`
  background-color: #74A1F8;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input {
    margin: 5px;
    width: 220px;
  }
  
  .form-error {
    color: red;
    margin: 0;
    font-size: 14px;
  }
  
  label {
    display: block;
    margin: 10px 0;
    text-align-last: left;
  }

  label input {
    display: block;
  }
  
  .errors {
    background: red;
    color: #fff;
    margin: 10px;
  }
`