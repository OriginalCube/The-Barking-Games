import { createSlice } from "@reduxjs/toolkit";

//Initial
const initialState = {
  value: {
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

    addActivity: (state: any, action) => {
      state.value.activity = [...state.value.activity, action.payload];
      state.value.today = [...state.value.today, action.payload];
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
