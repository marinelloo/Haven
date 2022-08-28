import styled from "styled-components";
import background from "../../assets/images/background.png"

export const BannerStyled = styled.div`
  background-image: url(${background});
  background-size: contain;
  color: white;
  display: flex;
  justify-content: space-around;
  
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