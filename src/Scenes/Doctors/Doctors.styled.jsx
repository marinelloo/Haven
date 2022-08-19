import styled from "styled-components";

export const DoctorsStyled = styled.div`
  .sidebar-wrapper {
    background-color: white;
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: 
    "header  header"
    "sidebar content"
    "footer  footer";
  }

    .sidebar{
      grid-area: sidebar;
      height: 100%;
      background-color: #fafafa;
    }

    .sidebar__content {
      grid-area: content;
      padding: 20px;
      height: calc(100vh - 180px);
      overflow: auto;
    }
`