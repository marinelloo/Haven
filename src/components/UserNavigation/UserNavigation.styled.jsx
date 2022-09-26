import styled from "styled-components";

export const UserNavigationStyled = styled.aside`

  .account-list {
    display: flex;
    flex-direction: column;
    font-size: 22px;
    gap: 15px
    
  }
  
  .list-item {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .active {
    color: #eb9090;
    
    a {
      font-weight: bold;
    }
  }
`