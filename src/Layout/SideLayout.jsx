import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import He from "styled-components/dist/styled-components.browser.esm";

const StyledSideLayout = styled.div`
  
  .sidebar__content{
    display: grid;
  }
`

const SideLayout = (props) => {
    return (
        <StyledSideLayout>
                <Header/>
                <div className="sidebar__content">
                    {props.children}
                </div>
        </StyledSideLayout>
    );
};

export default SideLayout;