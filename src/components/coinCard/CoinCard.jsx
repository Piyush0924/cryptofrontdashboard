import React from "react";
import millify from "millify";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const CoinCard = ({ coin }) => {
  const Down = coin.price_change_percentage_24h < 0;

  return (
    <div className="w-full h-full border-b-1 border-gray-300">
      <div className="w-full h-full flex items-center justify-around">
        <div className="flex items-center flex-8 p-5">
          <img
            src={coin.image}
            alt={coin.name}
            className="w-12 h-12 rounded-full mr-2"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-base">{coin.name}</p>
            <p className="text-gray-500 text-sm">
              Mkt.Cap ${millify(coin.market_cap)}
            </p>
          </div>
        </div>
        <span>
          {Down ? (
            <ArrowDropDownOutlinedIcon color="error" fontSize="small" />
          ) : (
            <ArrowDropUpOutlinedIcon color="success" fontSize="small" />
          )}
        </span>
        <p
          className={`flex-2 font-semibold text-sm ${
            coin.price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {coin.price_change_percentage_24h.toFixed(4)}
        </p>
      </div>
    </div>
  );
};

export {CoinCard};
