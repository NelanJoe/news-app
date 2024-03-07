import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const newsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => {
        return {
          method: "GET",
          url: `/top-headlines?country=us&apiKey=${API_KEY}`,
        };
      },
      transformResponse: (response) => response.articles,
      invalidatesTags: ["news"],
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
