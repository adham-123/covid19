import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import InfoBox from "./InfoBox";

import { useSelector, useDispatch } from "react-redux";
import {
  changeGraphSliderMaxValue,
  changeGraphSliderVal,
} from "../redux/reducers/conRender";
import {
  changeSelectedCountry,
  changeSelectedCountryTimeline,
} from "../redux/reducers/selectedCountry";

const nf = new Intl.NumberFormat();

const options = {
  animation: {
    duration: 0,
  },
  hover: {
    animationDuration: 0,
  },
  responsiveAnimationDuration: 0,
  legend: {
    display: true,
  },
  elements: {
    points: {
      radius: 0,
    },
    line: {
      tension: 0.4, // disables bezier curves
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return nf.format(tooltipItem.value);
      },
    },
  },
  hover: {
    mode: "index",
    intersect: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: true,
        },
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
          callback: function (value, index, values) {
            return nf.format(value);
          },
        },
      },
    ],
  },
};

function LineGraph() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.selectedCountry.country);

  const graphSliderValue = useSelector(
    (state) => state.conRender.graphSliderValue
  );
  const [chartData, setChartData] = useState([]);
  const [dataTotal, setDataTotal] = useState([]);
  const [daily, setDaily] = useState(true);
  const [cName, setCName] = useState("Loading...");
  const [total, setTotal] = useState({});
  const casesType = useSelector((state) => state.conRender.casesType);

  const buildChartData = (data, casesType = "cases") => {
    if (data) {
      let chartData = [];
      let lastDataPoint;
      if (data.cases !== undefined) {
        for (let date in data.cases) {
          if (lastDataPoint && daily) {
            let newDataPoint = {
              x: date,
              y:
                data[casesType][date] - lastDataPoint < 0
                  ? 0
                  : data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
          }
          if (lastDataPoint && daily === false) {
            let newDataPoint = {
              x: date,
              y: data[casesType][date] < 0 ? 0 : data[casesType][date],
            };
            chartData.push(newDataPoint);
          }

          lastDataPoint = data[casesType][date];
        }
        return chartData;
      }
    }
  };

  const buildChartTotal = (data, casesType = "cases") => {
    if (data) {
      let chartData = [];
      let lastDataPoint;
      if (data.cases !== undefined) {
        for (let date in data.cases) {
          if (lastDataPoint) {
            let newDataPoint = {
              x: date,
              y: data[casesType][date] < 0 ? 0 : data[casesType][date],
            };
            chartData.push(newDataPoint);
          }
          lastDataPoint = data[casesType][date];
        }
        return chartData;
      }
    }
  };

  useEffect(() => {
    if (country.name !== "WorldWide" && country.name !== undefined) {
      const fetchData = async () => {
        await fetch(
          `https://disease.sh/v3/covid-19/historical/${country.name}?lastdays=all`
        )
          .then((response) => response.json())
          .then((data) => {
            if (
              data.message ===
              "Country not found or doesn't have any historical data"
            ) {
              return null;
            }

            setChartData(buildChartData(data.timeline, casesType));
            setDataTotal(buildChartTotal(data.timeline, casesType));
            if (chartData) setCName(data.country);
            dispatch(changeGraphSliderVal({ value: 150 }));
          });
      };
      fetchData();
    } else {
      const fetchAllData = async () => {
        await fetch(
          `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
        )
          .then((response) => response.json())
          .then((data) => {
            data.country = "WorldWide";
            setCName(data.country);

            setChartData(buildChartData(data, casesType));
            setDataTotal(buildChartTotal(data, casesType));
            dispatch(changeGraphSliderVal({ value: 200 }));
          });
      };
      fetchAllData();
    }
  }, [country.name, daily, casesType]);

  //Slider useEffect to so the data showing the value user set on the slider
  useEffect(() => {
    if (chartData && dataTotal) {
      dispatch(changeGraphSliderMaxValue({ value: chartData.length }));
      let sliderValue = chartData.length - graphSliderValue;
      let c = chartData.slice(sliderValue, chartData.length);
      // props.setCountry({ ...country, timeline: c });
      dispatch(changeSelectedCountry({ ...country, timeline: c }));
      // dispatch(changeSelectedCountryTimeline(c));

      setTotal(dataTotal.slice(sliderValue, dataTotal.length));
    }
  }, [graphSliderValue, chartData, dataTotal]);

  const color =
    casesType === "cases"
      ? "rgba(200, 20, 50, 0.5)"
      : casesType === "recovered"
      ? "rgba(0, 200, 50, 0.5)"
      : "rgba(100, 100, 100, 0.5)";

  const borderColor =
    casesType === "cases"
      ? "rgb(200, 20, 50)"
      : casesType === "recovered"
      ? "rgb(0, 200, 50)"
      : "rgb(100, 100, 100)";

  return (
    <div
      style={{
        maxHeight: "100%",
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      {/* <div className="linegraph__graphbuttons">
        <h2 style={{ color: borderColor }}>{cName}</h2>
        <InfoBox
          content="Total"
          margin="0px"
          marginL="5px"
          bcolor={borderColor}
          shadow={` 0 6px ${color}`}
          click={() => setDaily(false)}
          activeColor="rgb(255, 255, 255)"
          active={daily === false}
          color="rgb(0, 0, 0)"
        />
        <InfoBox
          content="Daily"
          margin="0px"
          marginL="5px"
          bcolor={borderColor}
          shadow={` 0 6px ${color}`}
          click={() => setDaily(true)}
          activeColor="rgb(255, 255, 255)"
          active={daily === true}
          color="rgb(0, 0, 0)"
        />
      </div> */}

      <Line
        options={options}
        data={{
          datasets: [
            {
              backgroundColor: color,
              borderColor: borderColor,
              data: country.timeline,
              pointRadius: 1,
              fill: true,
              label: cName + " " + casesType,
              hoverRadius: 5,
            },
            // {
            //   backgroundColor: "rgba(25, 0, 255, 0.7)",
            //   borderColor: "rgb(25, 0, 255)",
            //   data: total,
            //   pointRadius: 1,
            //   fill: false,
            //   label: "Total",
            //   hoverRadius: 5,
            // },
          ],
        }}
      />
    </div>
  );
}

export default LineGraph;
