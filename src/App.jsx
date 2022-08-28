import React from 'react';
import RootRoute from "./Routes/RootRoute";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {persistor, store} from "./store/initStore";
import {PersistGate} from "redux-persist/integration/react";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <BrowserRouter>
                        <RootRoute/>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </>
    );
};

export default App;