import { takeLatest } from "redux-saga/effects";
import { handleGetChartData } from "./handlers/countryChartData";
import { getGraphData } from "../slices/graphData";

export function* watcherSaga() {
  yield takeLatest(getGraphData.type, handleGetChartData);
}
