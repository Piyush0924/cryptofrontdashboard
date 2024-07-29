import { configureStore } from "@reduxjs/toolkit";
import { coinApi } from "../features/api/coinApiSlice";

import { marketDataApi } from "../features/api/marketDataApiSlice";
import currencyDropDownReducer from "../features/currencyDropDownSlice";
import cryptoCurrencyDropDownReducer from "../features/cryptoCurrencyDropDownSlice";
import timeReducer from "../features/timeSlice";
import exchangeCurrencyDropDownReducer from "../features/exchageCurrenciesSlice";
import chartTypeSliceReducer from "../features/chartTypeSlice";

//configure store
export const store = configureStore({
  //reducers
  reducer: {
    [coinApi.reducerPath]: coinApi.reducer,
    

    [marketDataApi.reducerPath]: marketDataApi.reducer,
    selectCurrency: currencyDropDownReducer,///reducer method name selectCurrency
    selectCryptoCurrency: cryptoCurrencyDropDownReducer,
    selectTime: timeReducer,
    exchangeCurrency: exchangeCurrencyDropDownReducer,
    selectChartType: chartTypeSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(coinApi.middleware)
    
      .concat(marketDataApi.middleware),
});
/*The need for this middleware arises from the fact that the currencyApi slice likely includes
 asynchronous API calls to fetch currency data. Middleware provided by Redux Toolkit, when combined 
 with getDefaultMiddleware(), helps manage asynchronous actions gracefully by providing features like
  Redux Thunk, which allows for asynchronous logic within Redux actions. */
