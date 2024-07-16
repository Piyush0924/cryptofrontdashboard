import React from "react";
import { useGetMarketDataQuery } from "../../features/api/marketDataApiSlice"; // Importing API slice hook for fetching market data
import moment from "moment/moment"; // Importing moment for date formatting
import styled from "styled-components"; // Importing styled-components for styling
import { useSelector } from "react-redux"; // Importing useSelector from react-redux to access state
import SyncLoader from "react-spinners/SyncLoader"; // Importing SyncLoader component for loading spinner

// Importing and registering specific components from chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2"; // Importing Bar chart component from react-chartjs-2

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Styled component for the container
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1%;
  box-shadow: 0px 10px 51px 0px rgba(0, 0, 0, 0.1);
`;

const VerticalBarChart = () => {
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

  // Ensure coinsData is defined before using it
  const coinsData = cryptoData?.prices ?? [];

  // Ensure chartData is defined before using it
  const chartData = coinsData.map((value) => ({
    x: value[0],
    y: value[1],
  }));

  // Chart options
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
    datalabels: {
      font: function (context) {
        var width = context.chart.width;
        var size = Math.round(width / 32); // Dynamically setting font size
        return {
          size: size,
          weight: 600, // Setting font weight
        };
      },
      formatter: function (value) {
        return Math.round(value * 10) / 10; // Formatting value to one decimal place
      },
    },
    title: {
      display: true, // Displaying chart title
      text: "Vertical Bar Chart", // Setting chart title text
    },
    elements: {
      bar: {
        borderWidth: 2, // Setting border width for bars
      },
    },
  };

  // Chart data
  const data = {
    labels: chartData.map((value) => moment(value.x).format("MMM Do")), // Formatting labels using moment
    datasets: [
      {
        label: selectedCoin
          ? `${selectedCurrency.toUpperCase()} vs ${selectedCoin.toUpperCase()}` // Setting dataset label dynamically
          : selectedCurrency.toUpperCase(),
        data: chartData.map((val) => val.y), // Setting data for chart
        borderColor: "rgb(0, 204, 0)", // Setting border color for bars
        backgroundColor: "rgb(0, 128, 0)", // Setting background color for bars
      },
    ],
  };

  return (
    <Container> {/* Styled container for the chart */}
      {isFetching ? (
        <SyncLoader color="rgb(0, 51, 102)" size={10} loading={isFetching} />
         // Displaying loader while fetching data
      ) : (
        <Bar data={data} options={options} />
         // Rendering Bar chart with data and options 
      )}
    </Container>
  );
};


export { VerticalBarChart };
