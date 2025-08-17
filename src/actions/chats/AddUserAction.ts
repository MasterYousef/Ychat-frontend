"use server";

import baseUrl from "@/lib/axios";
import { user } from "@/types/user";
import { AxiosError } from "axios";
import z from "zod";

async function AddUserAction(
  state: { success: boolean; data: user | string },
  payload: FormData
) {
  const email = payload.get("email");
  const emailSearchSchema = z.object({
    email: z.email({ message: "Invalid email address" }),
  });
  const validation = emailSearchSchema.safeParse({
    email,
  });
  if (!validation.success) {
    return {
      success: false,
      data: validation.error.issues[0].message,
    };
  }
  try {
    const res = await baseUrl.get(`/auth/user/${email}`);
    if (res.data.status === "success") {
      return { success: true, data: res.data.data };
    }
  } catch (error) {
    const err = error as AxiosError;
    return {
      success: false,
      data:
        (err.response?.data as { message?: string })?.message ||
        "An error occurred during search",
    };
  }
  return { success: false, data: "An error occurred during search" };
}

export default AddUserAction;
