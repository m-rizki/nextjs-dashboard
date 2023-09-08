import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { URL_GET_USER } from "@/constants/url-endpoints";
import { CartsColumns } from "@/types/carts";
import { User } from "@/types/users";
import React from "react";

interface CartDetailsProps {
  data: CartsColumns;
}

const CardDetails = async ({ data }: CartDetailsProps) => {
  const userRes = await fetch(`${URL_GET_USER}/${data.userId}`, {
    cache: "no-cache",
  });

  if (!userRes.ok) return <p>Failed to fetch user Details</p>;

  const user: User = await userRes.json();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Details</CardTitle>
      </CardHeader>
      <CardContent className="text-xs">
        <div className="sm:grid grid-cols-2 gap-4">
          <p>User: {user.firstName} {user.lastName}</p>
          <p># of Items : {data.totalQuantity}</p>
          <p>AddedOn : (not available on dummyjson API)</p>
          <p>Total Amount : $ {data.total}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDetails;
