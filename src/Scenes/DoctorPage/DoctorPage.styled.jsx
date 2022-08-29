import styled from "styled-components";

export const DoctorPageStyled = styled.div`
  padding: 40px 200px;
  .doctor__content {
    display: flex;
    gap: 20px;
  }
  
  .doctor__profile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .doctor__avatar {
    border-radius: 50%;
    padding-bottom: 20px;
  }
  
  .doctor__btns {
    padding: 20px 0;
  }
  
  .doctor__description {
    padding-bottom: 20px;
  }
  .book-modal {
    width: 100%;
  }
`