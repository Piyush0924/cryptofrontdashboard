import { createSlice } from "@reduxjs/toolkit";

// Initial state for the exchange dropdown slice
const initialSelectedCurrency = {
  buyCurrency: "",   // Default value for buy currency
  sellCurrency: "",  // Default value for sell currency
};

// Create a slice of the Redux state for managing exchange currencies
export const exchangeDropDownSlice = createSlice({
  name: "exchangeCurrency", // Slice name
  initialState: initialSelectedCurrency, // Initial state for the slice
  reducers: {
    // Reducer function to set the buy currency
    setBuyCurrency: (state, action) => {
      state.buyCurrency = action.payload; // Update buyCurrency based on the action payload
    },
    // Reducer function to set the sell currency
    setSellCurrency: (state, action) => {
      state.sellCurrency = action.payload; // Update sellCurrency based on the action payload
    },
  },
});

// Export the action creators and reducer function
export const { setBuyCurrency, setSellCurrency } = exchangeDropDownSlice.actions; // Export action creators
export default exchangeDropDownSlice.reducer; // Export reducer function
