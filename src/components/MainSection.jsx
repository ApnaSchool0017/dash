import React, { useState } from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import Chart from "react-apexcharts";

function MainSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [chart,setChart]=useState({
    options: {
        colors: ['#546E7A', '#E91E63'],
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
      }
    },
    series: [
      {
        name: "sell",
        data: [30, 40, 55, 50, 49, 60, 70, 91,20]
      },
      {
        name: "stock",
        data: [40, 50, 45, 60, 79, 34, 90, 45,80]
      }
    ]
  })

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="bg-slate-100 pt-6 pb-4">
      {/* text and buttons */}
      <div className="flex mx-14 mt-16 justify-between items-center ">
        <div>
          <p className="font-normal text-3xl text-neutral-600">
            {" "}
            <span className="font-bold">Hi Adnan,</span> your analytics are all
            set
          </p>
        </div>
        <div className="py-1 px-1 mt-4  rounded-md bg-white shadow-lg">
          <button
            className={`${
              selectedItem === "Day"
                ? "bg-rose-500 text-white"
                : "bg-transparent text-neutral-400"
            } py-1 px-2 mr-1 rounded-md font-semibold text-xs`}
            onClick={() => handleItemClick("Day")}
          >
            Day
          </button>
          <button
            className={`${
              selectedItem === "Week"
                ? "bg-rose-500 text-white"
                : "bg-transparent text-neutral-400"
            } py-1 px-2 mr-1 rounded-md font-semibold text-xs`}
            onClick={() => handleItemClick("Week")}
          >
            Week
          </button>
          <button
            className={`${
              selectedItem === "Month"
                ? "bg-rose-500 text-white"
                : "bg-transparent text-neutral-400"
            } py-1 px-2 rounded-md font-semibold text-xs`}
            onClick={() => handleItemClick("Month")}
          >
            Month
          </button>
        </div>
      </div>

      {/* first 2 cards */}
      <div className="mx-14 mt-10 flex justify-between">
        <div className="">
          <div className="h-[180px] w-[380px] rounded-md relative  shadow-2xl">
            <div className="absolute h-full  pt-4 pl-6">
              <p className="font-medium text-neutral-600 text-2xl mb-4">
                Current Scenario
              </p>
              <p className="font-bold text-yellow-600 text-4xl mb-4">23 %</p>
              <p className="font-normal text-neutral-600 text-sm">
                The content statistics say <br /> the current form of
                investments
              </p>
            </div>
            <img
              className="rounded-md w-full h-full"
              src={card1}
              alt="Card 1"
            />
          </div>
        </div>

        <div className="">
          <div className="h-[180px] w-[480px] rounded-md relative  shadow-violet-300 shadow-xl">
            <div className="absolute h-full  pt-4 pl-6">
              <p className="font-medium text-white text-2xl mb-4">
                Current Scenario
              </p>
              <p className="font-bold text-white text-4xl mb-4">2345.53$</p>
              <p className="font-normal text-white text-sm">
                The content statistics say <br /> the current form of
                investments
              </p>
            </div>
            <img
              className="rounded-md w-full h-full"
              src={card2}
              alt="Card 1"
            />
          </div>
        </div>
      </div>

      {/* 3rd card */}
      <div className="mx-14 mt-16 bg-white rounded-xl shadow-lg ">
        <div className="">
          <div className="h-[250px] w-full ">
          <Chart
              options={chart.options}
              series={chart.series}
              type="bar"
              width="900"
              height='250'
            />
          </div>
        </div>
      </div>

      {/* last 3 cards */}
      <div className="mx-14 mt-20 flex gap-12  mb-14">
        <div className="w-[160px] h-[220px] shadow-md bg-white flex flex-col  items-center justify-center rounded-lg ">
          <div className="w-16 h-16 rounded-full mb-14 ">
            <img src={card6} />
            <p className="text-sm text-neutral-600 font-bold px-2">Adnan </p>
            <p className="text-xs text-neutral-500 font-medium px-3">afzal</p>
          </div>
          <div className="flex items-center justify-center gap-1 ">
            <button className="px-3  border-2 border-rose-400 rounded-full text-xs">
              aa
            </button>
            <button className="px-3 border-2 border-rose-400 rounded-full text-xs">
              bb
            </button>
            <button className="px-3 border-2 border-rose-400 rounded-full text-xs">
              cc
            </button>
          </div>
          <div className="mt-4">
            <button className="px-8 py-1 bg-rose-500 hover:bg-rose-600 text-white rounded-md text-xs">
              Projects
            </button>
          </div>
          <div className="justify-end items-baseline mt-2">
            <div className="border-s border rounded-full border-neutral-300 w-36"></div>
            <p className="px-8 py-1 font-medium text-sm">view profile</p>
          </div>
        </div>

        <div className="w-[160px] h-[220px] shadow-md bg-white flex flex-col  items-center justify-center rounded-lg ">
          <div className="w-16 h-16 rounded-full mb-14 ">
            <img src={card6} />
            <p className="text-sm text-neutral-600 font-bold px-2">Adnan </p>
            <p className="text-xs text-neutral-500 font-medium px-3">afzal</p>
          </div>
          <div className="flex items-center justify-center gap-1 ">
            <button className="px-3  border-2 border-rose-400 rounded-full text-xs">
              aa
            </button>
            <button className="px-3 border-2 border-rose-400 rounded-full text-xs">
              bb
            </button>
            <button className="px-3 border-2 border-rose-400 rounded-full text-xs">
              cc
            </button>
          </div>
          <div className="mt-4">
            <button className="px-8 py-1 bg-rose-500 text-white rounded-md text-xs  hover:bg-rose-600">
              Projects
            </button>
          </div>
          <div className="justify-end items-baseline mt-2">
            <div className="border-s border rounded-full border-neutral-300 w-36"></div>
            <p className="px-8 py-1 font-medium text-sm">view profile</p>
          </div>
        </div>

        <div className=" rounded-lg bg-white shadow-md">
          <div className="h-[220px] w-[480px]  relative">
          <Chart
              options={chart.options}
              series={chart.series}
              type="area"
              width="480"
              height='210'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
