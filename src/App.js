import React, { useState, useEffect } from "react";

import "./Styling/App.css";

import Header from "./Components/Header/Header.js";
import LineGraph from "./Components/LineGraph";
import pic from "./Images/earth.jpg";
import Slider from "./Components/Slider.js";
import DataLayout from "./Components/DataLayout";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchCountries,
  pushToCountries,
  updateCountries,
} from "./redux/reducers/countries";
import { fetchWorldwide } from "./redux/reducers/worldwide";
import { changeSelectedCountry } from "./redux/reducers/selectedCountry";

function App() {
  const sortType = useSelector((state) => state.conRender.sortingType);
  const worldwide = useSelector((state) => state.worldwide.worldwide);
  const countries = useSelector((state) => state.countries.countries);
  const country = useSelector((state) => state.selectedCountry.country);

  const dispatch = useDispatch();

  const isMobile = useWindowSize();

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  }

  useEffect(() => {
    const sortData = (data) => {
      const sortedData = [...data];

      return sortType === "cases"
        ? sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1))
        : sortType === "deaths"
        ? sortedData.sort((a, b) => (a.deaths > b.deaths ? -1 : 1))
        : sortType === "recovered"
        ? sortedData.sort((a, b) => (a.recovered > b.recovered ? -1 : 1))
        : sortType === "todayCases"
        ? sortedData.sort((a, b) => (a.todayCases > b.todayCases ? -1 : 1))
        : sortType === "todayDeaths"
        ? sortedData.sort((a, b) => (a.todayDeaths > b.todayDeaths ? -1 : 1))
        : sortType === "todayRecovered"
        ? sortedData.sort((a, b) =>
            a.todayRecovered > b.todayRecovered ? -1 : 1
          )
        : sortType === "active"
        ? sortedData.sort((a, b) => (a.active > b.active ? -1 : 1))
        : sortType === "countries"
        ? sortedData.sort((a, b) => (a.name < b.name ? -1 : 1))
        : sortedData.sort((a, b) => (a > b ? -1 : 1));
    };
    const sorted = sortData(countries);
    dispatch(updateCountries(sorted));
  }, [sortType]);

  const onChange = (event) => {
    const { value } = event.target;
    let countryS = countries.find((c) => c.name === value);

    if (countryS !== undefined) {
      dispatch(changeSelectedCountry(countryS));
      document.activeElement.blur();
    }
  };

  useEffect(() => {
    return dispatch(fetchCountries()), dispatch(fetchWorldwide());
  }, []);

  useEffect(() => {
    return dispatch(
      pushToCountries(worldwide),
      dispatch(changeSelectedCountry(worldwide))
    );
  }, [worldwide]);

  return (
    <div className="app">
      <div className="app__header" id="header">
        <Header changeCountry={onChange} isMobile={isMobile} />
      </div>
      <div className="app__body" id="bodyExtension">
        <div className="app__dataLayout">
          <DataLayout />
        </div>
        <div className="app__map_wrapper">
          <Map />
        </div>
        <div className="app__graph">
          <div className="app__graph_graph">
            <LineGraph />
          </div>
          <Slider />
        </div>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
