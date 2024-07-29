import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Importing hooks from React-Redux
import { setCurrency } from "../../features/currencyDropDownSlice"; // Importing the setCurrency action
import { supported_vs_currencies } from "../../features/api/currencyApiSlice"; // Importing the list of supported currencies

const CurrencyDropDown = () => {
  // Get selected currency from the Redux store
  const currency = useSelector(
    (state) => state.selectCurrency.selectedCurrency
  );

  const dispatch = useDispatch(); // Initialize dispatch function

  // Handle change event for the dropdown
  const handleChange = (e) => {
    dispatch(setCurrency(e.target.value)); // Dispatch setCurrency action with selected value
  };

  return (
    <div className="flex items-center min-w-[50px]">
      <select
        onChange={handleChange}
        value={currency}
        className="w-full h-10 md:h-12 font-semibold bg-blue-100 border border-gray-300 rounded-lg p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-40 sm:max-h-24"
        style={{ maxHeight: "150px" }} // Limit the height of the dropdown
      >
        <option value="" disabled>
          Select Currency
        </option>
        {supported_vs_currencies.map((currencyName) => (
          <option value={currencyName} key={currencyName} className="font-normal">
            {currencyName.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export { CurrencyDropDown };
