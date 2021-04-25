import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import conrenderReducer from "./ducks/conRender";
import logger from "redux-logger";

const reducer = combineReducers({
  conRender: conrenderReducer,
});

const firstMiddleware = (store) => (next) => (action) => {
  return next(action);
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(firstMiddleware, logger);

const store = configureStore({
  reducer,
  middleware,
});

export default store;
