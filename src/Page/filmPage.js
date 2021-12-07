import React from "react";
import { Link } from "react-router-dom";

export default function FilmPage() {
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-1/6 flex items-center justify-center lg:justify-start shadow-lg rounded-b-lg sticky">
        <div className="flex items-center gap-10 justify-between lg:ml-10">
          <Link to="/">Home</Link>
          <Link to="/lastest" className="text-indigo-600">
            Lastest
          </Link>
          <Link to="/popular">Most Like</Link>
        </div>
      </div>
      <div className="w-auto h-5/6 flex">
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="w-auto h-auto">
            <div className="grid grid-cols-2 gap-5 text-xl">
              <div>Judul</div>
              <div>Avengers</div>
              <div>Genre</div>
              <div>Super Hero</div>
              <div>Tahun Rilis</div>
              <div>2018</div>
              <div>Likes</div>
              <div>0</div>
              <div>Dislikes</div>
              <div>0</div>
              <div className="col-span-2 w-full h-full">
                <button className="h-full w-full bg-indigo-600 text-white rounded-md p-2 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110">
                  <Link to="/">Trailer</Link>
                </button>
              </div>
              <div className="w-full h-full">
                <button className="h-full w-full bg-red-300 text-white rounded-md p-2 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110">
                  <Link to="/">Like</Link>
                </button>
              </div>
              <div className="w-full h-full">
                <button className="h-full w-full bg-red-600 text-white rounded-md p-2 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110">
                  <Link to="/">Delete</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full ">
          <div className="h-full w-full relative">
            <img
              className="object-cover h-full w-full"
              src="https://upload.wikimedia.org/wikipedia/id/0/0d/Avengers_Endgame_poster.jpg"
            ></img>
            <div className="w-full h-full bg-gray-400 absolute bottom-0 left-0 bg-opacity-30">
              <p className="absolute bottom-0 left-0 text-white text-3xl m-5 w-auto">
                Avengers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
