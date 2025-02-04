import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { User } from "@/src/types/user";

export default function UserTabs({ user }: { user: User }) {
  return (
    <Tabs defaultValue="general information">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="general information">
          General Information
        </TabsTrigger>
        <TabsTrigger value="role and permissions">
          Role and Permissions
        </TabsTrigger>
        <TabsTrigger value="security">Security and Authentication</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="general information"></TabsContent>
      <TabsContent value="role and permissions"></TabsContent>
      <TabsContent value="security"></TabsContent>
      <TabsContent value="notifications"></TabsContent>
    </Tabs>
  );
}
