import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Descending from "./Page/descending";
import FilmPage from "./Page/filmPage";
import Home from "./Page/Home";
import Lastest from "./Page/lastest";
import Popular from "./Page/Popular";

import { Button } from "@chakra-ui/button";

export default function App() {
  // Post Example
  // const [films, setFilms] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     title: "Marvel",
  //     imageUrl: "dummy",
  //     trailerUrl: "dummy",
  //     genre: "action",
  //     released_year: 2020,
  //   }),
  // };
  // const postToAPI = () => {
  //   fetch("https://pti-final-project-be.herokuapp.com", requestOptions)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setFilms(result);
  //         console.log(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/film" element={<FilmPage />} />
          <Route path="/lastest" element={<Lastest />} />
          <Route path="/oldest" element={<Descending />} />
          <Route path="/popular" element={<Popular />} />
        </Routes>
      </div>
    </Router>
  );
}
