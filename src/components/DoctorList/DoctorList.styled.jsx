import styled from "styled-components";

export const DoctorListStyled = styled.div`
  .list-wrapper {
    padding: 25px 104px;
  }

  .cards-list {
    display: grid;
    grid-template-columns: 1fr;
  }

  .btn-light.view-all {
    width: 15%;
    justify-content: center;

    a {
      font-size: 20px;
    }
  }

  .btn-light {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    border: 1px solid #483e58;
    border-radius: 10px;
    color: #3c3745;

    a {
      color: #3c3745;
      font-family: Cercle, sans-serif;
      font-size: 16px;
    }

    .filters {
      padding-left: 5px;
      font-family: Jost, sans-serif;
      font-size: 20px;
    }
  }
`;