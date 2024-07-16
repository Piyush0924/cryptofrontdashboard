import { createSlice } from "@reduxjs/toolkit";

// Initial state for the chart type slice
const initialState = {
  selectedChartType: "LineChart", // Default selected chart type
};

// Create a slice of the Redux state for managing chart types
export const chartTypeSlice = createSlice({
  name: "selectChartType", // Slice name
  initialState, // Initial state defined above
  reducers: {
    // Reducer function to set the selected chart type
    setChartType: (state, action) => {
      state.selectedChartType = action.payload; // Update selectedChartType based on the action payload
    },
  },
});

// Export the action creator and reducer function
export const { setChartType } = chartTypeSlice.actions; // Export action creator
export default chartTypeSlice.reducer; // Export reducer function
