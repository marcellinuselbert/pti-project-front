import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Section from "../components/section";
import Table from "../components/table";
import FilmCard from "../components/card";
export default function Descending() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://pti-final-project-be.herokuapp.com?sort=year_descending", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFilms(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [films]);
  return (
    <div className="w-auto h-auto">
      <div className="w-full h-20 flex items-center justify-center lg:justify-start shadow-lg rounded-b-lg sticky">
        <div className="flex items-center gap-10 justify-between lg:ml-10">
          <Link to="/">Home</Link>
          <Link to="/lastest" className="text-indigo-600">
            Lastest
          </Link>
          <Link to="/popular">Most Like</Link>
        </div>
      </div>
      <div className="w-full h-28 flex items-center px-10 justify-between">
        <p className="text-xl font-semibold">Film berdasarkan Tahun</p>
        <div className="flex gap-4">
          <Link to="/lastest">Ascending</Link>
          <Link to="/oldest" className="text-indigo-600">
            Descending
          </Link>
        </div>
      </div>
      <div className="w-auto h-auto flex items-center justify-center  ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5">
          {films.map((film) => (
            <FilmCard film={film} />
          ))}
        </div>
      </div>
      <Section />
    </div>
  );
}
