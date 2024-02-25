import { configureStore } from '@reduxjs/toolkit';
import { LanguagesListApi } from '../Api/LanguagesListApi';
import dropdownReducer from './Slices/DropdownSlice';

export const store = configureStore({
  reducer: {
    [LanguagesListApi.reducerPath]: LanguagesListApi.reducer,
    dropdown: dropdownReducer, // Keyed by 'dropdown' instead of 'dropdownReducer'
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LanguagesListApi.middleware),
});
