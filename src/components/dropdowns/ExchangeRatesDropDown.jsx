import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../features/currencyDropDownSlice";
import { supported_vs_currencies } from "../../features/api/currencyApiSlice";

const ExchangeDropDown = () => {
  const dispatch = useDispatch();

  // Get selected currency from store
  const currency = useSelector(
    (state) => state.selectCurrency.selectedCurrency
  );

  const handleChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };

  return (
    <div className="h-10vh w-1/4">
      <select
        className="w-full h-12 overflow-scroll font-bold bg-blue-100 m-1 border-none rounded-lg px-5 cursor-pointer"
        onChange={handleChange}
        value={currency}
      >
        <option value="" disabled>
          Vs_Currency
        </option>
        {supported_vs_currencies.map((currencyName) => (
          <option value={currencyName} key={currencyName}>
            {currencyName.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export { ExchangeDropDown };
