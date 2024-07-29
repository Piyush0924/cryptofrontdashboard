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
    <div className="max-w-xs w-full mt-3 md:mt-0"> {/* Container for the dropdown */}
      <select
        className=" w-full font-semibold bg-blue-100 rounded-lg p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500" // Styling for the select element
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