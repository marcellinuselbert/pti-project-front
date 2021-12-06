import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/section";
import Table from "../components/table";

export default function Popular() {
  return (
    <div className="w-auto h-auto">
      <div className="w-full h-20 flex items-center justify-center lg:justify-start shadow-lg rounded-b-lg sticky">
        <div className="flex items-center gap-10 justify-between lg:ml-10">
          <Link to="/">Home</Link>
          <Link to="/lastest">Lastest</Link>
          <Link to="/popular" className="text-indigo-600">
            Most Like
          </Link>
        </div>
      </div>
      <div className="w-full h-28 flex items-center px-10 text-xl font-semibold">
        <p>Film berdasarkan Popularitas</p>
      </div>
      <Table />
      <Section />
    </div>
  );
}
