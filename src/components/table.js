import React from "react";
import FilmCard from "./card";

export default function Table() {
  return (
    <div className="w-auto h-auto flex items-center justify-center  ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5">
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>
    </div>
  );
}
