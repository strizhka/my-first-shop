import axios from "axios";

export const prodApiIns = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: { "Content-Type": "application/json" },
});

export function allProductsApi() {
  return prodApiIns.get(`products`);
}

export function getProductById(_id: number) {
  return prodApiIns.get(`products/${_id}`);
}

export async function allCategoriesApi() {
  return prodApiIns.get(`products/categories`);
}

export function getCategoryById(category: string) {
  return prodApiIns.get(`products/category/${category}`);
}
