"use client";

import { Table } from "@tanstack/react-table";
import {
  CheckCircle,
  Circle,
  CircleOff,
  HelpCircle,
  Timer,
  X,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

import { DataTableFacetedFilter } from "../../../../components/data-table/data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export const status = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CircleOff,
  },
];

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-1 items-center space-x-2">
      <Input
        placeholder="Filter email..."
        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("email")?.setFilterValue(event.target.value)
        }
        className="h-8 w-[150px] lg:w-[250px]"
      />
      {table.getColumn("active") && (
        <DataTableFacetedFilter
          column={table.getColumn("active")}
          title="Status"
          options={status}
        />
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
  );
}
