import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {RouteNames} from "../../constants/routes";
import {logout, selectUser} from "../../store/features/user/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {UserNavigationStyled} from "./UserNavigation.styled";


const UserNavigation = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(logout({
            user
        }))
    }

    return (
        <UserNavigationStyled className={"account-sidebar"}>
            <div className={"account-list"}>
                <NavLink to = {RouteNames.MY_ACCOUNT} style={({ isActive }) =>
                    (isActive ? {color: '#eb9090'} : {color: 'white'})}>
                        My Account
                </NavLink>
                <NavLink to={RouteNames.MY_APPOINTMENTS} style={({ isActive }) =>
                    (isActive ? {color: '#eb9090'} : {color: 'white'})}>
                        My Appointments
                </NavLink>
                <NavLink to={RouteNames.LOGIN} style={({ isActive }) =>
                    (isActive ? {color: '#eb9090'} : {color: 'white'})} onClick={handleSubmit}>
                    Logout
                </NavLink>
            </div>
        </UserNavigationStyled>
    );
};

export default UserNavigation;