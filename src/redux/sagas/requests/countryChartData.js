import axios from "axios";

export function requestGetChartData() {
  return axios.request({
    method: "get",
    url: "https://my-json-servere"
  });
}
