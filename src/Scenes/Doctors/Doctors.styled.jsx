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
      padding: 10px;
    }
  
    .sidebar__search {
      margin: 10px;
    }
  
      
      .gender-list {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      
      .language-list {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
  
    .sidebar-filter {
      height: 100%;
    }

    .sidebar__content {
      grid-area: content;
      padding: 20px;
      height: 100vh;
      overflow: auto;
    }
    
  .list-filter {
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`