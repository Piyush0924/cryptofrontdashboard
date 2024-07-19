import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../components/navbar/Navbar";
import { ErrorBoundary } from 'react-error-boundary';

// Memoize and Lazy Load Components
const CryptoCurrencyDropDown = React.lazy(() => import("../components/dropdowns/CryptoCurrencyDropDown"));
const CurrencyDropDown = React.lazy(() => import("../components/dropdowns/CurrencyDropDown"));
const Searchbar = React.lazy(() => import("../components/searchbar/Searchbar"));
const TimeButton = React.lazy(() => import("../components/timeButtons/TimeButton"));
const ChartTypeDropDown = React.lazy(() => import("../components/dropdowns/ChartTypeDropDown"));
const Sidebar = React.lazy(() => import("../components/sidebar/Sidebar"));
const PieChart = React.lazy(() => import("../components/charts/PieChart"));
const ExchangeRates = React.lazy(() => import("../components/exchangerates/ExchangeRates"));
const HorizontalBarChart = React.lazy(() => import("../components/charts/HorizontalBarChart"));
const VerticalBarChart = React.lazy(() => import("../components/charts/VerticalBarChart"));
const LineChart = React.lazy(() => import("../components/charts/LineChart"));

// Error fallback component for ErrorBoundary
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

const Home = () => {
  // Redux selector to get selected chart type from store
  const chartType = useSelector((state) => state.selectChartType.selectedChartType);

  return (
    <div className="w-full">
      {/* Navbar component */}
      <Navbar />

      {/* ErrorBoundary component to catch errors */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full">
          {/* Main content area */}
          <div className="md:w-4/5 flex flex-col h-full">
            {/* Top section with dropdowns and search bar */}
            <div className="flex justify-between items-center h-20 px-4 md:px-8 bg-red-500">
              {/* Lazy-loaded CurrencyDropDown component */}
              <Suspense fallback={<div>Loading currency dropdown...</div>}>
                <CurrencyDropDown />
              </Suspense>
              {/* Lazy-loaded Searchbar component */}
              <Suspense fallback={<div>Loading searchbar...</div>}>
                <Searchbar />
              </Suspense>
            </div>

            {/* Middle section with time button, crypto currency dropdown, and chart type dropdown */}
            <div className="flex flex-col md:flex-col h-full bg-red-100">
              <div className="md:w-full flex flex-col h-full bg-orange-100">
                <div className="flex justify-between items-center h-20 px-1 md:px-3 bg-blue-500">
                  {/* Lazy-loaded TimeButton component */}
                  <Suspense fallback={<div>Loading time button...</div>}>
                    <TimeButton />
                  </Suspense>
                  
                  {/* Lazy-loaded CryptoCurrencyDropDown component */}
                  <Suspense fallback={<div>Loading crypto currency dropdown...</div>}>
                    <CryptoCurrencyDropDown />
                  </Suspense>
                  
                  {/* Lazy-loaded ChartTypeDropDown component */}
                  <Suspense fallback={<div>Loading chart type dropdown...</div>}>
                    <ChartTypeDropDown />
                  </Suspense>
                </div>

                {/* Display selected chart based on chartType */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <Suspense fallback={<div>Loading chart...</div>}>
                    {/* Conditional rendering of chart based on chartType */}
                    {chartType === "verticalBarChart" ? (
                      <VerticalBarChart />
                    ) : chartType === "horizontalBarChart" ? (
                      <HorizontalBarChart />
                    ) : (
                      <LineChart />
                    )}
                  </Suspense>
                </div>
              </div>

              {/* Bottom section with pie chart and exchange rates */}
              <div className="md:w-full flex flex-row justify-between items-stretch">
                {/* Lazy-loaded PieChart component */}
                <Suspense fallback={<div>Loading pie chart...</div>}>
                  <PieChart />
                </Suspense>
                {/* Lazy-loaded ExchangeRates component */}
                <Suspense fallback={<div>Loading exchange rates...</div>}>
                  <ExchangeRates />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Sidebar section */}
          <div className="md:w-1/5">
            {/* Lazy-loaded Sidebar component */}
            <Suspense fallback={<div>Loading sidebar...</div>}>
              <Sidebar />
            </Suspense>
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export { Home };
