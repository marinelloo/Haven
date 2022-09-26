import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {RouteNames} from "../../constants/routes";
import {logout, selectUser} from "../../store/features/user/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {UserNavigationStyled} from "./UserNavigation.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClipboardList, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";

const UserNavigation = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const appointmentsIcon = <FontAwesomeIcon icon={faClipboardList}/>
    const logoutIcon = <FontAwesomeIcon icon={faArrowRightFromBracket}/>

    const handleSubmit = (values) => {
        dispatch(logout({
            user
        }))
    }

    return (
        <UserNavigationStyled className={"account-sidebar"}>
            <div className={"account-list"}>
                <NavLink to = {RouteNames.MY_ACCOUNT} style={({ isActive }) =>
                    (isActive ? {color: '#3066BE'} : {color: '#483E58'})}>
                    <div className={"list-item"}>
                        {userIcon} My Account
                    </div>
                </NavLink>
                <NavLink to={RouteNames.MY_APPOINTMENTS} style={({ isActive }) =>
                    (isActive ? {color: '#3066BE'} : {color: '#483E58'})}>
                    <div className={"list-item"}>
                        {appointmentsIcon} My Appointments
                    </div>
                </NavLink>
                <NavLink to={RouteNames.LOGIN} style={({ isActive }) =>
                    (isActive ? {color: '#3066BE'} : {color: '#483E58'})} onClick={handleSubmit}>
                    <div className={"list-item"}>
                        {logoutIcon} Logout
                    </div>
                </NavLink>
            </div>
        </UserNavigationStyled>
    );
};

export default UserNavigation;