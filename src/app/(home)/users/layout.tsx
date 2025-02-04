import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "List of users.",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
          <div className="flex">
            <p className="text-muted-foreground">
              Here&apos;s a list of the users of the root account:
            </p>
            <p className="text-blue-500">&nbsp;Root account code</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
