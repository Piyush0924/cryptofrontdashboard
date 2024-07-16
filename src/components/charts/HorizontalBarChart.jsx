import React from "react";
import { useGetMarketDataQuery } from "../../features/api/marketDataApiSlice"; // Importing API slice hook for fetching market data
import moment from "moment/moment"; // Importing moment.js for date formatting
import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux to access store state
import SyncLoader from "react-spinners/SyncLoader"; // Importing SyncLoader component for loading spinner
import { Bar } from "react-chartjs-2"; // Importing Bar chart component from react-chartjs-2
import "chart.js/auto"; // Automatically registering chart.js components

const HorizontalBarChart = () => {
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
  })) || [];

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
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return moment(value).format("MMM Do"); // Formatting y-axis ticks as dates
          },
        },
      },
    },
    indexAxis: "y", // Setting index axis to y-axis for horizontal bar chart
  };

  // Preparing data for the chart
  const data = {
    labels: chartData.map((value) => moment(value.x).format("MMM Do")), // Formatting x-axis labels as dates
    datasets: [
      {
        label: selectedCoin
          ? `${selectedCurrency.toUpperCase()} vs ${selectedCoin.toUpperCase()}`
          : selectedCurrency.toUpperCase(), // Setting chart label
        data: chartData.map((val) => val.y), // Setting chart data
        borderColor: "rgb(0, 204, 0)", // Setting border color of bars
        backgroundColor: "rgb(0, 128, 0)", // Setting background color of bars
      },
    ],
  };

  // Rendering the chart component
  return (
    <div className="h-{25vh} w-full p-1 shadow-md"> {/* Container for the chart */}
      <SyncLoader color="rgb(0, 51, 102)" size={10} loading={isFetching} /> {/* Loading spinner */}
      <Bar data={data} options={options} /> {/* Rendering Bar chart with data and options */}
    </div>
  );
};

export { HorizontalBarChart }; 