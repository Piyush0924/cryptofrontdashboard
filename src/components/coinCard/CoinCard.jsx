import React from "react";
import millify from "millify"; // Importing millify library for number formatting
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined"; // Importing MUI icon for upward trend
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined"; // Importing MUI icon for downward trend

// CoinCard component definition
const CoinCard = ({ coin }) => {
  const Down = coin.price_change_percentage_24h < 0; // Determine if price change is negative

  return (
    <div className="w-full h-full border-b-1 border-gray-300"> {/* Main container with border */}
      <div className="w-full h-full flex items-center justify-around"> {/* Flex container for content */}
        <div className="flex items-center flex-8 p-5"> {/* Coin information section */}
          <img
            src={coin.image}
            alt={coin.name}
            className="w-12 h-12 rounded-full mr-2" // Coin image
          />
          <div className="flex flex-col"> {/* Coin name and market cap */}
            <p className="font-semibold text-base">{coin.name}</p> {/* Coin name */}
            <p className="text-gray-500 text-sm"> {/* Market cap */}
              Mkt.Cap ${millify(coin.market_cap)}
            </p>
          </div>
        </div>
        <span> {/* Trend icon */}
          {Down ? ( // Display downward arrow if price change is negative
            <ArrowDropDownOutlinedIcon color="error" fontSize="small" />
          ) : ( // Display upward arrow if price change is positive
            <ArrowDropUpOutlinedIcon color="success" fontSize="small" />
          )}
        </span>
        <p
          className={`flex-2 font-semibold text-sm ${ // Price change percentage
            coin.price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500" // Text color based on trend
          }`}
        >
          {coin.price_change_percentage_24h.toFixed(4)} {/* Display price change percentage */}
        </p>
      </div>
    </div>
  );
};

export { CoinCard }; 
