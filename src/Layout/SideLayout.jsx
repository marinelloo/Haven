import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import Filter from "../components/SideBar/Filter";

const StyledSideLayout = styled.div`
  
  .sidebar__content{
    display: grid;
    height: calc(100vh - 80px);
  }
`

const SideLayout = (props) => {
    return (
        <StyledSideLayout>
            <Header/>
                <div className="sidebar__content">
                    {props.children}
                </div>
            <Footer/>
        </StyledSideLayout>
    );
};

export default SideLayout;