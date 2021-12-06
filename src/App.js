import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Descending from "./Page/descending";
import FilmPage from "./Page/filmPage";
import Home from "./Page/Home";
import Lastest from "./Page/lastest";
import Popular from "./Page/Popular";

export default function App() {
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
