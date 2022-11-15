import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../reducers/messageReducer";

const store = configureStore({
    messageReducer,
})

export default store;