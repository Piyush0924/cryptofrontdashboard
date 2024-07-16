import React, { useState } from "react";
import { useGetExchangeDataQuery } from "../../features/api/marketDataApiSlice"; // Importing useGetExchangeDataQuery hook from marketDataApiSlice
import { supported_vs_currencies } from "../../features/api/currencyApiSlice"; // Importing supported_vs_currencies from currencyApiSlice

// ExchangeRates component definition
const ExchangeRates = () => {
  // State variables using useState hook
  const [enteredValue, setEnteredValue] = useState(""); // State for entered value
  const [sellCurrency, setSellCurrency] = useState("btc"); // State for sell currency with default value "btc"
  const [buyCurrency, setBuyCurrency] = useState("btc"); // State for buy currency with default value "btc"
  const [convertedValue, setConvertedValue] = useState(""); // State for converted value

  // Event handler for sell currency selection change
  const handleSellChange = (e) => {
    setSellCurrency(e.target.value); // Update sell currency state based on selection
  };

  // Event handler for buy currency selection change
  const handleBuyChange = (e) => {
    setBuyCurrency(e.target.value); // Update buy currency state based on selection
  };

  // Fetch exchange data using useGetExchangeDataQuery hook
  const { data: exchangeData } = useGetExchangeDataQuery();

  // Function to calculate conversion based on entered value and exchange rates
  function ConversionFormula(enteredValue) {
    const convertedValue = (
      (parseFloat(enteredValue) *
        parseFloat(exchangeData?.rates[buyCurrency]?.value)) /
      parseFloat(exchangeData?.rates[sellCurrency]?.value)
    ).toFixed(2); // Ensure converted value is rounded to 2 decimal places

    return convertedValue; // Return the calculated converted value
  }

  // Event handler for exchange button click
  function handleClick() {
    setConvertedValue(ConversionFormula(enteredValue)); // Calculate and set converted value when button is clicked
  }

  // JSX rendering of the component
  return (
    <div className="w-1/2 h-full m-1 shadow-md rounded-lg border-none">
      <div className="w-full h-full p-2 flex flex-col justify-between">
        <p className="font-semibold text-lg m-2">Exchange Coins</p>
        <div className="flex justify-between flex-grow">
          {/* Sell currency selection */}
          <div className="flex flex-col justify-around w-1/2 gap-2">
            <div className="flex items-center w-full">
              <p className="font-semibold text-base flex-1">Sell</p>
              <select
                className="flex-1 h-12 rounded-lg bg-blue-100 focus:outline-none"
                onChange={handleSellChange}
                value={sellCurrency}
              >
                <option value="" disabled>
                  Select Currency
                </option>
                {/* Mapping over supported_vs_currencies to create options */}
                {supported_vs_currencies.map((currencyName) => (
                  <option value={currencyName} key={currencyName}>
                    {currencyName.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            {/* Buy currency selection */}
            <div className="flex items-center w-full">
              <p className="font-semibold text-base flex-1">Buy</p>
              <select
                className="flex-1 h-12 rounded-lg bg-blue-100 focus:outline-none"
                onChange={handleBuyChange}
                value={buyCurrency}
              >
                <option value="" disabled>
                  Select Currency
                </option>
                {/* Mapping over supported_vs_currencies to create options */}
                {supported_vs_currencies.map((currencyName) => (
                  <option value={currencyName} key={currencyName}>
                    {currencyName.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Input for entering value and displaying converted value */}
          <div className="flex flex-col w-1/2 items-center justify-around p-2">
            <input
              className="w-1/2 h-12 rounded-lg text-center font-semibold focus:outline-none"
              placeholder="Enter value"
              value={enteredValue}
              onChange={(e) => setEnteredValue(e.target.value)}
            />
            <p className="min-w-40 h-12 text-center text-green-500 font-semibold">
              {convertedValue}
            </p>
          </div>
        </div>
        {/* Button for initiating exchange */}
        <div className="flex justify-center">
          <button
            className="w-40 h-12 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={handleClick}
          >
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
};

export { ExchangeRates }; 
