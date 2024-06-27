import React from "react";
import { useGetMarketDataQuery } from "../../features/api/marketDataApiSlice";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

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

  const chartData = coinsData?.map((value) => ({
    x: value[0],
    y: value[1],
  }));

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
    title: {
      display: true,
      text: "Line Chart",
    },

    datalabels: {
      font: function (context) {
        var width = context.chart.width;
        var size = Math.round(width / 32);
        return {
          size: size,
          weight: 600,
        };
      },
      formatter: function (value) {
        return Math.round(value * 10) / 10;
      },
    },
  };

  // Chart data
  const data = {
    labels: chartData?.map((value) => moment(value.x).format("MMM Do")),
    datasets: [
      {
        label: selectedCoin
          ? `${selectedCurrency.toUpperCase()} vs ${selectedCoin.toUpperCase()}  `
          : selectedCurrency.toUpperCase(),
        data: chartData?.map((val) => val.y),
        borderColor: "rgb(0, 204, 0)",
        backgroundColor: "rgb(0, 128, 0)",
      },
    ],
  };

  return (
    <div className="h-{25vh} w-full p-1 shadow-md">
      <SyncLoader color="rgb(0, 51, 102)" size={10} loading={isFetching} />
      <Line data={data} options={options} />
    </div>
  );
}

export {LineChart};