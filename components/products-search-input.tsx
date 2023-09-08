"use client";

import qs from "query-string";
import { ChangeEventHandler, useCallback, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";

interface SearchInputProps {
  placeholder: string;
}

const ProductsSearchInput = ({ placeholder }: SearchInputProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  const [value, setValue] = useState(q || "");

  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = useCallback(() => {
    const query = {
      q: debouncedValue,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <div className="relative">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        className="pl-10 bg-primary/10 text-xs"
      />
    </div>
  );
};

export default ProductsSearchInput;
