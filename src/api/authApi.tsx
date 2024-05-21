import axios from "axios";
import { User } from "../redux/Slices/userSlice";

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
export interface SignUpResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export const appApiIns = axios.create({
  baseURL: "https://localhost:7224/",
  headers: { "Content-Type": "application/json" },
});

export function loginApi(username: string, password: string) {
  return appApiIns.post<LoginResponse>(
    `Login/Login?username=${username}&password=${password}`
  );
}

export function signUpApi(username: string, password: string, role: string) {
  return appApiIns.post<SignUpResponse>(
    `Login/SignUp?username=${username}&password=${password}&role=${role}`
  );
}

export function testTokensApi(accessToken: string, refreshToken: string) {
  const config = {
    headers: {
      baseURL: "https://localhost:7224/",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  console.log(config);
  console.log(refreshToken, accessToken);
  const data = axios.post<boolean>(
    `Test/TestAccess`,
    { accessToken, refreshToken }, // Отправляем оба токена
    config
  );

  return data;
}

export function getUserByName(name: string) {
  return appApiIns.get<User>(`api/Users?name=${name}`);
}
