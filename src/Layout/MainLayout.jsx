import React from 'react';
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const StyledMainLayout = styled.div`
  width: 100vw;
  
  
  .content {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 80px);
    overflow: auto;
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