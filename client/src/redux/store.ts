import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import activitySlice from "./reducers/activitySlice";

export const store = configureStore({
  reducer: {
    // Where reducer are held to be referenced later
    user: userSlice.reducer,
    activity: activitySlice.reducer,
  },
});

export default store;
