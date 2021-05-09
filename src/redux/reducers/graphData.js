import { createSlice } from "@reduxjs/toolkit";

const graphData = createSlice({
  name: "graphData",
  initialState: {
    country: "",
    cases: [],
    deaths: [],
    recovered: [],
    displayedData: [],
  },

  reducers: {
    setgraphDataCountry: (state, action) => {
      state.country = action.payload;
    },
    setgraphDataCases: (state, action) => {
      const { cases, recovered, deaths } = action.payload;
      state.cases = cases;
      state.recovered = recovered;
      state.deaths = deaths;
    },
    setgraphDisplayedData: (state, action) => {
      const { type } = action.payload;
      type == "cases"
        ? (state.displayedData = state.cases)
        : type == "recovered"
        ? (state.displayedData = state.recovered)
        : (state.displayedData = state.deaths);
    },
  },
});

export const {
  setgraphDataCountry,
  setgraphDataCases,
  setgraphDisplayedData,
} = graphData.actions;

export default graphData.reducer;
