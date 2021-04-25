import { configureStore, combineReducers } from "@reduxjs/toolkit";
import conrenderReducer from "./ducks/conRender";

const reducer = combineReducers({
  conRender: conrenderReducer,
});

const store = configureStore({
  reducer,
});

export default store;
