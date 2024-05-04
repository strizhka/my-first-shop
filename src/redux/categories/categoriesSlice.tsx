import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allCategoriesApi } from "../../api/appApi";

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface CategoriesState {
  list: Category[];
  isLoading: boolean;
}

const initialState: CategoriesState = {
  list: [],
  isLoading: false,
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const res = await allCategoriesApi();
      return res; // Возвращаем весь объект ответа, а не только res.data
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err); // Передаем объект ошибки целиком
    }
  }
);

export const categSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload.data; // Извлекаем данные из ответа и устанавливаем в state.list
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default categSlice.reducer;
