import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiKey = import.meta.env.VITE_API_KEY;

export const translationApi = createApi({
  reducerPath: "translationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://deep-translate1.p.rapidapi.com/language/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", ApiKey);
      headers.set("X-RapidAPI-Host", "deep-translate1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    translateText: builder.mutation({
      query: ({
        sourceLanguage,
        targetLanguage,
        text,
        anotherTargetLanguage,
      }) => ({
        url: "translate/v2",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text, // The text to be translated
          source: sourceLanguage, // The source language
          target: targetLanguage || anotherTargetLanguage, // Target language
        }),
      }),
    }),
    getLanguagesList: builder.query({
      query: () => "translate/v2/languages",
    }),
    autoDetectLanguage: builder.mutation({
      query: (text) => ({
        url: "translate/v2/detect",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": ApiKey, // Ensure headers are set
          "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
        },
        body: JSON.stringify({ q: text }), // Ensure the body is JSON serialized
      }),
    }),
  }),
});

export const {
  useAutoDetectLanguageMutation,
  useGetLanguagesListQuery,
  useTranslateTextMutation,
} = translationApi;
