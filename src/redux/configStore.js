import { configureStore } from "@reduxjs/toolkit";
import postingReducer from './module/postingReducer';
import loadingReducer from "./module/loadingReducer";

const store = configureStore({
    reducer: {
        posting:postingReducer,
        loading:loadingReducer
    }
})

export default store;