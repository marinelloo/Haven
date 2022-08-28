import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import Filter from "../components/SideBar/Filter";

const StyledSideLayout = styled.div`
  background-color:  #f5f5f5;

  .sidebar-wrapper {
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
    background-color: white;
  }
  
  .sidebar__content {
    grid-area: content;
    padding: 20px;
  }
  
`

const SideLayout = (props) => {
    return (
        <StyledSideLayout>
            <Header/>
            <div className="sidebar-wrapper">
                <Filter/>
                <div className="sidebar__content">
                    {props.children}
                </div>
            </div>
            <Footer/>
        </StyledSideLayout>
    );
};

export default SideLayout;