import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ countries, casesType }) {
  const [topFive, setTopFive] = useState();

  useEffect(() => {
    let topCountries = [];
    casesType === "cases"
      ? (topCountries = countries.sort((a, b) => (a.cases > b.cases ? -1 : 1)))
      : casesType === "recovered"
      ? (topCountries = countries.sort((a, b) =>
          a.recovered > b.recovered ? -1 : 1
        ))
      : (topCountries = countries.sort((a, b) =>
          a.deaths > b.deaths ? -1 : 1
        ));

    let c = topCountries.slice(1, 6);

    setTopFive(c);
  }, [countries, casesType]);

  let cName = [];
  let cValue = [];

  countries.length > 1 ? (cName = topFive.map((c) => c.name)) : (cName = []);

  if (countries.length > 1) {
    casesType === "cases"
      ? (cValue = topFive.map((c) => c.cases))
      : casesType === "recovered"
      ? (cValue = topFive.map((c) => c.recovered))
      : (cValue = topFive.map((c) => c.deaths));
  }

  const options = {
    labels: cName,
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: cValue,
      },
    ],
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Pie
        data={options}
        options={{
          title: {
            display: true,
            text: `Top 5 countries ${casesType} `,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default PieChart;
