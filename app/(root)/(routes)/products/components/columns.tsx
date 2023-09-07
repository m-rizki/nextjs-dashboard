"use client";

import { ProductColumns } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ProductColumns>[] = [
  { accessorKey: "title", header: "Title" },
  { accessorKey: "brand", header: "Brand" },
  { accessorKey: "price", header: "Price" },
  { accessorKey: "category", header: "Category" },
  { accessorKey: "stock", header: "Stock" },
];
