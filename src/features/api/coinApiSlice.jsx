import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinApi = createApi({
  reducerPath: "coinApi", // Specifies the slice name in the Redux store
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Sets up the base query function with a base URL
  endpoints: (builder) => ({
    getTrendingCoins: builder.query({
      query: () => "/search/trending", // Endpoint for fetching trending coins
    }),
    getMarkets: builder.query({
      query: () =>
        "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en", // Endpoint for fetching market data
    }),
    getAllCoins: builder.query({
      query: () => "/coins/list", // Endpoint for fetching all available coins
    }),
  }),
});

export const {
  useGetTrendingCoinsQuery, // React hook for fetching trending coins data
  useGetMarketsQuery, // React hook for fetching market data
  useGetAllCoinsQuery, // React hook for fetching all coins data
} = coinApi;
