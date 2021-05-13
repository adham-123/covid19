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
    displayedDataMax: 0,
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

      if (type == "cases") {
        state.displayedData = [...state.cases];
        state.displayedDataMax = state.cases.length;
      } else if (type == "recovered") {
        state.displayedData = [...state.recovered];
        state.displayedDataMax = state.recovered.length;
      } else if (type == "deaths") {
        state.displayedData = [...state.deaths];
        state.displayedDataMax = state.deaths.length;
      } else {
        state.displayedData = [];
      }
    },
    changeGraphDisplaySlice: (state, action) => {
      const { sliderValue, type } = action.payload;
      type == "cases"
        ? (state.displayedData = state.cases.slice(
            sliderValue,
            state.displayedDataMax
          ))
        : type == "recovered"
        ? (state.displayedData = state.recovered.slice(
            sliderValue,
            state.displayedDataMax
          ))
        : (state.displayedData = state.deaths.slice(
            sliderValue,
            state.displayedDataMax
          ));
    },
  },
});

export const {
  setgraphDataCountry,
  setgraphDataCases,
  setgraphDisplayedData,
  changeGraphDisplaySlice,
} = graphData.actions;

export default graphData.reducer;
