import { createSlice } from "@reduxjs/toolkit";

const selectedCountry = createSlice({
  name: "selectedCountry",
  initialState: {
    country: { timeline: 0 },
  },
  reducers: {
    changeSelectedCountry: (state, action) => {
      state.country = action.payload;
    },
    changeSelectedCountryTimeline: (state, action) => {
      state = {
        ...state,
        country: { ...state.country, timeline: action.payload },
      };
    },
  },
});

export const {
  changeSelectedCountry,
  changeSelectedCountryTimeline,
} = selectedCountry.actions;

export default selectedCountry.reducer;
