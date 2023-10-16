import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
    reducer:{
        // reducers  should key-value pair
        counter:counterSlice
    }
})