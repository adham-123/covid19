import { createSlice } from "@reduxjs/toolkit";

const selectedCountry = createSlice({
  name: "selectedCountry",
  initialState: {
    country: {},
  },
  reducers: {
    changeSelectedCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

export const { changeSelectedCountry } = selectedCountry.actions;

export default selectedCountry.reducer;
