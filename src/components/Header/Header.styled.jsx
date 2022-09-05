import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: #F4FAFF;
  border-bottom: #fefffc4d solid 1px;
  
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 0 12px 50px;
    gap: 100px;
  }
  
  .header__logo {
    margin: 0;
  }
  
  ul {
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
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