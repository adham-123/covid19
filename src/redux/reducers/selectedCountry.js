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
    // changeSelectedCountryTimeline: (state, action) => {
    //   state = {
    //     ...state,
    //     country: { ...state.country, timeline: [action.payload] },
    //   };
    // },
    changeSelectedCountryTimeline: (state, action) => {
      const { timeline } = action.payload;
      state.country = { ...state.country, timeline: timeline };
    },
  },
});

export const {
  changeSelectedCountry,
  changeSelectedCountryTimeline,
} = selectedCountry.actions;

export default selectedCountry.reducer;
