"use client";

import qs from "query-string";
import { Check, ChevronsUpDown } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { URL_GET_PRODUCTS_CATEGORIES } from "@/constants/url-endpoints";
import { LIMIT, SKIP } from "@/constants/url-params";

type Categories = {
  value: string;
  label: string;
};

export const ProductsFilterCategory = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState<Categories[]>([]);

  const category = searchParams.get("category");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(category || "");

  const getCategories = useCallback(async () => {
    const res = await fetch(URL_GET_PRODUCTS_CATEGORIES);
    if (!res.ok) {
      setCategories([]);
    }

    const data: string[] = await res.json();
    const categories = data.map((item) => ({
      label: item,
      value: item,
    }));
    setCategories(categories);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleFilter = (value: string) => {
    const query = { category: value, skip: SKIP, limit: LIMIT };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: query,
      },
      { skipNull: true }
    );
    router.push(url);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-auto justify-between border-black text-xs"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categories.map((category) => (
              <CommandItem
                key={category.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  handleFilter(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {category.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ProductsFilterCategory;
