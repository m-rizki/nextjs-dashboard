"use client";

import { useParams, useRouter } from "next/navigation";

import { ProductColumns } from "@/types";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import PaginationControls from "@/components/ui/pagination-controls";


interface ProductsClientProps {
  data: ProductColumns[];
  total: number,
}

const ProductsClient = ({ data, total }: ProductsClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <DataTable columns={columns} data={data}/>
      <PaginationControls total={total}/>
    </>
  )
};

export default ProductsClient;
