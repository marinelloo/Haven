import React from 'react';
import {useSelector} from "react-redux";
import {selectUser} from "../../store/features/user/userSlice";
import MainLayout from "../../Layout/MainLayout";
import styled from "styled-components";

const MyAccountStyled = styled.div`
  display: grid;
    
  .account-sidebar {
    grid-area: sidebar;
    background-color: white;
    padding: 30px;
  }
  
  .account-content {
    grid-area: content;
  }
`


const MyAccount = () => {
    const user = useSelector(selectUser);
    return (
        <MainLayout>
            <MyAccountStyled className={"my-account"}>
                <div className={"account-sidebar"}>
                    <div>My Account</div>
                    <div>My Appointments</div>
                    <div>Logout</div>
                </div>
                <div className={"account-content"}>
                    <h1>
                        Welcome, {user.name}
                    </h1>
                </div>
            </MyAccountStyled>
        </MainLayout>


    );
};

export default MyAccount;