import React, { useState, useEffect } from "react";
import FilmCard from "./card";

export default function Table() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://pti-final-project-be.herokuapp.com", { method: "GET" })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFilms(result.data);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [films]);
  return (
    <div className="w-auto h-auto flex items-center justify-center  ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5">
        {films.map((film) => (
          <FilmCard film={film} />
        ))}
      </div>
    </div>
  );
}
