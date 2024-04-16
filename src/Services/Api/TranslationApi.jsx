import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiKey = import.meta.env.VITE_API_KEY;

export const translationApi = createApi({
  reducerPath: "translationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swift-translate.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    translateText: builder.mutation({
      query: ({
        sourceLanguage,
        targetLanguage,
        text,
        anotherTargetLanguage,
      }) => ({
        url: "translate",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": ApiKey,
          "X-RapidAPI-Host": "swift-translate.p.rapidapi.com",
        },
        body: JSON.stringify({
          text: text,
          sourceLang: sourceLanguage,
          targetLang: targetLanguage ? targetLanguage : anotherTargetLanguage,
        }),
      }),
    }),
  }),
});

export const { useTranslateTextMutation } = translationApi;
