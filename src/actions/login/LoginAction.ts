"use server";

import baseUrl from "@/lib/axios";
import { setCookies } from "@/utils/Cookies";
import { AxiosError } from "axios";
import * as z from "zod";
export default async function LoginAction(
  state: { success: boolean; message: string },
  payload: FormData
) {
  const auth = payload.get("auth");
  if (auth === "local") {
    const email = payload.get("email");
    const password = payload.get("password");
    const loginSchema = z.object({
      email: z.email({ message: "Invalid email address" }),
      password: z
        .string()
        .min(6, "Password must be at least 6 characters long"),
    });
    const validation = loginSchema.safeParse({
      email,
      password,
    });
    if (!validation.success) {
      return {
        success: false,
        message: validation.error.issues[0].message,
      };
    }
    try {
      const res = await baseUrl.post("/auth/login", { email, password });
      await setCookies(
        { key: "token", value: res.data.data.token },
        {
          httpOnly: false,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 60 * 60 * 24, // 1 day
        }
      );
      await setCookies(
        { key: "user", value: JSON.stringify(res.data.data.user) },
        {
          httpOnly: false,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 60 * 60 * 24, // 1 day
        }
      );
    } catch (error) {
      const err = error as AxiosError;
      return {
        success: false,
        message:
          (err.response?.data as { message?: string })?.message ||
          "An error occurred during login",
      };
    }
    return { success: true, message: "Login successful" };
  }
  if (auth === "google") {
    return { success: true, message: `${process.env.BASE_URL}/auth/google` };
  }
  return { success: false, message: "Invalid authentication method" };
}
