"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

export default function SearchFilterBox() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [query] = useDebounce(name, 500);

  useEffect(() => {
    if (!query && region == "") {
      router.push("/");
    } else {
      if (region == "") {
        router.push(`/?name=${query}`);
      } else if (query == "") {
        router.push(`/?region=${region}`);
      } else {
        router.push(`/?name=${query}&region=${region}`);
      }
    }
  }, [query, region, router]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:px-5">
      <SearchInput value={name} onChange={(e) => setName(e.target.value)} />
      <SelectRegion value={region} onValueChange={setRegion} />
    </div>
  );
}

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative">
      <input
        type="text"
        className="rounded-md w-full min-w-80 sm:min-w-96 pl-11 pr-2 dark:bg-[hsl(209,23%,22%)] bg-white py-3 placeholder:font-semibold outline-none focus:outline-none shadow-lg focus:ring-2 dark:focus:ring-input/70 focus:ring-blue-600 dark:font-semibold text-black dark:text-input"
        placeholder="Search for a country..."
        value={value}
        onChange={onChange}
      />
      <SearchIcon
        className="absolute top-1/2 left-2.5 transform -translate-y-1/2 dark:stroke-input stroke-slate-950 dark:stroke-[3] stroke-[2.5]"
        size={21}
      />
    </div>
  );
}

function SelectRegion({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <Select value={value} onValueChange={(value) => onValueChange(value)}>
      <SelectTrigger className="w-56 bg-white dark:bg-[hsl(209,23%,22%)] border-0 focus:ring-offset-0 shadow-lg focus:ring-0 px-5 py-6 dark:data-[placeholder]:font-semibold font-semibold ">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-[hsl(209,23%,22%)]">
        <SelectGroup>
          <SelectItem
            value="africa"
            className="data-[highlighted]:bg-background font-medium"
          >
            Africa
          </SelectItem>
          <SelectItem
            value="americas"
            className="data-[highlighted]:bg-background font-medium"
          >
            Americas
          </SelectItem>
          <SelectItem
            value="asia"
            className="data-[highlighted]:bg-background font-medium"
          >
            Asia
          </SelectItem>
          <SelectItem
            value="europe"
            className="data-[highlighted]:bg-background font-medium"
          >
            Europe
          </SelectItem>
          <SelectItem
            value="oceania"
            className="data-[highlighted]:bg-background font-medium"
          >
            Oceania
          </SelectItem>
          <SelectItem
            value="polar"
            className="data-[highlighted]:bg-background font-medium"
          >
            Polar
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
