import { configureStore } from "@reduxjs/toolkit";
import postingReducer from './module/postingReducer';
import loadingReducer from "./module/loadingReducer";
import userReducer from "./module/userReducer";

const store = configureStore({
    reducer: {
        posting:postingReducer,
        loading:loadingReducer,
        user:userReducer
    }
})

export default store;