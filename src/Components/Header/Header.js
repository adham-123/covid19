import React from "react";

import DropDown from "./DropDown";
import InfoBox from "../../Components/InfoBox";

import "../../Styling/header.css";

import { useDispatch, useSelector } from "react-redux";

import {
  casesTypeCases,
  casesTypeDeaths,
  casesTypeRecovered,
  changeGraphSliderVal,
  showTodayData,
  sortTable,
} from "../../redux/ducks/conRender";

function Header(props) {
  const dispatch = useDispatch();
  const casesType = useSelector((state) => state.conRender.casesType);
  const c = props.countries.find((c) => c.name === "WorldWide");

  const stickyFunction = () => {
    var header = document.getElementById("myHeader");
    var wholeHeader = document.getElementById("header");
    var body = document.getElementById("bodyExtension");
    var sticky = header.offsetTop;

    if (props.isMobile.width < 710) {
      if (window.pageYOffset < 50) {
        header.classList.remove("sticky");
        body.classList.remove("bodyExtension");
      } else {
        header.classList.add("sticky");
        body.classList.add("bodyExtension");
      }
    } else {
      wholeHeader.classList.add("headerSticky");
    }
  };

  return (
    <div className="header">
      <button
        className="header__title"
        onClick={() => (
          dispatch(casesTypeCases()),
          dispatch(showTodayData({ dataShow: "all" })),
          dispatch(changeGraphSliderVal({ value: 200 })),
          // dispatch(sortTable({ sortType: "" })),
          c !== undefined ? props.setCountry(c) : null
        )}
        style={{
          border: "0px",
          backgroundColor: "rgba(230, 230, 230,1)",
          cursor: "pointer",
          outline: "none",
        }}
      >
        Covid 19 Tracker
      </button>

      <img
        alt={`${props.country.name} Flag`}
        src={props.country.flag}
        className="header_image"
      />

      <div className="header__dd_img" id="myHeader">
        <div className="header__right">
          <DropDown
            countries={props.countries}
            changeCountry={props.changeCountry}
            country={props.country}
          />
        </div>

        <div className="header__infoBox">
          <InfoBox
            content="Cases"
            active={casesType === "cases"}
            click={() => dispatch(casesTypeCases())}
            padding={props.isMobile.width < 365 ? "3px" : "10px"}
            activeColor="rgb(225, 0, 0)"
            margin="1px"
            fontSize={props.isMobile.width < 420 ? "12px" : "15px"}
          />
          <InfoBox
            content="Recovered"
            active={casesType === "recovered"}
            click={() => dispatch(casesTypeRecovered())}
            padding={props.isMobile.width < 365 ? "3px" : "10px"}
            activeColor="rgb(70, 250, 70)"
            margin="1px"
            fontSize={props.isMobile.width < 420 ? "12px" : "15px"}
          />
          <InfoBox
            content="Deaths"
            active={casesType === "deaths"}
            click={() => dispatch(casesTypeDeaths())}
            padding={props.isMobile.width < 365 ? "3px" : "10px"}
            activeColor="rgb(50, 50, 50)"
            margin="1px"
            fontSize={props.isMobile.width < 420 ? "12px" : "15px"}
          />
        </div>
      </div>
      {
        (window.onscroll = () => {
          stickyFunction();
        })
      }
    </div>
  );
}

export default Header;
