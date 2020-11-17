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

// const isMobile = useWindowSize();
// console.log(isMobile);

// function useWindowSize() {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     // Handler to call on window resize
//     function handleResize() {
//       // Set window width/height to state
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Call handler right away so state gets updated with initial window size
//     handleResize();

//     // Remove event listener on cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []); // Empty array ensures that effect is only run on mount

//   return windowSize;
// }

//http://adham-123.github.io/covid-tracker
