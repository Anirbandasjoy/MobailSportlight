import testyTableApi from "@/redux/baseApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [testyTableApi.reducerPath]: testyTableApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testyTableApi.middleware),
});
