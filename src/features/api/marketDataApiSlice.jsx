import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const marketDataApi = createApi({
  reducerPath: "marketDataApi", // Add a reducerPath for the api slice
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getMarketData: builder.query({
      query: ({ coin, currency,time}) =>
       `/coins/${coin}/market_chart?vs_currency=${currency}&days=${time}&interval`,
    }),
    getExchangeData: builder.query({
      query: () => `/exchange_rates`,
    }),
  }),
});

export const { useGetMarketDataQuery, useGetExchangeDataQuery } = marketDataApi;