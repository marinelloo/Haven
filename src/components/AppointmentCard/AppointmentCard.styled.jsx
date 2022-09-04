import styled from "styled-components";

export const AppointmentCardStyled = styled.div`
  margin: 10px;
  
  p {
    font-size: 16px;
    color: gray;
  }
  
  .appointment-card {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 3px 8px 4px rgba(0, 0, 0, 0.07);
    margin: 20px 0;
  }
  
  .appointment-date {
    display: flex;
  }

  .appointment-card__doctor {
    display: flex;
    gap: 10px;
  }
  
  .doctor-info {
    display: flex;
    flex-direction: column;
  }
  
  .doctor-name:hover {
    text-decoration: underline;
  }
  .doctorPhoto {
    img {
      border-radius: 50%;
    }
  }
`