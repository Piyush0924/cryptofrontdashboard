import { createSlice } from "@reduxjs/toolkit";

const initialSelectedCurrency = {
  selectedCryptoCurrency: "bitcoin",
};

export const cryptoCurrencyDropDownSlice = createSlice({
  name: "selectCryptoCurrency",
  initialState: initialSelectedCurrency,
  reducers: {
    setCryptoCurrency: (state, action) => {
      state.selectedCryptoCurrency = action.payload;
    },
  },
});
  
export const { setCryptoCurrency } = cryptoCurrencyDropDownSlice.actions;
export default cryptoCurrencyDropDownSlice.reducer;