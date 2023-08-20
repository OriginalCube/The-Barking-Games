import { createSlice } from "@reduxjs/toolkit";

//Initial
const initialState = {
  value: {
    date: Date(),
    activity: [],
    today: [],
  },
};

//Reducers
const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    upadateActivity: (state: any, action) => {
      state.value.activity = action.payload;
      //Sorts activity done today.
      action.payload.forEach((e: any) => {
        if (new Date().getDate() === new Date(e.createdAt).getDate()) {
          state.value.today = [...state.value.today, e];
        }
      });
    },

    updateDate: (state: any) => {
      state.value = initialState;
    },
  },
});

//Actions
export const { upadateActivity, updateDate } = activitySlice.actions;

export default activitySlice;
