import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const ApiKey = import.meta.env.VITE_API_KEY;

export const LanguagesListApi = createApi({
  reducerPath: "LanguagesListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fast-and-highly-accurate-language-detection.p.rapidapi.com/",
    prepareHeaders: (headers) => {
       headers.set('X-RapidAPI-Key', ApiKey);
       headers.set('X-RapidAPI-Host', 'fast-and-highly-accurate-language-detection.p.rapidapi.com');
       return headers;
      },
  }),
  endpoints: (builder) => ({
    getLanguagesList: builder.query({
      query: () => ({
        url: 'languages',
        method: 'GET'
      }),
    }),
  }),
});
export const { useGetLanguagesListQuery } = LanguagesListApi;
