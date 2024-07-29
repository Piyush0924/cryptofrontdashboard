import React from "react";
import { useGetMarketsQuery } from "../../features/api/coinApiSlice";
import { CoinCard } from "../coinCard/CoinCard";
import SyncLoader from "react-spinners/SyncLoader";

const Sidebar = () => {
  const { data, isFetching } = useGetMarketsQuery();

  return (
    <div className=""> {/* Main container with auto margin */}
      <div className="shadow-2xl p-2 rounded-lg max-h-[75vh]"> {/* Container with max height and scroll */}
        <h2 className="text-2xl font-bold border-b-2 pb-4 p-2"> {/* Title */}
          Top Trending Crypto Currencies by Coin Market
        </h2>

        {/* Loading spinner while data is being fetched */}
        <SyncLoader color="rgb(0, 51, 102)" size={10} loading={isFetching} />

        {/* Grid layout for displaying coin cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 text-sm">
          {/* Rendering CoinCard component for each coin in the data */}
          {data &&
            data.map((coin) => <CoinCard key={coin.id} coin={coin} />)}
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
