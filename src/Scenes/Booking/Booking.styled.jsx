import styled from "styled-components";

export const BookingStyled = styled.div`
  height: 100vh;
  width: 80%;
  padding: 20px;
  .site-calendar-demo-card {
    width: 300px;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
  }
  
  .booking-form {
    display: flex;
    flex-direction: column;
  }
  
  .work-time {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
  
  input {
    margin: 10px;
  }
`