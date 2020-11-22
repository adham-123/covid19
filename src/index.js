import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Click on title reset the app
//search country sticky
// Graph on hover show not only cases, But also recoverd and deathsnpm (u have to save deaths and recovered with the array in cache so u can have access)
// After user zoom out, if different country selected from dropdown, map doesn't zoom back to it. Check the setZoom on country change
// When a country is selected table scrolls to that country and highlights raw
// Title style "Covid 19 Tracker"
// Check out why the map circles load twice when deaths selected. Maybe cuz "cases" is set to default

// total button not centered on apple
//table header not sticky on apple
//get maps to stay up on smaller screen
