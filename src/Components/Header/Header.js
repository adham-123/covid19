import React from "react";

import DropDown from "./DropDown";
import InfoBox from "../../Components/InfoBox";

import "../../Styling/header.css";

function Header(props) {
  const c = props.countries.find((c) => c.name === "WorldWide");

  const stickyFunction = () => {
    var header = document.getElementById("myHeader");
    var body = document.getElementById("bodyExtension");

    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      body.classList.add("bodyExtension");
    } else {
      header.classList.remove("sticky");
      body.classList.remove("bodyExtension");
    }
  };

  return (
    <div className="header">
      <button
        className="header__title"
        onClick={() => (
          props.setCasesType("cases"),
          props.setDataShowing("all"),
          props.setGraphSlider({ value: "200" }),
          props.setSortType(""),
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
            active={props.casesType === "cases"}
            click={() => props.setCasesType("cases")}
            padding={props.isMobile.width < 360 ? "3px" : "10px"}
            activeColor="rgb(225, 0, 0)"
            margin="1px"
            fontSize={props.isMobile.width < 420 ? "12px" : "15px"}
          />
          <InfoBox
            content="Recovered"
            active={props.casesType === "recovered"}
            click={() => props.setCasesType("recovered")}
            padding={props.isMobile.width < 360 ? "3px" : "10px"}
            activeColor="rgb(70, 250, 70)"
            margin="1px"
            fontSize={props.isMobile.width < 420 ? "12px" : "15px"}
          />
          <InfoBox
            content="Deaths"
            active={props.casesType === "deaths"}
            click={() => props.setCasesType("deaths")}
            padding={props.isMobile.width < 360 ? "3px" : "10px"}
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
