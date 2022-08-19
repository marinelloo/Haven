import React, {useState} from 'react';
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import Home from "../Scenes/Home/Home";
import Doctors from "../Scenes/Doctors/Doctors";
import ErrorPage from "../Scenes/ErrorPage/ErrorPage";
import LoginPage from "../Scenes/LoginPage/LoginPage";

const RootRoute = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path={"/"} element = {<React.Fragment><Outlet/></React.Fragment>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/doctors" element={<Doctors/>}/>
                <Route path="/error-page" element={ <ErrorPage /> }/>
                <Route
                    path="*"
                    element={ <Navigate to="/error-page" /> }
                />
            </Route>
        </Routes>
    );
};

export default RootRoute;