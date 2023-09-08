"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CartsColumns } from "@/types/carts";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CartsColumns>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "total", header: "Total" },
  { accessorKey: "discountedTotal", header: "Discounted Total" },
  { accessorKey: "totalProducts", header: "Total Products" },
  { accessorKey: "totalQuantity", header: "Total Quantity" },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <Button variant="link" onClick={() => console.log(row.original)}>
          <Link href={`/carts/${row.original.id}`}>Details</Link>
        </Button>
      );
    },
  },
];
