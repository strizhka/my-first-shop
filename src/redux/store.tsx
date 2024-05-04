import { configureStore } from "@reduxjs/toolkit";
import { categSlice } from "./categories/categoriesSlice";

export const store = configureStore({
  reducer: { categories: categSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
