import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto";
import Hero from "./hero";
import Section from "./section";
import Table from "./table";

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Table />
    <Section />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
