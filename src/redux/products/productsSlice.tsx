import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allProductsApi } from "../../api/appApi";
import { Category } from "../../components.tsx/sidebar";

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
  isLoading: boolean;
}

const initialState: ProductsState = {
  list: [],
  isLoading: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await allProductsApi();
      return res; // Возвращаем весь объект ответа, а не только res.data
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err); // Передаем объект ошибки целиком
    }
  }
);

export const prodSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
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

export default prodSlice.reducer;
