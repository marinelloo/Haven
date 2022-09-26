import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: #F4FAFF;
  box-shadow: 0px 3px 12px 4px rgba(0, 0, 0, 0.04);
  
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0 12px 50px;
    gap: 100px;
  }
  
  .header__logo {
    margin: 0;
  }

  .account-icon {
    font-size: 28px;
  }
  
  ul {
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0 20px 0 0;
    overflow: hidden;
    align-items: center;
  }
  
  li:hover {
    color: #3066BE
  }
  
  li {
    margin: 0;
    list-style: none;
    color: #483E58;
    font-size: 20px;
    cursor: pointer;
    display: block;
    padding: 25px 15px;
    transition: all 0.3s;
  }
  
  a {
    text-decoration: none;
    color: white;
  }
`