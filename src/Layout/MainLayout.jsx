import React from 'react';
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const StyledMainLayout = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
`

const MainLayout = (props) => {
    return (
        <StyledMainLayout>
            <Header/>
            <div className="content">
                {props.children}
            </div>
        </StyledMainLayout>
    );
};

export default MainLayout;