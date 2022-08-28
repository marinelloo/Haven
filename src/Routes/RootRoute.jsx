import React, {useState} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {loggedInRoutes, loggedOutRoutes, RouteNames} from "../constants/routes";
import {useSelector} from "react-redux";
import {selectUser} from "../store/features/user/userSlice";


const RootRoute = () => {
    const user = useSelector(selectUser);

    return (
        user
            ?
            <Routes>
                {loggedInRoutes.map(route =>
                    <Route path={route.path}
                            exact={route.exact}
                            element={route.element}
                            key = {route.path}
                    />
                )}
                <Route path={"*"} element = {<Navigate to={RouteNames.HOME}/>}/>
            </Routes>
            :
            <Routes>
                {loggedOutRoutes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           element={route.element}
                           key={route.path}
                    />
                )}
                <Route path={"*"} element = {<Navigate to={RouteNames.LOGIN}/>}/>
            </Routes>

    );
};

export default RootRoute;