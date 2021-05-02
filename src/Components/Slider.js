import React from "react";

import "../Styling/slider.css";
import { useDispatch, useSelector } from "react-redux";

import { changeGraphSliderVal } from "../redux/reducers/conRender";

function Slider(props) {
  const dispatch = useDispatch();
  const graphSliderValue = useSelector(
    (state) => state.conRender.graphSliderValue
  );
  const graphSliderMaxValue = useSelector(
    (state) => state.conRender.graphSliderMaxValue
  );

  return (
    <div className="slidecontainer">
      <p style={{ minWidth: "110px" }}>Past {graphSliderValue} Days:</p>
      <input
        type="range"
        min="10"
        max={graphSliderMaxValue}
        step="1"
        value={graphSliderValue}
        onChange={(e) =>
          dispatch(changeGraphSliderVal({ value: e.target.value }))
        }
        className="slider"
      />
    </div>
  );
}

export default Slider;
