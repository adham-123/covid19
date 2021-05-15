import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// After user zoom out, if different country selected from dropdown, map doesn't zoom back to it. Check the setZoom on country change
// When a country is selected table scrolls to that country and highlights raw
// Check out why the map circles load twice when deaths selected. Maybe cuz "cases" is set to default

// total button not centered on apple
