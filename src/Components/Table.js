import React, { useState } from "react";

import "../Styling/table.css";
import InfoBox from "./InfoBox";

import { useDispatch, useSelector } from "react-redux";

import { showTodayData, sortTable } from "../redux/ducks/conRender";

const nf = new Intl.NumberFormat();

function Table({ ...props }) {
  const dispatch = useDispatch();
  const sortingType = useSelector((state) => state.conRender.sortingType);
  const dataShowing = useSelector((state) => state.conRender.dataShowing);
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
          click={() => dispatch(showTodayData({ dataShow: "all" }))}
          onFocus={() => dispatch(sortTable({ sortType: "" }))}
          width="50px"
          margin="0px"
          active={dataShowing === "all"}
          color="rgb(40, 40, 40)"
          activeColor="rgb(250, 250, 250)"
        />
        <InfoBox
          content="Today"
          click={() => dispatch(showTodayData({ dataShow: "today" }))}
          onFocus={() => dispatch(sortTable({ sortType: "" }))}
          width="60px"
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
                onClick={() => dispatch(sortTable({ sortType: "countries" }))}
              >
                {sortingType === "countries" ? (
                  <p>Country ▾</p>
                ) : (
                  <span>Country</span>
                )}
              </th>
              <th
                onClick={
                  dataShowing === "all"
                    ? () => dispatch(sortTable({ sortType: "cases" }))
                    : () => dispatch(sortTable({ sortType: "todayCases" }))
                }
              >
                {dataShowing === "today" ? (
                  <p style={{ fontSize: "10px", fontWeight: "lighter" }}>
                    Today
                  </p>
                ) : null}
                {sortingType === "cases" || sortingType === "todayCases" ? (
                  <p>Cases ▾</p>
                ) : (
                  <span>Cases</span>
                )}
              </th>
              <th
                onClick={
                  dataShowing === "all"
                    ? () => dispatch(sortTable({ sortType: "recovered" }))
                    : () => dispatch(sortTable({ sortType: "todayRecovered" }))
                }
              >
                {dataShowing === "today" ? (
                  <p style={{ fontSize: "10px", fontWeight: "lighter" }}>
                    Today
                  </p>
                ) : null}
                {sortingType === "recovered" ||
                sortingType === "todayRecovered" ? (
                  <p>Recovered ▾</p>
                ) : (
                  <span>Recovered</span>
                )}
              </th>
              <th
                onClick={
                  dataShowing === "all"
                    ? () => dispatch(sortTable({ sortType: "deaths" }))
                    : () => dispatch(sortTable({ sortType: "todayDeaths" }))
                }
              >
                {dataShowing === "today" ? (
                  <p style={{ fontSize: "10px", fontWeight: "lighter" }}>
                    Today
                  </p>
                ) : null}
                {sortingType === "deaths" || sortingType === "todayDeaths" ? (
                  <p>Deaths ▾</p>
                ) : (
                  <span>Deaths</span>
                )}
              </th>
              <th onClick={() => dispatch(sortTable({ sortType: "active" }))}>
                {sortingType === "active" ? (
                  <p>Active ▾</p>
                ) : (
                  <span>Active</span>
                )}
              </th>
              <th>Critical</th>
              <th>Tests</th>
              <th>Case/Person</th>
              <th>Death/Person</th>
              <th>Test/Person</th>
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
