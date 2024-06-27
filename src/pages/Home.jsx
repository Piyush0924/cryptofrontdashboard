import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../components/navbar/Navbar";
import { ErrorBoundary } from 'react-error-boundary';

// Memoize and Lazy Load Components
const MemoizedCryptoCurrencyDropDown = React.memo(
  React.lazy(() => import("../components/dropdowns/CryptoCurrencyDropDown").then(module => ({ default: module.CryptoCurrencyDropDown })))
);
const MemoizedCurrencyDropDown = React.memo(
  React.lazy(() => import("../components/dropdowns/CurrencyDropDown").then(module => ({ default: module.CurrencyDropDown })))
);
const MemoizedSearchbar = React.memo(
  React.lazy(() => import("../components/searchbar/Searchbar").then(module => ({ default: module.Searchbar })))
);
const MemoizedTimeButton = React.memo(
  React.lazy(() => import("../components/timeButtons/TimeButton").then(module => ({ default: module.TimeButton })))
);
const MemoizedChartTypeDropDown = React.memo(
  React.lazy(() => import("../components/dropdowns/ChartTypeDropDown").then(module => ({ default: module.ChartTypeDropDown })))
);
const MemoizedSidebar = React.memo(
  React.lazy(() => import("../components/sidebar/Sidebar").then(module => ({ default: module.Sidebar })))
);
const MemoizedPieChart = React.memo(
  React.lazy(() => import("../components/charts/PieChart").then(module => ({ default: module.PieChart })))
);
const MemoizedExchangeRates = React.memo(
  React.lazy(() => import("../components/exchangerates/ExchangeRates").then(module => ({ default: module.ExchangeRates })))
);
const MemoizedHorizontalBarChart = React.memo(
  React.lazy(() => import("../components/charts/HorizontalBarChart").then(module => ({ default: module.HorizontalBarChart })))
);
const MemoizedVerticalBarChart = React.memo(
  React.lazy(() => import("../components/charts/VerticalBarChart").then(module => ({ default: module.VerticalBarChart })))
);
const MemoizedLineChart = React.memo(
  React.lazy(() => import("../components/charts/LineChart").then(module => ({ default: module.LineChart })))
);

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

const Home = () => {
  const chartType = useSelector((state) => state.selectChartType.selectedChartType);

  return (
    <div className="w-full">
      <Navbar />

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full">
          <div className="md:w-4/5 flex flex-col h-full">
            <div className="flex justify-between items-center h-20 px-4 md:px-8 bg-red-500">
              <Suspense fallback={<div>Loading currency dropdown...</div>}>
                <MemoizedCurrencyDropDown />
              </Suspense>
              <Suspense fallback={<div>Loading searchbar...</div>}>
                <MemoizedSearchbar />
              </Suspense>
            </div>
            <div className="flex flex-col md:flex-col h-full bg-red-100">
              <div className="md:w-full flex flex-col h-full bg-orange-100">
                <div className="flex justify-between items-center h-20 px-1 md:px-3 bg-blue-500">
                  <Suspense fallback={<div>Loading time button...</div>}>
                    <MemoizedTimeButton />
                  </Suspense>
                  
                  <Suspense fallback={<div>Loading crypto currency dropdown...</div>}>
                    <MemoizedCryptoCurrencyDropDown />
                  </Suspense>
                  <Suspense fallback={<div>Loading chart type dropdown...</div>}>
                    <MemoizedChartTypeDropDown />
                  </Suspense>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center">
                  <Suspense fallback={<div>Loading chart...</div>}>
                    {chartType === "verticalBarChart" ? (
                      <MemoizedVerticalBarChart />
                    ) : chartType === "horizontalBarChart" ? (
                      <MemoizedHorizontalBarChart />
                    ) : (
                      <MemoizedLineChart />
                    )}
                  </Suspense>
                </div>
              </div>
              <div className="md:w-full flex flex-row justify-between items-stretch">
                <Suspense fallback={<div>Loading pie chart...</div>}>
                  <MemoizedPieChart />
                </Suspense>
                <Suspense fallback={<div>Loading exchange rates...</div>}>
                  <MemoizedExchangeRates />
                </Suspense>
              </div>
            </div>
          </div>
          <div className="md:w-1/5">
            <Suspense fallback={<div>Loading sidebar...</div>}>
              <MemoizedSidebar />
            </Suspense>
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export { Home };
