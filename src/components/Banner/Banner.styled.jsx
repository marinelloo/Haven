import styled from "styled-components";

export const BannerStyled = styled.div`
  background-color: #83c7f2;
  color: white;
  display: flex;
  justify-content: space-around;
  height: 400px;
  .banner-buttons {
    display: flex;
    gap: 24px;
    padding-top: 95px;
  }
  
  .banner-wrapper {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
  }
  
  img {
    max-height: 100%;
  }
`