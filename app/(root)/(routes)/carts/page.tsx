import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";
import DataTableLoading from "@/components/data-table/data-table-loading";
import Await from "@/components/loading/await";
import { CartsListResponse, CartsPageProps } from "@/types/carts";
import { LIMIT } from "@/constants/url-params";
import { URL_GET_CARTS } from "@/constants/url-endpoints";
import CartsClient from "./components/clients";

const CartsPage = async ({ searchParams }: CartsPageProps) => {
  const limit = searchParams.limit || LIMIT.toString();
  const skip = searchParams.skip || "0";

  const defaultUrlParams = `?limit=${limit}&skip=${skip}`;
  let url = URL_GET_CARTS + defaultUrlParams;

  const cartsRes = await fetch(url, { cache: "no-cache" });

  if (!cartsRes.ok) return <p>Failed to fetch carts</p>;

  const cartsResData: Promise<CartsListResponse> = await cartsRes.json();

  return (
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Carts</h3>
      <p className="text-sm text-muted-foreground">
        The Carts data was obtained from dummyjson.com.
      </p>
      <Separator className="bg-primary/10" />
      <Suspense key={searchParams.skip} fallback={<DataTableLoading />}>
        <Await promise={cartsResData}>
          {({ carts, total }) => <CartsClient data={carts} total={total} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default CartsPage;
