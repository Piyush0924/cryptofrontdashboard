import React from "react";
import { useGetMarketDataQuery } from "../../features/api/marketDataApiSlice"; // Importing API slice hook for fetching market data
import moment from "moment/moment"; // Importing moment.js for date formatting
import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux to access store state
import SyncLoader from "react-spinners/SyncLoader"; // Importing SyncLoader component for loading spinner
import { Line } from "react-chartjs-2"; // Importing Line chart component from react-chartjs-2

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"; // Importing specific components from chart.js

// Registering chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  // Accessing selected cryptocurrency from the store
  const selectedCoin = useSelector(
    (state) => state.selectCryptoCurrency.selectedCryptoCurrency
  );

  // Accessing selected currency from the store
  const selectedCurrency = useSelector(
    (state) => state.selectCurrency.selectedCurrency
  );

  // Accessing selected time from the store
  const selectedTime = useSelector((state) => state.selectTime.selectedTime);

  // Fetching market data based on selected coin, currency, and time
  const { data: cryptoData, isFetching } = useGetMarketDataQuery({
    coin: selectedCoin,
    currency: selectedCurrency,
    time: selectedTime,
  });

  // Extracting prices data from fetched market data
  const coinsData = cryptoData?.prices;

  // Preparing chart data by mapping over prices data
  const chartData = coinsData?.map((value) => ({
    x: value[0],
    y: value[1],
  }));

  // Defining chart options
  const options = {
    responsive: true, // Making chart responsive
    animation: {
      animateScale: true, // Enabling scale animation
    },
    plugins: {
      legend: {
        position: "top", // Positioning legend at the top
        align: "end", // Aligning legend to the end
      },
    },
    title: {
      display: true, // Displaying title
      text: "Line Chart", // Setting title text
    },
    datalabels: {
      font: function (context) {
        var width = context.chart.width; // Adjusting font size based on chart width
        var size = Math.round(width / 32);
        return {
          size: size,
          weight: 600,
        };
      },
      formatter: function (value) {
        return Math.round(value * 10) / 10; // Formatting data labels
      },
    },
  };

  // Preparing data for the chart
  const data = {
    labels: chartData?.map((value) => moment(value.x).format("MMM Do")), // Formatting x-axis labels as dates
    datasets: [
      {
        label: selectedCoin
          ? `${selectedCurrency.toUpperCase()} vs ${selectedCoin.toUpperCase()}  `
          : selectedCurrency.toUpperCase(), // Setting chart label
        data: chartData?.map((val) => val.y), // Setting chart data
        borderColor: "rgb(0, 204, 0)", // Setting border color of line
        backgroundColor: "rgb(0, 128, 0)", // Setting background color of line
      },
    ],
  };

  // Rendering the chart component
  return (
    <div className="h-{25vh} w-full p-1 shadow-md"> {/* Container for the chart */}
      <SyncLoader color="rgb(0, 51, 102)" size={10} loading={isFetching} /> {/* Loading spinner */}
      <Line data={data} options={options} /> {/* Rendering Line chart with data and options */}
    </div>
  );
}

export { LineChart };
