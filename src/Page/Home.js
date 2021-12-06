import React from "react";
import Hero from "../components/hero";
import Section from "../components/section";
import Table from "../components/table";

export default function App() {
  return (
    <div className="h-auto w-auto">
      <Hero />
      <Table />
      <Section />
    </div>
  );
}
