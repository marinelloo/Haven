import styled from "styled-components";

export const LoginPageStyled = styled.div`
  background-color: #F4FAFF;
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
    padding:  8px 16px;
    width: 220px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
    border-color: transparent;
    border-radius: 13px;
  }
  
  .login-button {
    background-color: #3066BE;
    border: transparent;
    color: white;
    width: 100%;
    margin: 5px;
    padding: 8px 24px;
    border-radius: 10px;
    cursor: pointer;
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