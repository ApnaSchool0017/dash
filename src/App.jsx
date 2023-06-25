import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ErrorPage from "./components/Error404";
import MainDashboard from "./components/MainDashboard";
import Todo from "./components/Todo";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="flex">
      <Router>
        <div className="w-1/5">
        <Sidebar className=" bg-slate-800" />

        </div>
        <div className="w-4/5">
          <Routes>
            <Route path="/" element={<MainDashboard />} />
            <Route path="todo" element={<Todo />} />
            <Route path="currencyconverter" element={<CurrencyConverter/>} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
