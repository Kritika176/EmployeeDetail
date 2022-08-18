import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./Login/reducer";

export const store = configureStore({
    reducer:{
        login:loginReducer
    }
});