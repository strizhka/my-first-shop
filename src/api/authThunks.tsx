import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  LoginResponse,
  SignUpResponse,
  loginApi,
  signUpApi,
  testTokensApi,
} from "./authApi";
import {
  login,
  setAccessToken,
  setRefreshToken,
} from "../redux/Slices/userSlice";

export const userSignUp = createAsyncThunk(
  "auth/signup",
  async (
    {
      username,
      password,
      role,
    }: { username: string; password: string; role: string },
    { dispatch }
  ) => {
    try {
      const signUp: SignUpResponse = (await signUpApi(username, password, role))
        .data;

      const accessToken = signUp.accessToken;
      const refreshToken = signUp.refreshToken;
      const user = signUp.user;

      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));

      try {
        const action: any = await dispatch(
          validateTokens({
            accessToken: accessToken,
            refreshToken: refreshToken,
          })
        );
        if (action.payload) {
          dispatch(login(user));
        }
      } catch (error) {
        console.error("Ошибка при проверке токенов:", error);
      }

      return signUp;
    } catch (error) {}
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async (
    { username, password }: { username: string; password: string },
    { dispatch }
  ) => {
    try {
      const loged: LoginResponse = (await loginApi(username, password)).data;

      const accessToken = loged.accessToken;
      const refreshToken = loged.refreshToken;
      const user = loged.user;
      console.log(loged.user.userName);

      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
      dispatch(login(user));
      console.log(user.userName);

      return loged;
    } catch (error) {}
  }
);

export const validateTokens = createAsyncThunk(
  "auth/validateTokens",
  async ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => {
    try {
      const data = await testTokensApi(accessToken, refreshToken);

      return data;
    } catch (error) {
      console.error("Token validation failed:", error);
      throw error;
    }
  }
);
