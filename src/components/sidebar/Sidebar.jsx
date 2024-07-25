import React from "react";
import { useGetMarketsQuery } from "../../features/api/coinApiSlice"; // Importing useGetMarketsQuery hook from coinApiSlice
import { CoinCard } from "../coinCard/CoinCard"; // Importing CoinCard component
import SyncLoader from "react-spinners/SyncLoader"; // Importing SyncLoader component for loading spinner

const Sidebar = () => {
  // Fetch market data using useGetMarketsQuery hook
  const { data, isFetching } = useGetMarketsQuery();

  return (
    <div className="container mx-auto"> {/* Main container with auto margin */}
      <div className="p-1"> {/* Padding for content */}
        <h2 className="text-2xl font-bold mb-1">Top Trending Crypto Currencies by Coin Market</h2> {/* Title */}
        
        {/* Loading spinner while data is being fetched */}
        <SyncLoader color="rgb(0, 51, 102)" size={10} loading={isFetching} />
        
        {/* Grid layout for displaying coin cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
          {/* Rendering CoinCard component for each coin in the data */}
          {data &&
            data.map((coin) => <CoinCard key={coin.id} coin={coin} />)}
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
