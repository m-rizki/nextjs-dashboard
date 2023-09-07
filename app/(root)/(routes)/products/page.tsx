import { ProductListResponse } from "@/types";
import { LIMIT } from "@/constants/url";
import ProductsClient from "./components/clients";

interface RootPageProps {
  searchParams: {
    limit: string;
    skip: string;
  };
}

const ProductsPage = async ({ searchParams }: RootPageProps) => {
  const productsRes = await fetch(
    `https://dummyjson.com/products?limit=${
      searchParams.limit || LIMIT.toString()
    }&skip=${searchParams.skip || "0"}`
  );

  if (!productsRes.ok) return <p>Failed to fetch Products</p>;

  const productsResData: ProductListResponse = await productsRes.json();

  await new Promise((resolve) => setTimeout(resolve, 300));

  const products = productsResData.products;
  const total = productsResData.total;

  return (
    <div className="h-full p-4 space-y-2">
      {/* TODO: Loading UI every products reevaluated, use server action approach */}
      <ProductsClient data={products} total={total} />
    </div>
  );
};

export default ProductsPage;
