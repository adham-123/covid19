import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import InfoBox from "./InfoBox";

import { useSelector, useDispatch } from "react-redux";
import {
  changeGraphSliderMaxValue,
  changeGraphSliderVal,
} from "../redux/reducers/conRender";

import {
  setgraphDataCountry,
  setgraphDataCases,
  setgraphDisplayedData,
  changeGraphDisplaySlice,
} from "../redux/reducers/graphData";

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

  const graphCountry = useSelector((state) => state.graphData.country);
  const graphCases = useSelector((state) => state.graphData.cases);
  const graphDeaths = useSelector((state) => state.graphData.deaths);
  const graphRecovered = useSelector((state) => state.graphData.recovered);
  const graphDisplayData = useSelector(
    (state) => state.graphData.displayedData
  );

  const graphSliderValue = useSelector(
    (state) => state.conRender.graphSliderValue
  );

  const casesType = useSelector((state) => state.conRender.casesType);

  const buildChartData = (data) => {
    let chartData = [];
    let lastDataPoint;
    if (data !== undefined) {
      for (let date in data) {
        if (lastDataPoint) {
          let newDataPoint = {
            x: date,
            y: data[date] - lastDataPoint < 0 ? 0 : data[date] - lastDataPoint,
          };
          chartData.push(newDataPoint);
        }

        lastDataPoint = data[date] < 0 ? 0 : data[date];
      }
      return chartData;
    }
  };

  useEffect(() => {
    dispatch(setgraphDisplayedData({ type: "" }));
    setTimeout(function () {
      dispatch(setgraphDisplayedData({ type: casesType }));
    }, []);
  }, [casesType, graphCountry]);

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

            dispatch(setgraphDataCountry(data.country));

            dispatch(
              setgraphDataCases({
                cases: buildChartData(data.timeline.cases),
                recovered: buildChartData(data.timeline.recovered),
                deaths: buildChartData(data.timeline.deaths),
              })
            );

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

            dispatch(setgraphDataCountry(data.country));

            dispatch(
              setgraphDataCases({
                cases: buildChartData(data.cases),
                recovered: buildChartData(data.recovered),
                deaths: buildChartData(data.deaths),
              })
            );

            // setChartData(buildChartData(data, casesType));
            // setDataTotal(buildChartTotal(data, casesType));
            dispatch(changeGraphSliderVal({ value: 200 }));
          });
      };
      fetchAllData();
    }
  }, [country.name]);

  //Slider useEffect to so the data showing the value user set on the slider
  useEffect(() => {
    if (graphDisplayData) {
      let maxValue =
        casesType == "cases"
          ? graphCases.length
          : casesType == "recovered"
          ? graphRecovered.length
          : graphDeaths.length;
      dispatch(
        changeGraphSliderMaxValue({
          value: maxValue,
        })
      );
      let sliderValue = maxValue - graphSliderValue;

      dispatch(
        changeGraphDisplaySlice({ sliderValue: sliderValue, type: casesType })
      );
    }
  }, [graphSliderValue, graphCases, graphRecovered, graphDeaths]);

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
              data: graphDisplayData.length > 1 ? graphDisplayData : null,
              pointRadius: 1,
              fill: true,
              label: graphCountry + " " + casesType,
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
