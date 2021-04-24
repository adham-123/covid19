import { createSlice } from "@reduxjs/toolkit";

const conRender = createSlice({
  name: "conRender",
  initialState: {
    casesType: "cases",
    sortingType: "",
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
    sortTable: (state, action) => {
      const { sortType } = action.payload;
      state.sortingType = sortType;
    },
  },
});

export const {
  casesTypeCases,
  casesTypeRecovered,
  casesTypeDeaths,
  sortTable,
} = conRender.actions;

export default conRender.reducer;
