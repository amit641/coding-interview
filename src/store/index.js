import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./test/testSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
