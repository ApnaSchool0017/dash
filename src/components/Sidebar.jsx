import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(null);

  const y = [
    { id: 1, name: "Contact" },
    { id: 2, name: "About" },
    { id: 3, name: "Report" },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="bg-slate-800 h-screen fixed">
      <div className="flex justify-center pb-8 pt-6">
        <h1 className="font-semibold text-2xl text-white">
          a<span className="font-bold text-4xl text-red-500">d</span>nan
        </h1>
      </div>
      <div className="mt-8 ml-2">
        <h3 className="text-red-100 ">PROFILE</h3>
        <div className="mt-8 cursor-pointer">
          <Link to="/">
            <div
              className={`${
                selectedItem === "Dashboard" ? "bg-rose-500 " : "bg-transparent"
              } py-1 pl-14 pr-24 mt-2 ml-6 rounded-tl-full rounded-bl-full cursor-pointer`}
              onClick={() => handleItemClick("Dashboard")}
            >
              <p className="text-white">Dashboard</p>
            </div>
          </Link>
          <Link to="/todo">
            <div
              className={`${
                selectedItem === "Todo" ? "bg-rose-500 " : "bg-transparent"
              } py-1 pl-14 pr-24 mt-2 ml-6 rounded-tl-full rounded-bl-full cursor-pointer`}
              onClick={() => handleItemClick("Todo")}
            >
              <p className="text-white">Todo</p>
            </div>
          </Link>

          <Link to="/currencyconverter">
            <div
              className={`${
                selectedItem === "Currency Converter"
                  ? "bg-rose-500 "
                  : "bg-transparent"
              } py-1 pl-14 pr-18 mt-2 ml-6 rounded-tl-full rounded-bl-full cursor-pointer`}
              onClick={() => handleItemClick("Currency Converter")}
            >
              <p className="text-white">Currency Converter</p>
            </div>
          </Link>
        </div>
        <h3 className="text-red-100 mt-8">HELP</h3>
        <div className="mt-8">
          {y.map((item) => (
            <div
              key={item.id}
              className={`${
                selectedItem === item.name ? "bg-rose-500 " : "bg-transparent"
              } py-1 pl-14 pr-24 mt-2 ml-6 rounded-tl-full rounded-bl-full cursor-pointer`}
              onClick={() => handleItemClick(item.name)}
            >
              <p className="text-white">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
