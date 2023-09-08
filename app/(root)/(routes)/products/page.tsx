import { Suspense } from "react";

import { LIMIT } from "@/constants/url-params";
import ProductsClient from "./components/clients";
import { ProductListResponse, ProductsPageProps } from "@/types/products";
import Await from "@/components/loading/await";
import DataTableLoading from "@/components/data-table/data-table-loading";
import {
  URL_GET_PRODUCTS,
  URL_GET_PRODUCTS_BY_CATEGORY,
  URL_GET_PRODUCTS_SEARCH,
} from "@/constants/url-endpoints";
import { Separator } from "@/components/ui/separator";
import ProductsSearchInput from "@/components/products-search-input";
import ProductsFilterCategory from "@/components/products-filter-category";

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const limit = searchParams.limit || LIMIT.toString();
  const skip = searchParams.skip || "0";

  const defaultUrlParams = `?limit=${limit}&skip=${skip}`;
  let url = URL_GET_PRODUCTS + defaultUrlParams;

  if (!!searchParams.q) {
    url = URL_GET_PRODUCTS_SEARCH + defaultUrlParams + `&q=${searchParams.q}`;
  }

  if (!!searchParams.category) {
    url = URL_GET_PRODUCTS_BY_CATEGORY + `/${searchParams.category}` + defaultUrlParams + `&q=${searchParams.q}`
  }

  const productsRes = await fetch(url, { cache: "no-cache" });

  if (!productsRes.ok) return <p>Failed to fetch Products</p>;

  const productsResData: Promise<ProductListResponse> =
    await productsRes.json();

  return (
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Products</h3>
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sequi?
      </p>
      <Separator className="bg-primary/10" />
      <div className="sm:flex grid justify-end gap-4 py-2">
        <ProductsSearchInput placeholder="Search by Product Name..." />
        <ProductsFilterCategory />
      </div>
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
