"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

interface PaginationControlsProps {
  total: number;
}

const PaginationControls = ({ total }: PaginationControlsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const skip = searchParams.get("skip") ?? "0";
  const limit = searchParams.get("limit") ?? "10";

  const total_page = Math.ceil(Number(total) / Number(limit));
  const current_page = Math.floor(Number(skip) / Number(limit)) + 1;

  // FIXME: Handler pagination not worked
  const handlePrev = () => {
    const newSkip = (current_page - 2) * Number(limit);
    router.refresh();
    router.push(`/products?limit=${limit}&skip=${newSkip}`);
  };

  const handleNext = () => {
    const newSkip = current_page * Number(limit);
    router.refresh();
    router.push(`/products?limit=${limit}&skip=${newSkip}`);
  };

  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={handlePrev}
        disabled={current_page === 1}
      >
        Previous
      </Button>

      <div>
        {current_page} / {total_page}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={handleNext}
        disabled={current_page === total_page}
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationControls;
