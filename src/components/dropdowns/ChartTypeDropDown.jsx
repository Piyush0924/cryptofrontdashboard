import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setChartType } from "../../features/chartTypeSlice";

const ChartTypeDropDown = () => {
  const dispatch = useDispatch();

  //Get Chart type from store
  const chartType = useSelector(
    (state) => state.selectChartType.selectedChartType
  );
  const handleChange = (e) => {
    dispatch(setChartType(e.target.value));
  };
  return (
    <div className="h-10vh  m-4">
      <select
        className="w-full h-12 bg-blue-100 rounded-lg font-medium p-3 cursor-pointer"
        value={chartType}
        onChange={handleChange}
      >
        <option value="chartType" disabled>
          Chart Type
        </option>
        <option value={"lineChart"}>Line Chart</option>
        <option value={"horizontalBarChart"}>Horizontal Bar Chart</option>
        <option value={"verticalBarChart"}>Vertical Bar chart</option>
      </select>
    </div>
  );
};

export { ChartTypeDropDown};
