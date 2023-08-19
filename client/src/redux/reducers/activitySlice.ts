import { createSlice } from "@reduxjs/toolkit";

//Initial
const initialState = {
  value: {
    date: "",
    activity: [],
  },
};

//Reducers
const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    upadateActivity: (state: any, action) => {
      state.value.activity = action.payload;
    },

    updateDate: (state: any) => {
      state.value = initialState;
    },
  },
});

//Actions
export const { upadateActivity, updateDate } = activitySlice.actions;

export default activitySlice;
