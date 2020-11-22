import React, { useState } from "react";

import "../Styling/table.css";
import InfoBox from "./InfoBox";

const nf = new Intl.NumberFormat();

function Table({ dataShowing, ...props }) {
  // useEffect(() => {
  //   return function scrollTable() {
  //     var elem = document.getElementById(props.country.name);
  //     elem.scrollIntoView(true);
  //   };
  // }, [props.country]);

  // click = () => {
  //   this.scr.scrollIntoView();
  // }

  // const handleButtonClick = (scrol) => {
  //   document.getElementById(scrol).scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "nearest",
  //   });
  // };

  // var rows = document.querySelectorAll(props.country.name);

  // // line is zero-based
  // // line is the row number that you want to see into view after scroll
  // rows[9].scrollIntoView({
  //   behavior: "smooth",
  //   block: "center",
  // });

  return (
    <div className="table">
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: "13px",
        }}
      >
        <InfoBox
          content="All"
          click={() => props.setDataShowing("all")}
          onFocus={() => props.setSortType("")}
          width="50px"
          margin="0px"
          active={dataShowing === "all"}
          color="rgb(40, 40, 40)"
          activeColor="rgb(250, 250, 250)"
        />
        <InfoBox
          content="Today"
          click={() => props.setDataShowing("today")}
          onFocus={() => props.setSortType("")}
          width="50px"
          margin="0px"
          active={dataShowing === "today"}
          color="rgb(40, 40, 40)"
          activeColor="rgb(250, 250, 250)"
        />
      </span>

      <div className="table__data">
        <table>
          <thead>
            <tr>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                }}
                onClick={() => props.setSortType("countries")}
              >
                {props.sortType === "countries" ? (
                  <p>Country ▾</p>
                ) : (
                  <span>Country</span>
                )}
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                }}
                onClick={
                  dataShowing === "all"
                    ? () => props.setSortType("cases")
                    : () => props.setSortType("todayCases")
                }
              >
                {dataShowing === "today" ? (
                  <p style={{ fontSize: "10px", fontWeight: "lighter" }}>
                    Today
                  </p>
                ) : null}
                {props.sortType === "cases" ||
                props.sortType === "todayCases" ? (
                  <p>Cases ▾</p>
                ) : (
                  <span>Cases</span>
                )}
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                }}
                onClick={
                  dataShowing === "all"
                    ? () => props.setSortType("recovered")
                    : () => props.setSortType("todayRecovered")
                }
              >
                {dataShowing === "today" ? (
                  <p style={{ fontSize: "10px", fontWeight: "lighter" }}>
                    Today
                  </p>
                ) : null}
                {props.sortType === "recovered" ||
                props.sortType === "todayRecovered" ? (
                  <p>Recovered ▾</p>
                ) : (
                  <span>Recovered</span>
                )}
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                }}
                onClick={
                  dataShowing === "all"
                    ? () => props.setSortType("deaths")
                    : () => props.setSortType("todayDeaths")
                }
              >
                {dataShowing === "today" ? (
                  <p style={{ fontSize: "10px", fontWeight: "lighter" }}>
                    Today
                  </p>
                ) : null}
                {props.sortType === "deaths" ||
                props.sortType === "todayDeaths" ? (
                  <p>Deaths ▾</p>
                ) : (
                  <span>Deaths</span>
                )}
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                }}
                onClick={() => props.setSortType("active")}
              >
                {props.sortType === "active" ? (
                  <p>Active ▾</p>
                ) : (
                  <span>Active</span>
                )}
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                }}
              >
                Critical
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                }}
              >
                Tests
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                }}
              >
                Case/Person
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                }}
              >
                Death/Person
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                }}
              >
                Test/Person
              </th>
            </tr>
          </thead>
          <tbody>
            {props.countries.map((country) =>
              dataShowing === "all" ? (
                <tr key={country.name} id={country.name}>
                  <td>{country.name}</td>
                  <td>{nf.format(country.cases)}</td>
                  <td>{nf.format(country.recovered)}</td>
                  <td>{nf.format(country.deaths)}</td>
                  <td>{nf.format(country.active)}</td>
                  <td>{nf.format(country.critical)}</td>
                  <td>{nf.format(country.tests)}</td>
                  <td>{nf.format(country.casePerPerson)}</td>
                  <td>{nf.format(country.deathPerPerson)}</td>
                  <td>{nf.format(country.testPerPerson)}</td>
                </tr>
              ) : (
                <tr key={country.name} id={country.name}>
                  <td>{country.name}</td>
                  <td>{nf.format(country.todayCases)}</td>
                  <td>{nf.format(country.todayRecovered)}</td>
                  <td>{nf.format(country.todayDeaths)}</td>
                  <td>{nf.format(country.active)}</td>
                  <td>{nf.format(country.critical)}</td>
                  <td>{nf.format(country.tests)}</td>
                  <td>{nf.format(country.casePerPerson)}</td>
                  <td>{nf.format(country.deathPerPerson)}</td>
                  <td>{nf.format(country.testPerPerson)}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
