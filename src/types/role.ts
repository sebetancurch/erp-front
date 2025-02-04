type Permission = "create" | "read" | "update" | "delete"

export interface Role {
    id: string
    name: string
    description: string
    group: string
    permissions: Permission[]
}