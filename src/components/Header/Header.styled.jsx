import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: lightskyblue;
  height: 80px;
  border-bottom: #fefffc4d solid 1px;
  
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
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
    background: #fefffc4d;
  }
  
  li {
    margin: 0;
    list-style: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    display: block;
    padding: 25px 15px;
    transition: all 0.3s;
  }
`