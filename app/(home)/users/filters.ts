import { DataTableFacetedFilterProps } from "@/types/data-table";

export const userFilters: DataTableFacetedFilterProps[] = [
    {
      title: "email",
      name: "email",
    },
    {
      title: "status",
      name: "status",
      options: [
        {
          label: "Active",
          value: "active",
        },
        {
          label: "Inactive",
          value: "inactive",
        },
      ],
    },
    {
      title: "role",
      name: "role",
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
    }
]