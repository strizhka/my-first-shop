import axios from "axios";
import { User } from "../redux/Slices/userSlice";

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
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
  return appApiIns.post<LoginResponse>(
    `Login/SignUp?username=${username}&password=${password}&role=${role}`
  );
}

export function testTokensApi() {
  return appApiIns.post<boolean>(`Test/TestAccess`);
}

export function getUserByName(name: string) {
  return appApiIns.get<User>(`api/Users?name=${name}`);
}
