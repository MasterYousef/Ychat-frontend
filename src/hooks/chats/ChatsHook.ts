"use client";

import baseUrl from "@/lib/axios";
import { getCookies, setCookies } from "@/utils/Cookies";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function ChatsHook() {
  // check user
  const search = useSearchParams();
  const token = search.get("user");
  const router = useRouter();
  const checkUser = async () => {
    const user = await getCookies("user");
    if (!user && !token) {
      router.push("/login");
    } else if (!user && token) {
      try {
        const res = await baseUrl.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });
        await setCookies(
          {
            key: "token",
            value: token,
          },
          {
            maxAge: 60 * 60 * 24, // 1 day
          }
        );
        await setCookies(
          {
            key: "user",
            value: JSON.stringify(res.data.data),
          },
          {
            maxAge: 60 * 60 * 24, // 1 day
          }
        );
        router.push("/chats");
      } catch {
        router.push("/login");
      }
    }
  };
  useEffect(() => {
    checkUser();
  }, [token]);
}

export default ChatsHook;
