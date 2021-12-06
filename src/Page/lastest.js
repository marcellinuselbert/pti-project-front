import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/section";
import Table from "../components/table";

export default function Lastest() {
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
          <Link to="/lastest" className="text-indigo-600">
            Ascending
          </Link>
          <Link to="/oldest">Descending</Link>
        </div>
      </div>
      <Table />
      <Section />
    </div>
  );
}
