import React from "react";

import "../Styling/dataLayout.css";
import Table from "../Components/Table.js";
import PieChart from "./PieChart";

const nf = new Intl.NumberFormat();

function nFormatter(num) {
  const format = [
    { value: 1e18, symbol: "E" },
    { value: 1e15, symbol: "P" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "G" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "k" },
    { value: 1, symbol: "" },
  ];
  const formatIndex = format.findIndex((data) => num >= data.value);
  return (
    (num / format[formatIndex === -1 ? 6 : formatIndex].value).toFixed(2) +
    format[formatIndex === -1 ? 6 : formatIndex].symbol
  );
}

function DataLayout({
  country,
  countries,
  casesType,
  sortType,
  setSortType,
  setDataShowing,
  dataShowing,
}) {
  return (
    <div className="dataLayout">
      <div className="datalayout__overview">
        <div
          style={{
            borderBottom: "1px solid gray",
            width: "100%",
            display: "table",
          }}
        >
          <p
            style={{
              padding: "10px",
              backgroundColor: "rgb(255, 255, 255)",
              borderTopRightRadius: "9px",
              borderTopLeftRadius: "9px",
              boxShadow:
                "inset 100px 0px 100px -50px rgb(170, 170, 170), inset -100px 0px 100px -50px rgb(170, 170, 170)",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            <b style={{ fontSize: "22px", fontFamily: "cursive" }}>
              {country.name}
            </b>{" "}
            Overview
          </p>
        </div>
        <div className="datalayout__overview_in">
          <div
            className="datalayout__overview_box"
            style={{ borderLeft: "hidden" }}
          >
            <p className="datalayout__overview_title">
              Cases <br />
              <span className="datalayout__overview_boldnumber">
                {nFormatter(country.cases)}
              </span>{" "}
              <br />
              <span className="datalayout__overview_dailynumber">
                + {nf.format(country.todayCases)}
              </span>
            </p>
          </div>
          <div className="datalayout__overview_box">
            <p className="datalayout__overview_title">
              Recovered <br />
              <span className="datalayout__overview_boldnumber">
                {nFormatter(country.recovered)}
              </span>{" "}
              <br />
              <span className="datalayout__overview_dailynumber">
                + {nf.format(country.todayRecovered)}
              </span>
            </p>
          </div>
          <div className="datalayout__overview_box">
            <p className="datalayout__overview_title">
              Deaths <br />
              <span className="datalayout__overview_boldnumber">
                {nFormatter(country.deaths)}
              </span>{" "}
              <br />
              <span className="datalayout__overview_dailynumber">
                + {nf.format(country.todayDeaths)}
              </span>
            </p>
          </div>
        </div>
        <div className="datalayout__overview_in">
          <div
            className="datalayout__overview_box"
            style={{ borderLeft: "hidden" }}
          >
            <p className="datalayout__overview_title">
              Active <br />{" "}
              <span className="datalayout__overview_number">
                {nFormatter(country.active)}
              </span>
            </p>
          </div>
          <div className="datalayout__overview_box">
            <p className="datalayout__overview_title">
              Critical <br />{" "}
              <span className="datalayout__overview_number">
                {nFormatter(country.critical)}
              </span>
            </p>
          </div>
          <div className="datalayout__overview_box">
            <p className="datalayout__overview_title">
              Tests <br />{" "}
              <span className="datalayout__overview_number">
                {nFormatter(country.tests)}
              </span>
            </p>
          </div>
        </div>
        <div className="datalayout__overview_in">
          <div
            className="datalayout__overview_box"
            style={{ borderLeft: "hidden" }}
          >
            <p className="datalayout__overview_title">
              Case/Person <br />{" "}
              <span className="datalayout__overview_number">
                {nFormatter(country.casePerPerson)}
              </span>
            </p>
          </div>
          <div className="datalayout__overview_box">
            <p className="datalayout__overview_title">
              Test/Person <br />{" "}
              <span className="datalayout__overview_number">
                {nFormatter(country.testPerPerson)}
              </span>
            </p>
          </div>
          <div className="datalayout__overview_box">
            <p className="datalayout__overview_title">
              Deaths/Person <br />{" "}
              <span className="datalayout__overview_number">
                {nFormatter(country.deathPerPerson)}
              </span>
            </p>
          </div>
        </div>
        <p
          style={{ paddingLeft: "8px", paddingBottom: "2px", fontSize: "10px" }}
        >
          <b>Case/Person</b> = <b>X</b> (Every <b>X</b> people there's one Case
          )
        </p>
      </div>
      <div className="datalayout__table">
        <Table
          countries={countries}
          country={country}
          setSortType={setSortType}
          sortType={sortType}
          setDataShowing={setDataShowing}
          dataShowing={dataShowing}
        />
      </div>
      {/* <div className="datalayout__graph_pie">
        <PieChart countries={countries} casesType={casesType} />
      </div> */}
    </div>
  );
}

export default DataLayout;