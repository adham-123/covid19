import { configureStore, combineReducers } from "@reduxjs/toolkit";
import conrenderReducer from "./reducers/conRender";
import countries from "./reducers/countries";
import logger from "redux-logger";
import worldwide from "./reducers/worldwide";
import selectedCountry from "./reducers/selectedCountry";
import graphData from "./reducers/graphData";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducer = combineReducers({
  conRender: conrenderReducer,
  countries: countries,
  worldwide: worldwide,
  selectedCountry: selectedCountry,
  graphData: graphData,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const firstMiddleware = (store) => (next) => (action) => {
  return next(action);
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(firstMiddleware);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: middleware,
});

export default store;
