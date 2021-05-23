import { call, put } from "redux-saga/effects";
import { setgraphDataCases } from "../../slices/graphData";
import { requestGetChartData } from "../requests/countryChartData";

export function* handleGetChartData(action) {
  try {
    const response = yield call(requestGetChartData);
    const { data } = response;
    yield put(setgraphDataCases({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
