import { createSlice } from "@reduxjs/toolkit";

//Initial
const initialState = {
  value: {
    activity: [],
    week: [],
    today: [],
  },
};

//To track week progress
const currentDay = new Date();
const firstDay = new Date();
firstDay.setDate(currentDay.getDate() - 7);

//Reducers
const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    upadateActivity: (state: any, action) => {
      state.value.activity = action.payload;
      //Sorts activity done today.
      action.payload.forEach((e: any) => {
        const actionDay = new Date(e.createdAt);
        if (new Date().getDate() === actionDay.getDate()) {
          state.value.today = [...state.value.today, e];
        }
        if (actionDay <= currentDay && actionDay >= firstDay) {
          state.value.week = [...state.value.week, e];
        }
      });
    },

    addActivity: (state: any, action) => {
      state.value.activity = [...state.value.activity, action.payload];
      state.value.today = [...state.value.today, action.payload];
      state.value.week = [...state.value.week, action.payload];
    },

    updateDate: (state: any) => {
      state.value = initialState;
    },
  },
});

//Actions
export const { upadateActivity, updateDate, addActivity } =
  activitySlice.actions;

export default activitySlice;
