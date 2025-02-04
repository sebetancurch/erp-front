import { Metadata } from "next";
import Image from "next/image";

import { Separator } from "@/src/components/ui/separator";
import { SidebarNav } from "./components/sidebar-nav";
import { Button } from "@/src/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Account",
    href: "/settings",
  },
  {
    title: "Appearance",
    href: "/settings/appearance",
  },
  {
    title: "Notifications",
    href: "/settings/notifications",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <Image
          src="/examples/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <div className="flex items-center space-x-4 h-full">
            <Button variant="link">
              <Link className="text-xl flex items-center" href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Link>
            </Button>
            <Separator className="mx-6" orientation="vertical" />
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
              <p className="text-muted-foreground">
                Manage your account settings and set e-mail preferences.
              </p>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
