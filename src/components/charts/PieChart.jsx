import React from "react";
import { useGetMarketsQuery } from "../../features/api/coinApiSlice";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import SyncLoader from "react-spinners/SyncLoader";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  //fetch data
  const { data: marketData, isFetching } = useGetMarketsQuery();

  const data = {
    labels: marketData?.slice(0, 3).map((coin) => coin.name),
    datasets: [
      {
        data: marketData?.slice(0, 3).map((coin) => coin.total_volume),
        backgroundColor: [
          "rgb(236, 107, 86)",
          "rgb(255, 193, 84)",
          "rgb(71, 179, 156)",
        ],
        borderWidth: 1,
        borderColor: "rgb(255, 255, 255)",
      },
    ],
  };

  //chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
    },
    plugins: {
      legend: {
        position: "right",
        align: "center",
        display: true,
        padding: 10,
        labels: {
          color: "rgb(67, 67, 177)",
          font: {
            size: 10,
          },
        },
      },
      datalabels: {
        display: true,
        color: "rgb(255, 255, 255)",
        align: "center",
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          if (dataArr && dataArr.length > 0) {
            dataArr.map((data)=>{
              return sum += data;
            });
            let percentage = "$" + ((value * 1000) / sum).toFixed(2);
            return percentage;
          } else {
            return ""; // Handle the case where dataArr is null or empty
          }
        },
        labels: {
          title: {
            font: {
              weight: "bold",
              size: 12,
            },
          },
        },
      },
    },
  };

  return (
    <div className="w-1/2 h-full m-1 rounded-lg shadow-md">
      <div className="w-full h-full flex flex-col justify-between p-1">
        <div className="flex h-{25vh} items-center justify-between">
          <p className="font-bold text-xl">Portfolio</p>
          <p className="text-gray-500">
            Total value <strong>$1000</strong>
          </p>
        </div>
        <div className="w-full h-80 relative">
          {isFetching && (
            <SyncLoader
              color="rgb(0, 51, 102)"
              size={10}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          )}
          <div className="w-full h-full">
            <Pie data={data} options={options} plugins={[ChartDataLabels]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export {PieChart};
