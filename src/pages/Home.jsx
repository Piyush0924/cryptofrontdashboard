import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../components/navbar/Navbar";
import { ErrorBoundary } from "react-error-boundary";

// Memoize and Lazy Load Components
const MemoizedCryptoCurrencyDropDown = React.memo(
  React.lazy(() =>
    import("../components/dropdowns/CryptoCurrencyDropDown").then((module) => ({
      default: module.CryptoCurrencyDropDown,
    }))
  )
);
const MemoizedCurrencyDropDown = React.memo(
  React.lazy(() =>
    import("../components/dropdowns/CurrencyDropDown").then((module) => ({
      default: module.CurrencyDropDown,
    }))
  )
);
const MemoizedSearchbar = React.memo(
  React.lazy(() =>
    import("../components/searchbar/Searchbar").then((module) => ({
      default: module.Searchbar,
    }))
  )
);
const MemoizedTimeButton = React.memo(
  React.lazy(() =>
    import("../components/timeButtons/TimeButton").then((module) => ({
      default: module.TimeButton,
    }))
  )
);
const MemoizedChartTypeDropDown = React.memo(
  React.lazy(() =>
    import("../components/dropdowns/ChartTypeDropDown").then((module) => ({
      default: module.ChartTypeDropDown,
    }))
  )
);
const MemoizedSidebar = React.memo(
  React.lazy(() =>
    import("../components/sidebar/Sidebar").then((module) => ({
      default: module.Sidebar,
    }))
  )
);
const MemoizedPieChart = React.memo(
  React.lazy(() =>
    import("../components/charts/PieChart").then((module) => ({
      default: module.PieChart,
    }))
  )
);
const MemoizedExchangeRates = React.memo(
  React.lazy(() =>
    import("../components/exchangerates/ExchangeRates").then((module) => ({
      default: module.ExchangeRates,
    }))
  )
);
const MemoizedHorizontalBarChart = React.memo(
  React.lazy(() =>
    import("../components/charts/HorizontalBarChart").then((module) => ({
      default: module.HorizontalBarChart,
    }))
  )
);
const MemoizedVerticalBarChart = React.memo(
  React.lazy(() =>
    import("../components/charts/VerticalBarChart").then((module) => ({
      default: module.VerticalBarChart,
    }))
  )
);
const MemoizedLineChart = React.memo(
  React.lazy(() =>
    import("../components/charts/LineChart").then((module) => ({
      default: module.LineChart,
    }))
  )
);

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
  const chartType = useSelector(
    (state) => state.selectChartType.selectedChartType
  );

  return (
    <>
      <div className="w-full h-full mb-14 relative">
        {/* Navbar component */}
        <Navbar />

        {/* ErrorBoundary component to catch errors */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="flex flex-col md:flex-row justify-between items-stretch w-full gap-4 bg-slate-400">
            {/* Main content area */}
            <div className="md:w-3/4 h-full">
              {/* Top section with dropdowns and search bar */}
              <div className="flex justify-between items-center gap-4 md:gap-0 h-20 px-4 md:px-8 bg-red-500 rounded-t-md">
                {/* Lazy-loaded CurrencyDropDown component */}
                <Suspense fallback={<div>Loading currency dropdown...</div>}>
                  <MemoizedCurrencyDropDown />
                </Suspense>
                {/* Lazy-loaded Searchbar component */}
                <Suspense fallback={<div>Loading searchbar...</div>}>
                  <MemoizedSearchbar />
                </Suspense>
              </div>

              {/* Middle section with time button, crypto currency dropdown, and chart type dropdown */}
              <div className="flex flex-col md:flex-row md:justify-between gap-0 md:gap-32 items-center h-40 md:h-20 px-1 md:px-3 bg-blue-300">
                {/* Lazy-loaded TimeButton component */}
                <Suspense fallback={<div>Loading time button...</div>}>
                  <MemoizedTimeButton />
                </Suspense>

                {/* Lazy-loaded CryptoCurrencyDropDown component */}
                <Suspense fallback={<div>Loading crypto currency dropdown...</div>}>
                  <MemoizedCryptoCurrencyDropDown />
                </Suspense>

                {/* Lazy-loaded ChartTypeDropDown component */}
                <Suspense fallback={<div>Loading chart type dropdown...</div>}>
                  <MemoizedChartTypeDropDown />
                </Suspense>
              </div>

              {/* Display selected chart based on chartType */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <Suspense fallback={<div>Loading chart...</div>}>
                  {/* Conditional rendering of chart based on chartType */}
                  {chartType === "verticalBarChart" ? (
                    <MemoizedVerticalBarChart />
                  ) : chartType === "horizontalBarChart" ? (
                    <MemoizedHorizontalBarChart />
                  ) : (
                    <MemoizedLineChart />
                  )}
                </Suspense>
              </div>

              {/* Bottom section with pie chart and exchange rates */}
              <div className="flex flex-col md:flex-row md:mt-3">
                {/* Lazy-loaded PieChart component */}
                <Suspense fallback={<div>Loading pie chart...</div>}>
                  <MemoizedPieChart />
                </Suspense>
                {/* Lazy-loaded ExchangeRates component */}
                <Suspense fallback={<div>Loading exchange rates...</div>}>
                  <MemoizedExchangeRates />
                </Suspense>
              </div>
            </div>

            {/* Sidebar component */}
            <div className="md:w-1/4 h-full">
              <Suspense fallback={<div>Loading sidebar...</div>}>
                <MemoizedSidebar />
              </Suspense>
            </div>
          </div>
        </ErrorBoundary>
      </div>
    </>
  );
};

export { Home };
