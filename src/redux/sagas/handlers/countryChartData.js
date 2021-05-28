import { call, put } from "redux-saga/effects";
import { setgraphDataCases } from "../../slices/graphData";
import {
  requestGetChartDataCountry,
  requestGetChartDataWorldWide,
} from "../requests/countryChartData";

function* handleGetChartDataCountry(action) {
  try {
    const { payload } = action;
    const { countryName } = payload;
    const response = yield call(requestGetChartDataCountry, countryName);
    const { data } = response;
    // yield put(setgraphDataCases({ ...data }));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function* handleGetChartDataCountryWorldWide() {
  try {
    const response = yield call(requestGetChartDataWorldWide);
    const { data } = response;
    yield put(setgraphDataCases({ ...data }));
  } catch (err) {
    console.log(err);
  }
}

export { handleGetChartDataCountry, handleGetChartDataCountryWorldWide };
