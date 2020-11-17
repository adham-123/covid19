import React from "react";

import ".././Styling/infoBox.css";

function InfoBox(props) {
  let styling = {
    padding: props.padding,
    width: props.width,
    color: props.color,
    borderRadius: props.radius,
    backgroundColor: props.bcolor,
    boxShadow: props.shadow,
    margin: props.margin,
  };

  if (props.active) {
    styling = {
      padding: props.padding,
      width: props.width,
      color: props.activeColor,
      borderRadius: props.radius,
      backgroundColor: props.bcolor,
      margin: props.margin,
      // fontSize: "24px",
    };
  }

  return (
    <div
      className="infoBox"
      style={{ margin: props.margin, marginLeft: props.marginL }}
    >
      <button
        className="infoBox__button"
        onClick={props.click}
        style={styling}
        onFocus={props.onFocus}
      >
        <span>
          <p>{props.content}</p>
        </span>
      </button>
    </div>
  );
}

export default InfoBox;
