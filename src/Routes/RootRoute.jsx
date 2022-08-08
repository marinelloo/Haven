import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../Scenes/Home/Home";
import Doctors from "../Scenes/Doctors/Doctors";

const RootRoute = () => {
    return (
        <Routes>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/doctors"} element={<Doctors/>}/>
        </Routes>
    );
};

export default RootRoute;