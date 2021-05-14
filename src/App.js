import React, { useState, useEffect } from "react";

import "./Styling/App.css";

import Header from "./Components/Header/Header.js";
import LineGraph from "./Components/LineGraph";
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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  const sortType = useSelector((state) => state.conRender.sortingType);
  const worldwide = useSelector((state) => state.worldwide.worldwide);
  const countries = useSelector((state) => state.countries.countries);

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
        <ErrorBoundary>
          <Header isMobile={isMobile} />
        </ErrorBoundary>
      </div>
      <div className="app__body" id="bodyExtension">
        <div className="app__dataLayout">
          <ErrorBoundary>
            <DataLayout />
          </ErrorBoundary>
        </div>
        <div className="app__map_wrapper">
          <ErrorBoundary>
            <Map />
          </ErrorBoundary>
        </div>
        <div className="app__graph">
          <div className="app__graph_graph">
            <ErrorBoundary>
              <LineGraph />
            </ErrorBoundary>
          </div>
          <ErrorBoundary>
            <Slider />
          </ErrorBoundary>
        </div>
      </div>
      <div className="app__footer">
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
