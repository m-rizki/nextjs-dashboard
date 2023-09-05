import { ProductListResponse } from "@/types";
import ProductsClient from "./components/clients";

interface RootPageProps {
  searchParams: {
    limit: string;
    skip: string;
  };
}

const ProductsPage = async ({ searchParams }: RootPageProps) => {
  const getProducts = async (skip: string = "0", limit: string = "10") => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        { cache: "no-store" }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("[GET_PRODUCTS]", error);
      return [];
    }
  };

  const data: ProductListResponse = await getProducts(
    searchParams.limit,
    searchParams.skip
  );

  return (
    <div className="h-full p-4 space-y-2">
      <ProductsClient data={data.products} total={data.total} />
    </div>
  );
};

export default ProductsPage;
