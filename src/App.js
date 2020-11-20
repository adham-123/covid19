import React, { useState, useEffect } from "react";

import "./Styling/App.css";

import Header from "./Components/Header/Header.js";
import LineGraph from "./Components/LineGraph";
import pic from "./Images/earth.jpg";
import Slider from "./Components/Slider.js";
import DataLayout from "./Components/DataLayout";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [casesType, setCasesType] = useState("cases");
  const [sortType, setSortType] = useState("");
  const [graphSlider, setGraphSlider] = useState({ value: "200" });
  const [graphsliderMax, setGraphSliderMax] = useState("300");
  const [dataShowing, setDataShowing] = useState("all"); //map today/all

  const isMobile = useWindowSize();
  console.log(isMobile);

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
    setCountries(sorted);
  }, [sortType]);

  const onChange = (event) => {
    const { value } = event.target;
    let countryS = countries.find((c) => c.name === value);

    if (countryS !== undefined) {
      setCountry(countryS);
      document.activeElement.blur();
    }
  };

  useEffect(() => {
    const selectedCountry = async () => {
      await fetch("https://disease.sh/v3/covid-19/all?yesterday=true")
        .then((response) => response.json())
        .then((data) => {
          const worldwide = data;
          worldwide.name = "WorldWide";
          worldwide.flag = pic;
          worldwide.center = {
            lat: 0,
            lng: 0,
          };
          worldwide.zoom = 1;
          worldwide.casePerPerson = data.population / data.cases;
          worldwide.testPerPerson = data.population / data.tests;
          worldwide.deathPerPerson = data.population / data.deaths;
          worldwide.timeline = null;
          // worldwide.todayUpdated = 0;
          setCountries((countries) => countries.concat(worldwide));
          setCountry(worldwide);
        });
    };
    selectedCountry();
  }, []);

  useEffect(() => {
    const selectedCountry = async () => {
      await fetch(`https://disease.sh/v3/covid-19/countries?yesterday=true`)
        .then((response) => response.json())
        .then((data) => {
          const countriesS = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
            cases: country.cases,
            todayCases: country.todayCases,
            recovered: country.recovered,
            todayRecovered: country.todayRecovered,
            deaths: country.deaths,
            todayDeaths: country.todayDeaths,
            flag: country.countryInfo.flag,
            center: {
              lat: country.countryInfo.lat,
              lng: country.countryInfo.long,
            },
            zoom: 4,
            active: country.active,
            critical: country.critical,
            tests: country.tests,
            casePerPerson: country.oneCasePerPeople,
            testPerPerson: country.oneTestPerPeople,
            deathPerPerson: country.oneDeathPerPeople,
            timeline: null,
            // todayUpdated: 0,
          }));
          setCountries((countries) => countries.concat(countriesS));
        });
    };
    selectedCountry();
  }, []);

  // useEffect(() => {
  //   const selectedCountry = async () => {
  //     await fetch("https://disease.sh/v3/covid-19/all?yesterday=false")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const index = countries.findIndex((e, index) => {
  //           return e.name === "WorldWide";
  //         });
  //         if (countries[index] !== -1 && countries.length > 1) {
  //           countries[index] = {
  //             ...countries[index], //spread notation for the selected object
  //             todayUpdated: data.todayCases,
  //           };
  //           setCountries(countries);
  //         }
  //       });
  //   };
  //   selectedCountry();
  // }, [country]);

  return (
    <div className="app">
      <div className="app__header">
        <Header
          countries={countries}
          changeCountry={onChange}
          country={country}
          casesType={casesType}
          setCasesType={setCasesType}
          setDataShowing={setDataShowing}
          setGraphSlider={setGraphSlider}
          setSortType={setSortType}
          setCountry={setCountry}
          isMobile={isMobile}
        />
      </div>
      <div className="app__body" id="bodyExtension">
        <div className="app__dataLayout">
          <DataLayout
            country={country}
            countries={countries}
            casesType={casesType}
            setSortType={setSortType}
            sortType={sortType}
            dataShowing={dataShowing}
            setDataShowing={setDataShowing}
          />
        </div>
        <div className="app__map_wrapper">
          <Map countries={countries} country={country} casesType={casesType} />
        </div>
        <div className="app__graph">
          <div className="app__graph_graph">
            <LineGraph
              casesType={casesType}
              country={country}
              setCountry={setCountry}
              graphSlider={graphSlider}
              setGraphSlider={setGraphSlider}
              setSliderMax={setGraphSliderMax}
            />
          </div>
          <Slider
            graphSlider={graphSlider}
            setGraphSlider={setGraphSlider}
            sliderMax={graphsliderMax}
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
