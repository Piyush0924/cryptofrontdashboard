import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCryptoCurrency } from "../../features/cryptoCurrencyDropDownSlice";
import { useGetAllCoinsQuery } from "../../features/api/coinApiSlice";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  //Fetch coin list data
  const { data: coinList } = useGetAllCoinsQuery();

  const handleClick = (e) => {
    dispatch(setCryptoCurrency(e.target.value));
    setSearchValue("");
  };

  return (
    <div className="h-8 w-80">
      <input
        className="w-full h-full p-2 rounded-md border border-gray-300"
        value={searchValue}
        placeholder="Search Crypto Currencies"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className={`w-full h-12 overflow-y-scroll bg-blue-200 p-1 rounded-b-md ${searchValue ? 'block' : 'hidden'}`}>
        {coinList &&
          coinList
            .filter((coin) => coin.name.includes(searchValue))
            .map((coin) => (
              <p
                key={coin.id}
                className="cursor-pointer font-normal"
                onClick={handleClick}
              >
                {coin.name}
              </p>
            ))}
      </div>
    </div>
  );
};

export {Searchbar};
