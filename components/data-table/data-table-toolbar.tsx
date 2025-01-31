"use client";

import { Column, Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DataTableViewOptions } from "./column-toggle";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableFacetedFilterProps } from "@/types/data-table";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filters: DataTableFacetedFilterProps[];
}

export function DataTableToolbar<TData>({
  table,
  filters,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {filters.map(
          (filter) =>
            table.getColumn(filter.name as string) && (
              <DataTableFacetedFilter
                key={filter.title}
                column={table.getColumn(filter.name as string) as Column<TData>}
                filter={filter}
              />
            )
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
