import { createSlice } from "@reduxjs/toolkit";

const conRender = createSlice({
  name: "conRender",
  initialState: {
    casesType: "cases",
    sortingType: "",
    dataShowing: "all",
    graphSliderValue: 200,
    graphSliderMaxValue: 300,
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
    changeGraphSliderVal: (state, action) => {
      const { value } = action.payload;
      state.graphSliderValue = value;
    },
    changeGraphSliderMaxValue: (state, action) => {
      state.graphSliderMaxValue = action.payload.value;
    },
  },
});

export const {
  casesTypeCases,
  casesTypeRecovered,
  casesTypeDeaths,
  sortTable,
  showTodayData,
  changeGraphSliderVal,
  changeGraphSliderMaxValue,
} = conRender.actions;

export default conRender.reducer;
