// "use server"; -> TODO: using server action if the feature already stable

import { LIMIT } from "@/constants/url-params";
import { ProductListResponse } from "@/types/products";

export const getProducts = async (limit: string, skip: string) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit || LIMIT.toString()}&skip=${
      skip || "0"
    }`
  );

  if (!res.ok) return "Failed to fetch Products";

  const data: ProductListResponse = await res.json();

  return data;
};
