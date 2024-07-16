import { createSlice } from "@reduxjs/toolkit";

// Initial state for the crypto currency dropdown slice
const initialSelectedCurrency = {
  selectedCryptoCurrency: "bitcoin", // Default selected crypto currency
};

// Create a slice of the Redux state for managing selected crypto currency
export const cryptoCurrencyDropDownSlice = createSlice({
  name: "selectCryptoCurrency", // Slice name
  initialState: initialSelectedCurrency, // Initial state for the slice
  reducers: {
    // Reducer function to set the selected crypto currency
    setCryptoCurrency: (state, action) => {
      state.selectedCryptoCurrency = action.payload; // Update selectedCryptoCurrency based on the action payload
    },
  },
});

// Export the action creator and reducer function
export const { setCryptoCurrency } = cryptoCurrencyDropDownSlice.actions; // Export action creator
export default cryptoCurrencyDropDownSlice.reducer; // Export reducer function
