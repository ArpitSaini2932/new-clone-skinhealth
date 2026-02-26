import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import analysisReducer from "./analysisSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    analysis: analysisReducer,
  },
});

export default store;