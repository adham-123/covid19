import axios from "axios";

const requestGetChartDataCountry = (countryName) => {
  return axios.request({
    method: "get",
    url: `https://disease.sh/v3/covid-19/historical/${countryName}?lastdays=all`,
  });
};

const requestGetChartDataWorldWide = () => {
  return axios.request({
    method: "get",
    url: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`,
  });
};

export { requestGetChartDataCountry, requestGetChartDataWorldWide };
