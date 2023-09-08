"use client";

import { DataTable } from "@/components/data-table/data-table";
import { columns } from "./columns";
import PaginationControls from "@/components/ui/pagination-controls";
import { CartsColumns } from "@/types/carts";

interface CartsClientProps {
  data: CartsColumns[];
  total: number;
}

const CartsClient = ({ data, total }: CartsClientProps) => {
  return (
    <>
      <DataTable columns={columns} data={data} />
      <PaginationControls total={total} />
    </>
  );
};

export default CartsClient;
