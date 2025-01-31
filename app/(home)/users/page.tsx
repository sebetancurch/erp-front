import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "List of users.",
};

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

// // Simulate a database read for tasks.
// async function getTasks() {
//   const data = await fs.readFile(
//     path.join(process.cwd(), "app/(app)/examples/tasks/data/tasks.json")
//   )

//   const tasks = JSON.parse(data.toString())

//   return z.array(taskSchema).parse(tasks)
// }

export default async function TaskPage() {
  const tasks = await getData();

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
      <DataTable data={tasks} columns={columns} />
    </div>
  );
}
