import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const marketDataApi = createApi({
  reducerPath: "marketDataApi", // Specifies the slice name in the Redux store
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Sets up the base query function with a base URL
  endpoints: (builder) => ({
    getMarketData: builder.query({
      query: ({ coin, currency, time }) =>
        `/coins/${coin}/market_chart?vs_currency=${currency}&days=${time}&interval`, // Endpoint for fetching market data for a specific coin
    }),
    getExchangeData: builder.query({
      query: () => `/exchange_rates`, // Endpoint for fetching exchange rates data
    }),
  }),
});

export const {
  useGetMarketDataQuery, // React hook for fetching market data for a specific coin
  useGetExchangeDataQuery, // React hook for fetching exchange rates data
} = marketDataApi;
