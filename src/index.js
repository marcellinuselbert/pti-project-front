import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto";
import Hero from "./hero";
import Section from "./section";

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Section />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
