import { Suspense } from "react";

import { LIMIT } from "@/constants/url-params";
import ProductsClient from "./components/clients";
import { ProductListResponse, ProductsPageProps } from "@/types/products";
import Await from "@/components/loading/await";
import DataTableLoading from "@/components/data-table/data-table-loading";

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const productsRes = await fetch(
    `https://dummyjson.com/products?limit=${
      searchParams.limit || LIMIT.toString()
    }&skip=${searchParams.skip || "0"}`,
    { cache: "no-cache" }
  );

  if (!productsRes.ok) return <p>Failed to fetch Products</p>;

  const productsResData: Promise<ProductListResponse> =
    await productsRes.json();

  return (
    <div className="h-full p-4 space-y-2">
      <Suspense key={searchParams.skip} fallback={<DataTableLoading />}>
        <Await promise={productsResData}>
          {({ products, total }) => (
            <ProductsClient data={products} total={total} />
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default ProductsPage;
