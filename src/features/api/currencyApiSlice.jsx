import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://cryptoserver.onrender.com/" }),
  endpoints: (builder) => ({
    getAllCurrencies: builder.query({
      query: () => ({
        url: "/currency",
        method: 'GET'
      }),
    }),
  }),
});

export const { useGetAllCurrenciesQuery } = currencyApi;