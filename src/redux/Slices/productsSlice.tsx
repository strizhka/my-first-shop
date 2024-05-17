import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allProductsApi } from "../../api/productsApi";
import { Category } from "../../components.tsx/basic/sidebar";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface ProductsState {
  list: Product[];
  filtered: Product[];
  filteredCategory: Product[];
  isLoading: boolean;
}

const initialState: ProductsState = {
  list: [],
  filtered: [],
  isLoading: false,
  filteredCategory: [],
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await allProductsApi();
      return res;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err); // Передаем объект ошибки целиком
    }
  }
);

export const prodSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByPrice: (state, { payload }) => {
      state.filtered = state.list.filter(({ price }) => price < payload);
    },
    filterByCategory: (state, { payload }) => {
      state.filtered = state.list.filter(({ category }) => category == payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload.data; // Извлекаем данные из ответа и устанавливаем в state.list
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { filterByPrice, filterByCategory } = prodSlice.actions;

export default prodSlice.reducer;
