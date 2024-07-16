import React from "react";
import { useGetMarketsQuery } from "../../features/api/coinApiSlice"; // Importing API slice hook for fetching market data
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // Importing specific components from chart.js
import { Pie } from "react-chartjs-2"; // Importing Pie chart component from react-chartjs-2
import ChartDataLabels from "chartjs-plugin-datalabels"; // Importing chart.js data labels plugin
import SyncLoader from "react-spinners/SyncLoader"; // Importing SyncLoader component for loading spinner

// Registering chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  // Fetching market data
  const { data: marketData, isFetching } = useGetMarketsQuery();

  // Preparing data for the chart
  const data = {
    labels: marketData?.slice(0, 3).map((coin) => coin.name), // Extracting top 3 coin names for labels
    datasets: [
      {
        data: marketData?.slice(0, 3).map((coin) => coin.total_volume), // Extracting top 3 coin volumes for data
        backgroundColor: [
          "rgb(236, 107, 86)", // Setting background colors for the pie chart segments
          "rgb(255, 193, 84)",
          "rgb(71, 179, 156)",
        ],
        borderWidth: 1, // Setting border width for the pie chart segments
        borderColor: "rgb(255, 255, 255)", // Setting border color for the pie chart segments
      },
    ],
  };

  // Defining chart options
  const options = {
    responsive: true, // Making chart responsive
    maintainAspectRatio: false, // Not maintaining aspect ratio
    animation: {
      animateScale: true, // Enabling scale animation
    },
    plugins: {
      legend: {
        position: "right", // Positioning legend to the right
        align: "center", // Aligning legend to the center
        display: true, // Displaying legend
        padding: 10, // Setting padding for legend
        labels: {
          color: "rgb(67, 67, 177)", // Setting color for legend labels
          font: {
            size: 10, // Setting font size for legend labels
          },
        },
      },
      datalabels: {
        display: true, // Displaying data labels
        color: "rgb(255, 255, 255)", // Setting color for data labels
        align: "center", // Aligning data labels to the center
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          if (dataArr && dataArr.length > 0) {
            dataArr.map((data)=>{
              return sum += data; // Calculating sum of data values
            });
            let percentage = "$" + ((value * 1000) / sum).toFixed(2); // Calculating and formatting percentage value
            return percentage;
          } else {
            return ""; // Handle the case where dataArr is null or empty
          }
        },
        labels: {
          title: {
            font: {
              weight: "bold", // Setting font weight to bold
              size: 12, // Setting font size
            },
          },
        },
      },
    },
  };

  return (
    <div className="w-1/2 h-full m-1 rounded-lg shadow-md"> {/* Container for the pie chart */}
      <div className="w-full h-full flex flex-col justify-between p-1"> {/* Inner container with padding */}
        <div className="flex h-{25vh} items-center justify-between"> {/* Header section with flexbox */}
          <p className="font-bold text-xl">Portfolio</p> {/* Portfolio title */}
          <p className="text-gray-500">
            Total value <strong>$1000</strong> {/* Total value display */}
          </p>
        </div>
        <div className="w-full h-80 relative"> {/* Chart container with relative positioning */}
          {isFetching && (
            <SyncLoader
              color="rgb(0, 51, 102)" // Loader color
              size={10} // Loader size
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" // Centering loader
            />
          )}
          <div className="w-full h-full">
            <Pie data={data} options={options} plugins={[ChartDataLabels]} /> {/* Rendering Pie chart with data, options, and plugins */}
          </div>
        </div>
      </div>
    </div>
  );
}

export { PieChart };
