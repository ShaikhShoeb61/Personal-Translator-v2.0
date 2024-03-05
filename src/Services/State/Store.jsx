import { configureStore } from "@reduxjs/toolkit";
import { LanguagesListApi } from "../Api/LanguagesListApi";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./RootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["inputLanguage","outputLanguage"],
};

const PersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    [LanguagesListApi.reducerPath]: LanguagesListApi.reducer,
    PersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(LanguagesListApi.middleware),
});
export const persistor = persistStore(store);
