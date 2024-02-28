import { configureStore } from "@reduxjs/toolkit";
import { LanguagesListApi } from "../Api/LanguagesListApi";
import dropdownReducer from "./Slices/DropdownSlice";
import InputLanguagesReducer from "./Slices/InputLanguagesSlice";
import OutputLanguagesReducer from "./Slices/OutputLanguagesSlice";

export const store = configureStore({
  reducer: {
    [LanguagesListApi.reducerPath]: LanguagesListApi.reducer,
    dropdown: dropdownReducer,
    InputLanguage: InputLanguagesReducer,
    Outputlanguage: OutputLanguagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LanguagesListApi.middleware),
});
