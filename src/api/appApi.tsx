import axios from "axios";

export const appApiIns = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: { "Content-Type": "application/json" },
});

export function allProductsApi() {
  return appApiIns.get("products");
}

export function getProductById(_id: number) {
  return appApiIns.get("products/${_id}");
}

export async function allCategoriesApi() {
  return appApiIns.get("categories");
}

export function idCategoriesApi(_id: number) {
  return appApiIns.get("categories/${_id}");
}
