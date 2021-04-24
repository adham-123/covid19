import { createSlice } from "@reduxjs/toolkit";

const conRender = createSlice({
  name: "conRender",
  initialState: {
    casesType: "cases",
  },
  reducers: {
    casesTypeCases: (state) => {
      state.casesType = "cases";
    },
    casesTypeRecovered: (state) => {
      state.casesType = "recovered";
    },
    casesTypeDeaths: (state) => {
      state.casesType = "deaths";
    },
  },
});

export const {
  casesTypeCases,
  casesTypeRecovered,
  casesTypeDeaths,
} = conRender.actions;

export default conRender.reducer;
