"use client";

import { CartProducts } from "@/types/carts";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CartProducts>[] = [
  { accessorKey: "title", header: "Product Name" },
  { accessorKey: "price", header: "Price ($)" },
  { accessorKey: "quantity", header: "Quantity" },
  { accessorKey: "discountPercentage", header: "Discount (%)" },
  { accessorKey: "discountedPrice", header: "Discount" },
  { accessorKey: "total", header: "Total" },
];
