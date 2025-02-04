import { User } from "@/src/types/user";
import { columns } from "./columns";
import { DataTable } from "./data-table";

import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Users",
  description: "List of users.",
};

async function getData(): Promise<User[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: "728ed52f",
          email: "user1@example.com",
          active: true,
          name: "John Doe",
          nickName: "Johnny",
          gender: "Male",
        },
        {
          id: "8a2bc34d",
          email: "user2@example.com",
          active: false,
          name: "Jane Smith",
          nickName: "Janey",
          gender: "Female",
        },
        {
          id: "6f5d3a21",
          email: "user3@example.com",
          active: true,
          name: "Michael Johnson",
          nickName: "Mike",
          gender: "Male",
        },
        {
          id: "1e4d9b87",
          email: "user4@example.com",
          active: true,
          name: "Emily White",
          nickName: "Em",
          gender: "Female",
        },
        {
          id: "9c8b7a65",
          email: "user5@example.com",
          active: false,
          name: "David Brown",
          nickName: "Dave",
          gender: "Male",
        },
      ]);
    }, 10000)
  );
}

// // Simulate a database read for tasks.
// async function getTasks() {
//   const data = await fs.readFile(
//     path.join(process.cwd(), "app/(app)/examples/tasks/data/tasks.json")
//   )

//   const tasks = JSON.parse(data.toString())

//   return z.array(taskSchema).parse(tasks)
// }

export default async function Page() {
  const users = await getData();

  if (!users) {
    notFound();
  }

  return <DataTable data={users} columns={columns} />;
}
