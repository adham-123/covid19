import { createSlice } from "@reduxjs/toolkit";

const conRender = createSlice({
  name: "conRender",
  initialState: {
    casesType: "cases",
    sortingType: "",
    dataShowing: "all",
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
    showTodayData: (state, action) => {
      const { dataShow } = action.payload;
      state.dataShowing = dataShow;
    },
  },
});

export const {
  casesTypeCases,
  casesTypeRecovered,
  casesTypeDeaths,
  sortTable,
  showTodayData,
} = conRender.actions;

export default conRender.reducer;
