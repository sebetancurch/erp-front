import { getUsers } from "@/src/services/user";
import { User } from "@/src/types/user";
import UserTabs from "./components/tabs";

export default async function Page(props: { params: { id: string } }) {
  const { id } = props.params;

  const userResponse = await getUsers({
    direction: "ASC",
    page: 0,
    size: 1,
    sort: "id",
    filters: [
      {
        attribute: "id",
        value: +id,
      },
    ],
  });

  if (!userResponse.success) {
    throw new Error(userResponse.message);
  }

  return <UserTabs user={userResponse.content?.content[0] as User} />;
}
