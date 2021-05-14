import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const res = await fetch(
      "https://disease.sh/v3/covid-19/countries?yesterday=true"
    );
    return res.json();
  }
);

const countries = createSlice({
  name: "countries",
  initialState: {
    loading: null,
    countries: [],
  },
  reducers: {
    pushToCountries: (state, action) => {
      state.countries.push(action.payload);
    },
    updateCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
  extraReducers: {
    [fetchCountries.pending]: (state) => {
      state.loading = true;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.loading = false;
      const countriesS = action.payload.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
        cases: country.cases,
        todayCases: country.todayCases,
        recovered: country.recovered,
        todayRecovered: country.todayRecovered,
        deaths: country.deaths,
        todayDeaths: country.todayDeaths,
        flag: country.countryInfo.flag,
        center: {
          lat: country.countryInfo.lat,
          lng: country.countryInfo.long,
        },
        zoom: 4,
        active: country.active,
        critical: country.critical,
        tests: country.tests,
        casePerPerson: country.oneCasePerPeople,
        testPerPerson: country.oneTestPerPeople,
        deathPerPerson: country.oneDeathPerPeople,
        timeline: null,
        // todayUpdated: 0,
      }));
      state.countries = countriesS;
    },
    [fetchCountries.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { pushToCountries, updateCountries } = countries.actions;

export default countries.reducer;
