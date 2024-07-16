import { createSlice } from "@reduxjs/toolkit";

// Initial state for the time slice
const initialSelectedTime = {
  selectedTime: "7", // Default selected time period (7 days)
};

// Create a slice of the Redux state for managing selected time
export const timeSlice = createSlice({
  name: "selectTime", // Slice name
  initialState: initialSelectedTime, // Initial state for the slice
  reducers: {
    // Reducer function to set the selected time period
    setTime: (state, action) => {
      state.selectedTime = action.payload; // Update selectedTime based on the action payload
    },
  },
});

// Export the action creator and reducer function
export const { setTime } = timeSlice.actions; // Export action creator
export default timeSlice.reducer; // Export reducer function
