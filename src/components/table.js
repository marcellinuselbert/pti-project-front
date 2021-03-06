import React, { useState, useEffect } from "react";
import FilmCard from "./card";

export default function Table({ search }) {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // console.log(search);
  useEffect(() => {
    fetch(
      `https://pti-final-project-be.herokuapp.com/search/?search=${search}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFilms(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [films]);
  return (
    <div className="w-auto h-auto flex items-center justify-center  ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 m-5 pb-5">
        {films.map((film) => (
          <FilmCard film={film} />
        ))}
      </div>
    </div>
  );
}
