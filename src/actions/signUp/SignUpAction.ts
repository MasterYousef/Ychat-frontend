"use server";

import baseUrl from "@/lib/axios";
import { AxiosError } from "axios";
import * as z from "zod";
export default async function SignUpAction(
  state: { success: boolean; message: string },
  payload: FormData
) {
  const auth = payload.get("auth");
  if (auth === "local") {
    const username = payload.get("username");
    const email = payload.get("email");
    const password = payload.get("password");
    const passwordConfirm = payload.get("passwordConfirm");
    const signUpSchema = z
      .object({
        username: z
          .string({ message: "username must be a string" })
          .max(20, "username max characters is 20"),
        email: z.email({ message: "Invalid email address" }),
        password: z
          .string()
          .min(6, "Password must be at least 6 characters long"),
        passwordConfirm: z.string(),
      })
      .refine((data) => data.password === data.passwordConfirm, {
        message: "Password do not match",
        path: ["passwordConfirm"],
      });
    const validation = signUpSchema.safeParse({
      username,
      email,
      password,
      passwordConfirm,
    });
    if (!validation.success) {
      return {
        success: false,
        message: validation.error.issues[0].message,
      };
    }
    try {
      const res = await baseUrl.post("/auth/signup", {
        username,
        email,
        password,
      });
      if (res.status.toString().startsWith("2")) {
        return { success: true, message: "sign up successful" };
      }
    } catch (error) {
      const err = error as AxiosError;
      return {
        success: false,
        message:
          (err.response?.data as { message?: string })?.message ||
          "An error occurred during sign up",
      };
    }
  }
  if (auth === "google") {
    return { success: true, message: `${process.env.BASE_URL}/auth/google` };
  }
  return { success: false, message: "Invalid authentication method" };
}
