"use client";

import { ProductColumns } from "@/types";
import { DataTable } from "@/components/data-table/data-table";
import { columns } from "./columns";
import PaginationControls from "@/components/ui/pagination-controls";

interface ProductsClientProps {
  data: ProductColumns[];
  total: number;
}

const ProductsClient = ({ data, total }: ProductsClientProps) => {
  return (
    <>
      <DataTable columns={columns} data={data} />
      <PaginationControls total={total} />
    </>
  );
};

export default ProductsClient;
