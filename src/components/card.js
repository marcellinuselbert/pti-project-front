import React from "react";
import { Link } from "react-router-dom";

export default function FilmCard({ film }) {
  return (
    <div className="w-60 h-80 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110">
      <Link to="/film" className="h-full w-full">
        <div className="w-full h-1/2">
          <img
            className="object-cover h-full w-full rounded-md"
            src={film.imageUrl}
          ></img>
        </div>
        <div className="w-full h-1/2">
          <div className="w-full h-3/4 text-center p-5">{film.title}</div>
          <div className="w-full h-1/4 flex justify-between px-5">
            <p>{film.genre}</p>
            <p>{film.released_year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
