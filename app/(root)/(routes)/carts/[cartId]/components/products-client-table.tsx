"use client";

import { columns } from "./products-client-columns";
import { DataTableClient } from "@/components/data-table/data-table-client";
import { CartProducts } from "@/types/carts";

interface ProductsClientTableProps {
  data: CartProducts[];
}

const ProductsClientTable = ({ data }: ProductsClientTableProps) => {
  return <DataTableClient columns={columns} data={data} />;
};

export default ProductsClientTable;
