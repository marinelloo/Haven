import React from 'react';
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const StyledMainLayout = styled.div`
  display: flex;
  flex-direction: column;
  
  .content {
    width: 100%;
    height: fit-content;
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