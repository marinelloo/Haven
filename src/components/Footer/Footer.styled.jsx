import styled from "styled-components";

export const FooterStyled = styled.div`
  height: 100px;
  background-color: #3066BE;
  margin-top: auto;
  
  .footer__wrapper {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content:space-around;
    flex-direction: row;
  }
  
  .footer__list {
    display: flex;
    list-style: none;
    color: white;
    gap: 20px;
    font-size: 20px;
  }
`