import {configureStore, createStore} from "@reduxjs/toolkit";
import userReducer from '../store/features/user/userSlice'
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    stateReconciler: hardSet,
};

const initPersistReduser = persistReducer(persistConfig, rootReducer);

export const store = createStore(initPersistReduser);
export const persistor = persistStore(store);