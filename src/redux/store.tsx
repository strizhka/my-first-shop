import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { prodSlice } from "./Slices/productsSlice";
import { userSlice } from "./Slices/userSlice";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState")!)
  : {};

const rootReducer = combineReducers({
  products: prodSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
