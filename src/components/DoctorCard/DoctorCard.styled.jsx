import styled from "styled-components";

export const DoctorCardStyled = styled.div`
  max-width: fit-content;
  background-color: white;
  margin: 20px;
  .doctor-wrapper {
    padding: 24px 12px;
    box-shadow: 0px 3px 8px 4px rgba(0, 0, 0, 0.07);
  }

  .doctor__content {
    display: flex;
    gap: 20px;
  }

  .doctor__avatar {
    border-radius: 50%;
    width: 150px;
    padding-bottom: 15px;
  }

  .doctor__rating {
    padding: 8px 30px;
    background-color: #eb9090;
    border-radius: 20px;
    text-align: center;
    color: white;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .doctor__profile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .doctor__btns {
    padding-top: 10px;
    display: flex;
    gap: 10px;
  }
`;
