import LoginPage from "../Scenes/LoginPage/LoginPage";
import MyAccount from "../Scenes/MyAccount/MyAccount";
import Home from "../Scenes/Home/Home";
import Doctors from "../Scenes/Doctors/Doctors";
import React from 'react';
import DoctorPage from "../Scenes/DoctorPage/DoctorPage";

export const RouteNames = {
    LOGIN: '/login',
    MY_ACCOUNT: '/my-account',
    HOME: '/home',
    DOCTORS: '/doctors',
    DOCTOR_PAGE: '/doctors/:id'
}

export const loggedInRoutes = [
    {path: RouteNames.MY_ACCOUNT, exact: true, element: <MyAccount/>},
    {path: RouteNames.HOME, exact: true, element: <Home/>},
    {path: RouteNames.DOCTORS, exact: true, element: <Doctors/>},
    {path: RouteNames.DOCTOR_PAGE, exact: true, element: <DoctorPage/>}
]

export const loggedOutRoutes = [
    {path: RouteNames.LOGIN, exact: true, element: <LoginPage/>},
    {path: RouteNames.HOME, exact: false, element: <Home/>},
    {path: RouteNames.DOCTORS, exact: false, element: <Doctors/>}
]