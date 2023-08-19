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
    addActivity: (state: any, action) => {
      state.value.activity = [...state.value.activity, action.payload];
    },

    updateDate: (state: any) => {
      state.value = initialState;
    },
  },
});

//Actions
export const { addActivity, updateDate } = activitySlice.actions;

export default activitySlice;
