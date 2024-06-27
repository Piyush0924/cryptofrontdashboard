import React from "react";
import { useDispatch } from "react-redux";
import { setCurrency } from "../../features/currencyDropDownSlice";
import { useGetAllCurrenciesQuery } from "../../features/api/currencyApiSlice";
import { useSelector } from "react-redux";

const ExchangeDropDown = () => {
  const dispatch = useDispatch();

  // Get selected currency from store
  const currency = useSelector(
    (state) => state.selectCurrency.selectedCurrency
  );

  const handleChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };

  // Fetch currency list data
  const { data: currencyList } = useGetAllCurrenciesQuery();

  return (
    <div className="h-10vh w-1/4">
      <select
        className="w-full h-12 overflow-scroll font-bold bg-blue-100 m-1 border-none rounded-lg px-5 cursor-pointer"
        onChange={handleChange}
        value={currency}
      >
        <option disabled>Vs_Currency</option>
        {currencyList &&
          currencyList.map((currencyName) => (
            <option value={currencyName} key={currencyName}>
              {currencyName}
            </option>
          ))}
      </select>
    </div>
  );
};

export {ExchangeDropDown};
