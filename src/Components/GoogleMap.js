import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Circle,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function CircleComponent({
  setShowingInfoWindow,
  setCurrentCountry,
  country,
  currentZoom,
  casesType,
  onClose,
}) {
  if (country.name === "WorldWide") {
    return null;
  }

  const options = {
    casesOptions: {
      strokeColor: "rgba(255, 0, 0)",
      strokeWeight: 0.5,
      fillColor: "rgba(255, 0, 0)",
      fillOpacity: 0.35,
      clickable: true,
      draggable: false,
      editable: false,
      visible: true,
      zIndex: 1,
    },
    recoveredOptions: {
      strokeColor: "rgba(0, 255, 150)",
      strokeWeight: 1.5,
      fillColor: "rgba(0, 255, 0)",
      fillOpacity: 0.35,
      clickable: true,
      draggable: false,
      editable: false,
      visible: true,
      zIndex: 1,
    },
    deathsOptions: {
      strokeColor: "rgba(70, 70, 70)",
      strokeWeight: 1.5,
      fillColor: "rgba(100, 100, 100)",
      fillOpacity: 0.35,
      clickable: true,
      draggable: false,
      editable: false,
      visible: true,
      zIndex: 1,
    },
  };

  const onCircleClick = () => {
    setCurrentCountry(country);
    setShowingInfoWindow(true);
  };

  const selectedOptions =
    casesType === "cases"
      ? options.casesOptions
      : casesType === "deaths"
      ? options.deathsOptions
      : options.recoveredOptions;

  const selectedType =
    casesType === "cases"
      ? country.cases
      : casesType === "recovered"
      ? country.recovered
      : country.deaths;

  return (
    <Circle
      center={country.center}
      options={selectedOptions}
      radius={(Math.sqrt(selectedType) * 600) / currentZoom}
      onMouseOver={onCircleClick}
      onMouseOut={onClose}
      clickable
    />
  );
}

function Maps(props) {
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(props.country);
  const [currentZoom, setCurrentZoom] = useState();

  function handleZoomChanged() {
    setCurrentZoom(this.getZoom() + 1);
  }

  const onClose = () => {
    showingInfoWindow && setShowingInfoWindow(false);
  };

  const nf = new Intl.NumberFormat();

  return (
    //googleMapsApiKey="AIzaSyA0qwEl7BqF71zcbmOvKq67ZgmPJNB47AM"
    <LoadScript>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.country.center}
        zoom={props.country.zoom}
        onZoomChanged={handleZoomChanged}
        options={{
          // gestureHandling: "greedy",
          streetViewControl: false,
          mapTypeControl: false,
          maxZoom: 6,
          minZoom: 1,
        }}
      >
        <>
          {props.countries.map((country) => (
            <CircleComponent
              setShowingInfoWindow={setShowingInfoWindow}
              setCurrentCountry={setCurrentCountry}
              country={country}
              key={country.name}
              showingInfoWindow={showingInfoWindow}
              currentZoom={currentZoom}
              casesType={props.casesType}
              onClose={onClose}
            />
          ))}

          {showingInfoWindow && (
            <InfoWindow position={currentCountry.center} onCloseClick={onClose}>
              <div>
                <span>
                  <img
                    alt={`${currentCountry.name} Flag`}
                    src={currentCountry.flag}
                    className="map_image"
                  />
                </span>
                <br />
                <span>{`${currentCountry.name}`}</span>
                <br />
                <span>{`Cases: ${nf.format(currentCountry.cases)}`}</span>
                <br />
                <span>{`Recovered: ${nf.format(
                  currentCountry.recovered
                )}`}</span>
                <br />
                <span>{`Deaths: ${nf.format(currentCountry.deaths)}`}</span>
              </div>
            </InfoWindow>
          )}
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Maps);
