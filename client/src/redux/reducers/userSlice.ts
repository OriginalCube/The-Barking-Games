import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { id: null, usename: "", email: "", birthday: "", pet: [] },
}; // Create initial state outside so we can reset if needed

const userSlice = createSlice({
  name: "user", //Name that will be referenced
  initialState, //Initial state
  reducers: {
    // "ACTION" : (STATE[current state in the store that will be referenced using selector], ACTION [ACTION.PAYLOAD])
    // => run action here on what to do if called
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialState.value;
    },

    updatePet: (state: any, action) => {
      state.value.pet = [...action.payload];
    },
  },
});

export const { login, logout, updatePet } = userSlice.actions;

export default userSlice;
