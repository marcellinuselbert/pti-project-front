import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto";
import Hero from "./hero";

ReactDOM.render(
  <React.StrictMode>
    <Hero />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
