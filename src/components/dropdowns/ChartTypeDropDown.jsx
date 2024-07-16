import React from "react";
import { useDispatch } from "react-redux"; // Importing useDispatch hook from React-Redux
import { useSelector } from "react-redux"; // Importing useSelector hook from React-Redux
import { setChartType } from "../../features/chartTypeSlice"; // Importing the setChartType action from chartTypeSlice

// ChartTypeDropDown component definition
const ChartTypeDropDown = () => {
  const dispatch = useDispatch(); // Initialize dispatch function

  // Get chart type from the Redux store
  const chartType = useSelector(
    (state) => state.selectChartType.selectedChartType // Access selectedChartType from the store
  );

  // Handle change event for the dropdown
  const handleChange = (e) => {
    dispatch(setChartType(e.target.value)); // Dispatch setChartType action with selected value
  };

  return (
    <div className="h-10vh m-4"> {/* Container for the dropdown */}
      <select
        className="w-full h-12 bg-blue-100 rounded-lg font-medium p-3 cursor-pointer" // Styling for the select element
        value={chartType} // Bind selected value to chartType from the store
        onChange={handleChange} // Handle change event
      >
        <option value="chartType" disabled> {/* Default option */}
          Chart Type
        </option>
        <option value={"lineChart"}>Line Chart</option> {/* Option for Line Chart */}
        <option value={"horizontalBarChart"}>Horizontal Bar Chart</option> {/* Option for Horizontal Bar Chart */}
        <option value={"verticalBarChart"}>Vertical Bar Chart</option> {/* Option for Vertical Bar Chart */}
      </select>
    </div>
  );
};

export { ChartTypeDropDown }; 