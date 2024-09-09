"use client"

import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./reducers/clientReducer";


export const store = configureStore({
    reducer: {
        client: clientReducer,

    },
})



export default store;