import apiSlice from "../apiSlice";

const api_endpoints = "/user";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createLoginApi: builder.mutation({
      query: (data) => ({
        url: `${api_endpoints}/login`,
        method: "POST",
        body: data,
      }),
    }),
    createRegisterApi: builder.mutation({
      query: (data) => ({
        url: `${api_endpoints}/register`,
        method: "POST",
        body: data,
      }),
    }),
    createverifyApi: builder.mutation({
        query: (data) => ({
          url: `${api_endpoints}/verify`,
          method: "POST",
          body: data,
        }),
      }),
  }),
});

export const { useCreateLoginApiMutation, useCreateRegisterApiMutation } =
  userApiSlice;
