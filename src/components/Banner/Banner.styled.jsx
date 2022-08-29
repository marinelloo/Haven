import styled from "styled-components";
import background from "../../assets/images/background.png"

export const BannerStyled = styled.div`
  background-color: #74A1F8;
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  
  h1 {
    color: white;
  }
  
  .banner-buttons {
    display: flex;
    gap: 24px;
  }
  
  .banner-wrapper {
    padding: 20px 30px;
    display: flex;
    flex-direction: row;
  }
  .banner-wrapper  {
    font-size: 18px;
  }
  
  img {
    height: 400px;
    object-fit: contain;
  }
`