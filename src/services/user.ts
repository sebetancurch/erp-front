"use server";

import { User } from "@/src/types/user";
import axiosInstance from "@/src/lib/axios";
import { urls } from "./urls";
import { getSessionToken } from "@/src/actions/authetication";
import { ListRequest, ListResponse } from "@/src/types/list-request";
import { Response, LoginResponse } from "@/src/types/response";

export async function validateUser(user: {
  email: string;
  password: string;
}): Promise<Response<LoginResponse>> {
  try {
    const { data } = await axiosInstance.post(urls.users.login, user);
    return data;
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "Unknown error");
  }
}

export async function getUserDataByToken(): Promise<Response<LoginResponse>> {
  try {
    const accessToken = await getSessionToken();
    const { data } = await axiosInstance.get(
      urls.users.getUserDataByToken + "?token=" + accessToken,
    );
    return data;
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "Unknown error");
  }
}

export async function getUsers(
  request: ListRequest,
): Promise<Response<ListResponse<User>>> {
  try {
    const { data } = await axiosInstance.post(urls.users.list, request);
    return data;
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "Unknown error");
  }
}

export async function createUser(user: User): Promise<Response<User>> {
  console.log(user);
  try {
    const { data } = await axiosInstance.post(urls.users.create, user);
    return data;
  } catch (e) {
    console.error(e);
    throw new Error(e instanceof Error ? e.message : "Unknown error");
  }
}

export async function updateUser(
  user: User,
  id: number,
): Promise<Response<User>> {
  try {
    const { data } = await axiosInstance.patch(
      urls.users.update + "/" + id,
      user,
    );
    return data;
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "Unknown error");
  }
}

export async function activateUser(
  passwordBody: { password: string; confirmPassword: string },
  token: string,
): Promise<Response<void>> {
  try {
    const { data } = await axiosInstance.patch(
      urls.users.activate + "?token=" + token,
      passwordBody,
    );
    return data;
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "Unknown error");
  }
}
