import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import pic from "../../Images/earth.jpg";

export const fetchWorldwide = createAsyncThunk(
  "worldwide/fetchworldwide",
  async () => {
    const res = await fetch(
      "https://disease.sh/v3/covid-19/all?yesterday=true"
    );
    return res.json();
  }
);

const worldwide = createSlice({
  name: "worldwide",
  initialState: {
    loading: null,
    worldwide: [],
  },
  reducers: {},
  extraReducers: {
    [fetchWorldwide.pending]: (state) => {
      state.loading = true;
    },

    [fetchWorldwide.fulfilled]: (state, action) => {
      state.loading = false;
      const worldwide = action.payload;
      worldwide.name = "WorldWide";
      worldwide.flag = pic;
      worldwide.center = {
        lat: 0,
        lng: 0,
      };
      worldwide.zoom = 1;
      worldwide.casePerPerson =
        action.payload.population / action.payload.cases;
      worldwide.testPerPerson =
        action.payload.population / action.payload.tests;
      worldwide.deathPerPerson =
        action.payload.population / action.payload.deaths;
      worldwide.timeline = null;
      state.worldwide = worldwide;
    },

    [fetchWorldwide.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default worldwide.reducer;
