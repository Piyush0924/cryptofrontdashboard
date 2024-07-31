import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Importing hooks from React-Redux
import { setCryptoCurrency } from "../../features/cryptoCurrencyDropDownSlice"; // Importing the setCryptoCurrency action
import { useGetAllCoinsQuery } from "../../features/api/coinApiSlice"; // Importing the API query hook

const CryptoCurrencyDropDown = () => {
  // Get selected cryptocurrency from the Redux store
  const cryptoCurrency = useSelector(
    (state) => state.selectCryptoCurrency.selectedCryptoCurrency
  );
 
  const dispatch = useDispatch(); // Initialize dispatch function

  // Fetch coin list data using RTK Query
  const { data: coinList } = useGetAllCoinsQuery();

  // Handle change event for the dropdown
  const handleChange = (e) => {
    dispatch(setCryptoCurrency(e.target.value));
  };
  

  return (
    <div className="max-w-xs w-full mt-3 md:mt-0">
      <select
        onChange={handleChange}
        value={cryptoCurrency}
        className="w-full overflow-y-auto font-semibold bg-blue-100 border-none rounded-lg p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          Select Crypto Currency
        </option>
        {coinList &&
          coinList.map((coin) => (
            <option value={coin.id} key={coin.id} className="font-normal">
              {coin.name.toUpperCase()}
            </option>
          ))}
      </select>
    </div>
  );
};

export { CryptoCurrencyDropDown };
