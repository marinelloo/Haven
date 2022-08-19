import React from 'react';
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const StyledMainLayout = styled.div`
  .content {
    width: 100%;
    height: calc(100vh - 180px);
    display: flex;
    flex-direction: column;
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
            <Footer/>
        </StyledMainLayout>
    );
};

export default MainLayout;