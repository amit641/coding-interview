import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const getDashboardData = (state) => state.dashboard;
export const { setDashboardData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
