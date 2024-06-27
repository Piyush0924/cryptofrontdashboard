import React from "react";
import { useGetMarketDataQuery } from "../../features/api/marketDataApiSlice";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Importing chart.js automatically registers components, so individual registration is not required

const HorizontalBarChart = () => {
  // Get selected crypto currency, currency, and selected time from store
  const selectedCoin = useSelector(
    (state) => state.selectCryptoCurrency.selectedCryptoCurrency
  );

  const selectedCurrency = useSelector(
    (state) => state.selectCurrency.selectedCurrency
  );

  const selectedTime = useSelector((state) => state.selectTime.selectedTime);

  // Fetch data
  const { data: cryptoData, isFetching } = useGetMarketDataQuery({
    coin: selectedCoin,
    currency: selectedCurrency,
    time: selectedTime,
  });

  const coinsData = cryptoData?.prices;

  // Prepare chart data
  const chartData = coinsData?.map((value) => ({
    x: value[0],
    y: value[1],
  })) || [];

  // Chart options
  const options = {
    responsive: true,
    animation: {
      animateScale: true,
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return moment(value).format("MMM Do");
          },
        },
      },
    },
    indexAxis: "y",
  };

  // Chart data
  const data = {
    labels: chartData.map((value) => moment(value.x).format("MMM Do")),
    datasets: [
      {
        label: selectedCoin
          ? `${selectedCurrency.toUpperCase()} vs ${selectedCoin.toUpperCase()}`
          : selectedCurrency.toUpperCase(),
        data: chartData.map((val) => val.y),
        borderColor: "rgb(0, 204, 0)",
        backgroundColor: "rgb(0, 128, 0)",
      },
    ],
  };

  return (
    <div className="h-{25vh} w-full p-1 shadow-md">
      <SyncLoader color="rgb(0, 51, 102)" size={10} loading={isFetching} />
      <Bar data={data} options={options} />
    </div>
  );
};

export { HorizontalBarChart };