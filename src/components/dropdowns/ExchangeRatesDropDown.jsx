import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Importing hooks from React-Redux
import { setCurrency } from "../../features/currencyDropDownSlice"; // Importing the setCurrency action from currencyDropDownSlice
import { supported_vs_currencies } from "../../features/api/currencyApiSlice"; // Importing the list of supported currencies

// ExchangeDropDown component definition
const ExchangeDropDown = () => {
  const dispatch = useDispatch(); // Initialize dispatch function

  // Get selected currency from the Redux store
  const currency = useSelector(
    (state) => state.selectCurrency.selectedCurrency // Access selectedCurrency from the store
  );

  // Handle change event for the dropdown
  const handleChange = (e) => {
    dispatch(setCurrency(e.target.value)); // Dispatch setCurrency action with selected value
  };

  return (
    <div className="h-10vh w-1/4"> {/* Container for the dropdown */}
      <select
        className="w-full h-12 overflow-scroll font-bold bg-blue-100 m-1 border-none rounded-lg px-5 cursor-pointer" // Styling for the select element
        onChange={handleChange} // Handle change event
        value={currency} // Bind selected value to currency from the store
      >
        <option value="" disabled> {/* Default option */}
          Vs_Currency
        </option>
        {supported_vs_currencies.map((currencyName) => ( // Map over supported currencies to create options
          <option value={currencyName} key={currencyName}> {/* Set value and key for each option */}
            {currencyName.toUpperCase()} {/* Display currency name in uppercase */}
          </option>
        ))}
      </select>
    </div>
  );
};

export { ExchangeDropDown }; 