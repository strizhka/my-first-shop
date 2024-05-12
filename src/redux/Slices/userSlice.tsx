import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productsSlice";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  UserName: string;
  Role: string;
  Password: string;
  AccToken: string | null;
  RefToken: string | null;
}

export interface UserState {
  currentUser: User | null;
  isLoged: boolean;
  cartList: CartItem[];
  AccToken: string | null;
  RefToken: string | null;
}

const initialState: UserState = {
  currentUser: null,
  isLoged: false,
  cartList: [],
  AccToken: null,
  RefToken: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoged = true;
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.isLoged = false;
      state.currentUser = null;
    },
    setAccessToken: (state, action) => {
      state.AccToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.RefToken = action.payload;
    },
    addItemToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItemIndex = state.cartList.findIndex(
        (item) => item.product.id === itemToAdd.id
      );
      if (existingItemIndex !== -1) {
        // Создаем новый объект, чтобы избежать мутации состояния
        state.cartList[existingItemIndex] = {
          ...state.cartList[existingItemIndex],
          quantity: state.cartList[existingItemIndex].quantity + 1,
        };
      } else {
        // Добавляем новый элемент в массив
        state.cartList.push({ product: itemToAdd, quantity: 1 });
      }
    },

    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const itemIndex = state.cartList.findIndex(
        (item) => item.product.id === itemIdToRemove.product.id
      );
      if (itemIndex !== -1) {
        const currentItem = state.cartList[itemIndex];
        if (currentItem.quantity > 1) {
          currentItem.quantity -= 1;
        } else {
          state.cartList.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const {
  login,
  logout,
  setAccessToken,
  setRefreshToken,
  addItemToCart,
  removeItemFromCart,
} = userSlice.actions;

export default userSlice.reducer;
