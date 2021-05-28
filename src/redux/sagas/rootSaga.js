import { takeLatest } from "redux-saga/effects";
import { handleGetChartDataCountry } from "./handlers/countryChartData";
import { getGraphData } from "../slices/graphData";

export function* watcherSaga() {
  yield takeLatest(getGraphData.type, handleGetChartDataCountry);
}
