import { configureStore, combineReducers } from "@reduxjs/toolkit";
import conrenderReducer from "./reducers/conRender";
import countries from "./reducers/countries";
import logger from "redux-logger";
import worldwide from "./reducers/worldwide";
import selectedCountry from "./reducers/selectedCountry";
import graphData from "./reducers/graphData";

const reducer = combineReducers({
  conRender: conrenderReducer,
  countries: countries,
  worldwide: worldwide,
  selectedCountry: selectedCountry,
  graphData: graphData,
});

const firstMiddleware = (store) => (next) => (action) => {
  return next(action);
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(firstMiddleware);

const store = configureStore({
  reducer,
  middleware,
});

export default store;
