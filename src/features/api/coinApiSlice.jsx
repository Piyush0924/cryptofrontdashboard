import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinApi = createApi({
  reducerPath: "coinApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getTrendingCoins: builder.query({
      query: () => "/search/trending",
    }),
    getMarkets: builder.query({
      query: () =>
        "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en",
    }),
    getAllCoins: builder.query({
      query: () => "/coins/list",
    }),
  }),
});

export const {
  useGetTrendingCoinsQuery,
  useGetMarketsQuery,
  useGetAllCoinsQuery,
} = coinApi;
