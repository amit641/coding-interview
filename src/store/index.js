import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./test/testSlice";
import dashboardReducer from "./dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    counter: counterReducer,
  },
});
