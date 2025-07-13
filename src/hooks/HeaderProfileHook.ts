"use client";
import { deleteCookies } from "@/utils/Cookies";
import { useRouter } from "next/navigation";
import { useState } from "react";

function HeaderProfileHook() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const logout = async () => {
    setLoading(true);
    await deleteCookies("user");
    await deleteCookies("token");
    setLoading(false);
    router.push("/");
  };
  return {
    logout,
    loading,
  };
}

export default HeaderProfileHook;
