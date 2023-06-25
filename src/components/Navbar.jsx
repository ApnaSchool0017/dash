import React from "react";
import car from "../assets/car.png";
import { FiBell, FiSettings, FiChevronRight } from "react-icons/fi";
function Navbar() {
  return (
    <div className="flex bg-white h-12 w-full items-center justify-between shadow-2xl">
      <div className="ml-12 flex justify-center items-center">
        <p className="font-bold text-neutral-500 mr-2">Your Profile </p>
        <FiChevronRight className="text-neutral-400 " />
      </div>
      <div className="flex  gap-2 justify-center items-center">
        <div className="flex h-8 w-8 rounded-full border-2 mr-20 border-rose-400">
          <img src={car} className="h-full w-full mr-4 rounded-full" />
          <p className="font-normal text-stone-700">
            Adnan<span className="font-semibold ml-1">Afzal</span>
          </p>
        </div>
        <div className=" mx-4 ml-16 border-r border rounded-full border-zinc-300 h-4"></div>

        <div className="">
          <FiBell className="text-stone-700 text-xl" />
        </div>
        <div className="border-r mx-4 border border-zinc-300 h-4"></div>
        <div className="mr-4">
          <FiSettings className="text-stone-700 text-xl" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
