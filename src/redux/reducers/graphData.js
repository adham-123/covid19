import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchGraphData = createAsyncThunk(
//     "graphData/fetchGraphData",
//     asynd () => {
//         const res = await fetch()
//     }
// )

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

      state.displayedData =
        type == "cases"
          ? [...state.cases]
          : type == "recovered"
          ? [...state.recovered]
          : type == "deaths"
          ? [...state.deaths]
          : [];
    },
    changeGraphDisplayData: (state, action) => {
      const { sliderValue, type, maxValue } = action.payload;
      type == "cases"
        ? (state.displayedData = state.cases.slice(sliderValue, maxValue))
        : type == "recovered"
        ? (state.displayedData = state.recovered.slice(sliderValue, maxValue))
        : (state.displayedData = state.deaths.slice(sliderValue, maxValue));
    },
  },
});

export const {
  setgraphDataCountry,
  setgraphDataCases,
  setgraphDisplayedData,
  changeGraphDisplayData,
} = graphData.actions;

export default graphData.reducer;
