import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Showcase from "./Showcase";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, Container } from "@chakra-ui/react";
import "@fontsource/roboto";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Container maxWidth="container.lg">
        <Showcase />
      </Container>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
