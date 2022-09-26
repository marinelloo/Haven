import React from 'react';
import SideLayout from "./SideLayout";
import styled from "styled-components";
import userBackground from "../assets/images/user_background.png";
import UserNavigation from "../components/UserNavigation/UserNavigation";

const MyAccountStyled = styled.div`
  background-color: #f5f6f8;
  li:hover {
    background: #fefffc4d;
    padding: 0;
  }

  li {
    margin: 0;
    list-style: none;
    color: #483E58;
    font-size: 24px;
    cursor: pointer;
    display: block;
    transition: all 0.3s;
  }
  
  .active {
    color: lightpink;
  }
  
  display: grid;
  grid-template-areas:
    "sidebar content";
  grid-template-columns: 0.7fr 3fr;
    
  .account-sidebar {
    padding: 30px;
    grid-area: sidebar;
    background-color: #FFFFFF;
    font-size: 18px;
    height: 350px;
    margin: 20px;
    width: 300px;
    
    h3 {
      color: #483E58;
    }
    img {
      height: 100%;
    }
  }
  
  .account-content {
    grid-area: content;
    width: 100%;
    min-height: 100vh;
    padding: 20px;
  }
`


const UserLayout = (props) => {
    return (
        <SideLayout>
            <MyAccountStyled className={"account-wrapper"}>
                <UserNavigation/>
                <div className={"account-content"}>
                    <h1>
                        {props.children}
                    </h1>
                </div>
            </MyAccountStyled>
        </SideLayout>
    );
};

export default UserLayout;