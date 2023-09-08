import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SeparatorClient from "@/components/ui/separator-client";
import { URL_GET_CARTS } from "@/constants/url-endpoints";
import { CartsColumns } from "@/types/carts";
import { Suspense } from "react";
import CardDetails from "./components/card-details";
import ProductsClientTable from "./components/products-client-table";

interface CartDetailPageProps {
  params: {
    cartId: string;
  };
}

const CartDetailPage = async ({ params }: CartDetailPageProps) => {
  const cartRes = await fetch(`${URL_GET_CARTS}/${params.cartId}`, {
    cache: "no-cache",
  });

  if (!cartRes.ok) return <p>Failed to fetch carts Details</p>;

  const cartResData: CartsColumns = await cartRes.json();

  return (
    <div className="h-full p-4 space-y-2">
      <Suspense fallback={<p>Loading...</p>}>
        <h3 className="text-lg font-medium">
          Cart Details - Cart {cartResData.id}
        </h3>
      </Suspense>
      <SeparatorClient />
      <CardDetails data={cartResData} />
      <ProductsClientTable data={cartResData.products} />
    </div>
  );
};

export default CartDetailPage;
