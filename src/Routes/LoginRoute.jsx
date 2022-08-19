import React from 'react';
import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import LoginPage, {ConnectedApp} from "../Scenes/LoginPage/LoginPage";
import RootRoute from "./RootRoute";
import {useSelector} from "react-redux"
import {isLoggedIn} from "../store/selectors/userSelectors";

const LoginRoute = (Scene) => {
    const userLoggedIn = useSelector(isLoggedIn);
    const location = useLocation();

    const renderForNotLoggedUser = (Scene) => {
        if (!userLoggedIn) return Scene
        return <Navigate to={"/home"}/>
    }

    const renderForLoggedUser = (Scene) => {
        if (userLoggedIn) return Scene
        return <Navigate to={"/login"}/>
    }

    return (
        <Routes>
            <Route path={"/login"} element={renderForNotLoggedUser(<ConnectedApp />)}/>
            <Route path={"*"} element={renderForLoggedUser(<RootRoute/>)}/>
        </Routes>
    )
};

export default LoginRoute;