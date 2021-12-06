import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import MenuDropdown from "./menuDropdown";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full h-1/6 flex items-center justify-center lg:justify-start shadow-lg rounded-b-lg">
      <div className="flex items-center gap-40 justify-between lg:gap-10 lg:ml-10">
        <Link to="">Home</Link>
        <Link to="" className="text-indigo-600">
          Lastest
        </Link>
        <Link to="">Most Like</Link>
      </div>
    </div>
  );
}
