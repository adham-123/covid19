import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";

import conrenderReducer from "./slices/conRender";
import countries from "./slices/countries";
import worldwide from "./slices/worldwide";
import selectedCountry from "./slices/selectedCountry";
import graphData from "./slices/graphData";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

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

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  firstMiddleware,
  sagaMiddleware,
  // logger,
];

const store = configureStore({
  reducer: reducer,
  // devTools: process.env.NODE_ENV !== "production",
  middleware: middleware,
});
sagaMiddleware.run(watcherSaga);

export default store;
