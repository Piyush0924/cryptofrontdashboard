import React, { useState } from "react";
import { useGetExchangeDataQuery } from "../../features/api/marketDataApiSlice";
import { supported_vs_currencies } from "../../features/api/currencyApiSlice";

const ExchangeRates = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [sellCurrency, setSellCurrency] = useState("btc");
  const [buyCurrency, setBuyCurrency] = useState("btc");
  const [convertedValue, setConvertedValue] = useState("");

  const handleSellChange = (e) => {
    setSellCurrency(e.target.value);
  };
  const handleBuyChange = (e) => {
    setBuyCurrency(e.target.value);
  };

  // Fetch exchange data
  const { data: exchangeData } = useGetExchangeDataQuery();

  function ConversionFormula(enteredValue) {
    const convertedValue = (
      (parseFloat(enteredValue) *
        parseFloat(exchangeData?.rates[buyCurrency]?.value)) /
      parseFloat(exchangeData?.rates[sellCurrency]?.value)
    ).toFixed(2);

    return convertedValue;
  }

  function handleClick() {
    setConvertedValue(ConversionFormula(enteredValue));
  }

  return (
    <div className="w-1/2 h-full m-1 shadow-md rounded-lg border-none">
      <div className="w-full h-full p-2 flex flex-col justify-between">
        <p className="font-semibold text-lg m-2">Exchange Coins</p>
        <div className="flex justify-between flex-grow">
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
                {supported_vs_currencies.map((currencyName) => (
                  <option value={currencyName} key={currencyName}>
                    {currencyName.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
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
                {supported_vs_currencies.map((currencyName) => (
                  <option value={currencyName} key={currencyName}>
                    {currencyName.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
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
