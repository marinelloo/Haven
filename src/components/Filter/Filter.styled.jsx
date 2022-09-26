import styled from "styled-components";

export const FilterStyled = styled.aside`
    grid-area: sidebar;
    background-color: #fafafa;
    padding: 20px;
    height: 100%;
    
    h3 {
      font-size: 24px;
    }
  
    h4 {
      font-size: 18px;
    }
  
    ul {
      list-style: none;
    }
  
    label {
      padding: 5px;
    }
  
    .sidebar-filter__checkbox {
      gap: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  
    .sidebar-filter__profile {
      display: flex;
      flex-direction: column;
    }
  
    .sidebar-filter__checkbox input {
      content: "";
      width: 24px;
      height: 24px;
    }
  
    .sidebar__search {
      height: 24px;
      margin-bottom: 10px;
      width: 100%;
    }
`