import { createSlice } from "@reduxjs/toolkit";

// Initial state for the currency dropdown slice
const initialSelectedCurrency = {
  selectedCurrency: "usd", // Default selected currency
};

// Create a slice of the Redux state for managing selected currency
export const currencyDropDownSlice = createSlice({
  name: "selectCurrency", // Slice name
  initialState: initialSelectedCurrency, // Initial state for the slice
  reducers: {
    // Reducer function to set the selected currency
    setCurrency: (state, action) => {
      state.selectedCurrency = action.payload; // Update selectedCurrency based on the action payload
    },
  },
});

// Export the action creator and reducer function
export const { setCurrency } = currencyDropDownSlice.actions; // Export action creator
export default currencyDropDownSlice.reducer; // Export reducer function
