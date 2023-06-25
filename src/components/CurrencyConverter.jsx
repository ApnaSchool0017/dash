import React, { useState } from "react";

const App = () => {
  // states input amount in rs
  const [amount, setAmount] = useState(0);
  // state for convert to currency
  const [targetCurrency, setTargetCurrency] = useState("USD");
  // state for store result
  const [result, setResult] = useState(0);
  // state for button
  const [visible, setVisible] = useState(false);

  // ftn for handle input amount
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setVisible(true);
    console.log(amount);
  };

  // ftn for handle given currency to convert
  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  // ftn for result
  const Result = () => {
    if (amount !== "") {
      if (targetCurrency === "GBP") {
        const x = amount / 100;
        setResult(x.toFixed(8));
      } else if (targetCurrency === "EUR") {
        const x = amount / 200;
        setResult(x.toFixed(8));
      } else {
        const x = amount / 280;
        setResult(x.toFixed(8));
      }
    } else {
      setVisible(false);
      alert("enter rupees to convert");
      setResult(0);
    }
  };
  return (
    // main div
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100-400">
      {/* main heading */}

      <h1 className="text-4xl font-bold mb-10">Currency Converter</h1>

      <div className="bg-slate-300 shadow-md px-20 py-10 rounded-2xl">
        {/* result */}
        <div className="flex items-center justify-center">
          <p className="font-medium text-lg mb-2">Exchange Rate</p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <p className="text-2xl font-bold mx-4 text-red-600">
            {targetCurrency}:{result}
          </p>
        </div>

        {/* input amount in rupees and select sonvertable currency */}
        <div className="flex mb-8 space-x-4">
          <div>
            <p className="font-bold text-green-600 mb-1">From:</p>
            <input
              type="number"
              className="w-40 rounded focus:outline-none py-2 px-3 mr-2 shadow-md"
              placeholder="Enter Rs"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>

          <div>
            <p className="font-bold text-rose-600 mb-1">To:</p>
            <select
              className="w-40 rounded-md focus:outline-none py-2 px-3 shadow-md"
              value={targetCurrency}
              onChange={handleTargetCurrencyChange}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
        <div className="">
          {/* visible and unvisible button */}
          <div className="mr-6 flex items-center  justify-center ">
            {visible ? (
              <button
                onClick={Result}
                className="text-white font-bold  px-8 py-2 rounded-full bg-green-500 hover:bg-green-400 shadow-lg"
              >
                Convert
              </button>
            ) : (
              <button className="shadow-lg text-white font-bold px-8 py-2 rounded-full bg-gray-400">
                Convert
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
