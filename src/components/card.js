import React from "react";
import { Link } from "react-router-dom";

export default function FilmCard(props) {
  return (
    <div className="w-60 h-80 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110">
      <Link to="/film" className="h-full w-full">
        <div className="w-full h-1/2">
          <img
            className="object-cover h-full w-full rounded-md"
            src="https://upload.wikimedia.org/wikipedia/id/0/0d/Avengers_Endgame_poster.jpg"
          ></img>
        </div>
        <div className="w-full h-1/2">
          <div className="w-full h-3/4 text-center p-5">
            <p>{props.title}</p>
          </div>
          <div className="w-full h-1/4 flex justify-between px-5">
            <p>{props.genre}</p>
            <p>{props.year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
