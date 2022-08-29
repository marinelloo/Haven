import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import Filter from "../components/SideBar/Filter";

const StyledSideLayout = styled.div`
  background-color:  #f5f5f5;
  
  
  .sidebar-wrapper {
    display: grid;
  }
  .sidebar{
    grid-area: sidebar;
    background-color: white;
  }
  
`

const SideLayout = (props) => {
    return (
        <StyledSideLayout>
            <Header/>
            <div className="sidebar-wrapper">
                <div className="sidebar__content">
                    {props.children}
                </div>
            </div>
            <Footer/>
        </StyledSideLayout>
    );
};

export default SideLayout;