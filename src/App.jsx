import React from 'react';
import RootRoute from "./Routes/RootRoute";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/initStore";


const App = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <RootRoute/>
                </BrowserRouter>
            </Provider>
        </>
    );
};

export default App;