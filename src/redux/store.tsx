import { configureStore } from "@reduxjs/toolkit";
import { prodSlice } from "./products/productsSlice";

export const store = configureStore({
  reducer: { products: prodSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
