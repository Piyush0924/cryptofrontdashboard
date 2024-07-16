import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Importing useDispatch hook from React-Redux
import { setCryptoCurrency } from "../../features/cryptoCurrencyDropDownSlice"; // Importing setCryptoCurrency action from cryptoCurrencyDropDownSlice
import { useGetAllCoinsQuery } from "../../features/api/coinApiSlice"; // Importing useGetAllCoinsQuery hook from coinApiSlice

// Searchbar component definition
const Searchbar = () => {
  const [searchValue, setSearchValue] = useState(""); // State for search input value

  const dispatch = useDispatch(); // Initializing dispatch function from Redux

  // Fetch coin list data using useGetAllCoinsQuery hook
  const { data: coinList } = useGetAllCoinsQuery();

  // Event handler for selecting a crypto currency from the list
  const handleClick = (e) => {
    dispatch(setCryptoCurrency(e.target.textContent)); // Dispatching setCryptoCurrency action with selected currency's name
    setSearchValue(""); // Clearing the search input after selection
  };

  // JSX rendering of the component
  return (
    <div className="h-8 w-80 relative"> {/* Container for the search bar */}
      {/* Search input field */}
      <input
        className="w-full h-full p-2 rounded-md border border-gray-300"
        value={searchValue}
        placeholder="Search Crypto Currencies"
        onChange={(e) => setSearchValue(e.target.value)} // Handling change in search input
      />
      {/* Dropdown for displaying filtered coin list */}
      <div className={`absolute w-full max-h-32 overflow-y-auto bg-blue-200 p-1 rounded-b-md ${searchValue ? 'block' : 'hidden'}`}>
        {/* Mapping over filtered coinList to display matching results */}
        {coinList &&
          coinList
            .filter((coin) => coin.name.toLowerCase().includes(searchValue.toLowerCase())) // Filtering coins based on search input (case insensitive)
            .map((coin) => (
              <p
                key={coin.id}
                className="cursor-pointer font-normal p-1 hover:bg-blue-300"
                onClick={handleClick} // Click event to select a coin
              >
                {coin.name}
              </p>
            ))}
      </div>
    </div>
  );
};

export { Searchbar }; // Exporting Searchbar component
