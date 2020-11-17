import React from "react";

import "../Styling/slider.css";

function Slider(props) {
  const handleChange = (event) => {
    props.setGraphSlider({ value: event.target.value });
  };

  return (
    <div className="slidecontainer">
      <p style={{ minWidth: "110px" }}>Past {props.graphSlider.value} Days:</p>
      <input
        type="range"
        min="10"
        max={props.sliderMax}
        step="1"
        value={props.graphSlider.value}
        onChange={handleChange}
        className="slider"
      />
    </div>
  );
}

export default Slider;
