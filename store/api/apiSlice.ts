import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_URL as string, //localhost:3000
  credentials: "include",
});

const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
});

export default apiSlice;
