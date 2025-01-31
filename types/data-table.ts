export interface DataTableFacetedFilterProps {
  title: string
  name: string,
  options?: FilterOption[]
}

export interface FilterOption {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
}