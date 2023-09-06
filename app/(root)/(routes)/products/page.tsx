import { ProductListResponse } from "@/types";
import ProductsClient from "./components/clients";

interface RootPageProps {
  searchParams: {
    limit: string;
    skip: string;
  };
}

const getProducts = async (limit: string, skip: string) => {
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  if (!response.ok) throw new Error("Failed to fetch Products");

  return response.json();
};

const ProductsPage = async ({ searchParams }: RootPageProps) => {
  const data: ProductListResponse = await getProducts(
    searchParams.limit || "10",
    searchParams.skip || "0"
  );

  return (
    <div className="h-full p-4 space-y-2">
      <ProductsClient data={data.products} total={data.total} />
    </div>
  );
};

export default ProductsPage;
