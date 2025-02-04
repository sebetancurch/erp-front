import { User } from "@/src/types/user";
import { Navigation } from "./navigation";

export interface Response<T> {
  success: boolean;
  localDateTime: Date;
  status: number;
  message: string;
  content?: T;
  error?: string;
}

export interface LoginResponse {
  user: User;
  navigation: Navigation[];
  token: string;
  refreshToken: string;
}
