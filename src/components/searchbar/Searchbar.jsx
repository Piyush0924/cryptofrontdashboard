import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCryptoCurrency } from "../../features/cryptoCurrencyDropDownSlice";
import { useGetAllCoinsQuery } from "../../features/api/coinApiSlice";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  // Fetch coin list data
  const { data: coinList } = useGetAllCoinsQuery();

  const handleClick = (e) => {
    dispatch(setCryptoCurrency(e.target.textContent)); // Update to use textContent instead of value
    setSearchValue("");
  };

  return (
    <div className="h-8 w-80 relative">
      <input
        className="w-full h-full p-2 rounded-md border border-gray-300"
        value={searchValue}
        placeholder="Search Crypto Currencies"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className={`absolute w-full max-h-32 overflow-y-auto bg-blue-200 p-1 rounded-b-md ${searchValue ? 'block' : 'hidden'}`}>
        {coinList &&
          coinList
            .filter((coin) => coin.name.toLowerCase().includes(searchValue.toLowerCase())) // Case insensitive search
            .map((coin) => (
              <p
                key={coin.id}
                className="cursor-pointer font-normal p-1 hover:bg-blue-300"
                onClick={handleClick}
              >
                {coin.name}
              </p>
            ))}
      </div>
    </div>
  );
};

export { Searchbar };
