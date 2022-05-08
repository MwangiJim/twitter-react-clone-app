import { configureStore } from "@reduxjs/toolkit";
import { TwitterReducer } from "./reducer/reducerSlice";

let store = configureStore({
    reducer:{
        twReducer:TwitterReducer.reducer
    }
})

export default store;