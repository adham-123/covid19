import React from "react";

import Maps from "./GoogleMap.js";

import { useSelector } from "react-redux";

function Map() {
  const countries = useSelector((state) => state.countries.countries);
  const selectedCountry = useSelector((state) => state.selectedCountry.country);
  const casesType = useSelector((state) => state.conRender.casesType);

  const color =
    casesType === "cases"
      ? "rgba(200, 20, 50, 0.5)"
      : casesType === "recovered"
      ? "rgba(0, 200, 50, 0.5)"
      : "rgba(100, 100, 100, 0.5)";

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <div
        style={{
          padding: "3px",
          // borderBottom: "1px solid rgb(180, 180, 180)",
        }}
      >
        <p style={{ display: "inline" }}>Map of </p>
        <h3 style={{ display: "inline", color: color }}>{casesType}</h3>
      </div>
      <div style={{ position: "relative", height: "250px", width: "100%" }}>
        <Maps
          countries={countries}
          country={selectedCountry}
          casesType={casesType}
        />
      </div>

      <div>
        <p
          style={{
            fontSize: "13px",
            color: "gray",
            paddingLeft: "10px",
            display: "inline",
            position: "relative",
            height: "100%",
          }}
        >
          Source:
        </p>
        <a
          href="https://www.worldometers.info/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "gray", display: "inline", fontSize: "10px" }}
        >
          Worldometer
        </a>
      </div>
    </div>
  );
}

export default Map;
