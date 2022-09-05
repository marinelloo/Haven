import styled from "styled-components";
import background from "../../assets/images/background.png"

export const BannerStyled = styled.div`
  background-color: #F4FAFF;
  width: 100%;
  height: 395px;
  display: grid;
  
  h1 {
    color: #483E58;
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
  }
  
  .banner-wrapper {
    padding-left: 80px;
    font-size: 18px;
    width: 40%;
  }
  .banner-wrapper  {
    
  }
  
  .banner-wrapper__image {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
  }
  
  img {
    height: 500px;
    width: 100%;
    object-fit: contain;
  }
`