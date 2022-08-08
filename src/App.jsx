import React from 'react';
import Home from "./Scenes/Home/Home";
import RootRoute from "./Routes/RootRoute";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <RootRoute/>
            </BrowserRouter>
        </>

    );
};

export default App;