export interface User {
  id: string;
  name: string;
  nickName: string;
  birthday?: Date;
  gender: "Male" | "Female";
  email: string;
  phone?: number;
  role?: string;
  group?: string;
  active?: boolean;
}
  
export interface Session {
  session?: string;
  user?: User;
}
  