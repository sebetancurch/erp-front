"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  User,
  ShoppingBasket,
  ChartColumn,
} from "lucide-react";

import { NavMain } from "@/src/components/nav-bar/nav-main";
import { NavUser } from "@/src/components/nav-bar/nav-user";
import { TeamSwitcher } from "@/src/components/nav-bar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/src/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Panel de Control",
      icon: ChartColumn,
      url: "/",
      isCollapsible: false,
    },
    {
      title: "Control de Usuario",
      icon: User,
      isCollapsible: true,
      items: [
        {
          title: "Usuarios",
          url: "/users",
        },
        {
          title: "Grupos",
          url: "",
        },
        {
          title: "Roles",
          url: "",
        },
      ],
    },
    {
      title: "Inventario",
      icon: ShoppingBasket,
      isCollapsible: true,
      items: [
        {
          title: "Listado de Productos",
          url: "",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
