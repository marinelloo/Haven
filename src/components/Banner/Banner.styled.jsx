import styled from "styled-components";
import background from "../../assets/images/background.png"

export const BannerStyled = styled.div`
  background-color: #F4FAFF;
  width: 100%;
  height: calc(100vh - 120px);
  display: grid;
  
  h1 {
    color: #483E58;
    padding-bottom: 20px;
  }
  
  p {
    color: #483E58;
  }
  
  strong {
    color: #3066BE;
  }
  
  .banner-buttons {
    display: flex;
    gap: 24px;
    padding-top: 20px;
  }
  
  .banner-wrapper {
    padding-top: 120px;
    padding-left: 80px;
    font-size: 18px;
    width: 40%;
  }
  
  .banner-wrapper__image {
    position: absolute;
    top: 0;
    right: 40%;
    margin: 0;
    padding: 0;
  }
  
  img {
    height: 100vh;
    width: 100%;
  }
`