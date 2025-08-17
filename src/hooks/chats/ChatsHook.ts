"use client";

import { useToast } from "@/components/utils/ToastContext";
import { HandleSocket } from "@/lib/socket";
import { GetChats } from "@/redux/slice/ChatSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { chat } from "@/types/chat";
import { user } from "@/types/user";
import { getCookies, setCookies } from "@/utils/Cookies";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ChatsHook() {
  const chats = useSelector((state: RootState) => state.chat);
  const dis = useDispatch() as AppDispatch;
  const toast = useToast();
  const [open, setOpen] = useState(false);
  const [Chats, setChats] = useState<chat[]>([]);
  // check user cookies
  const params = useSearchParams();
  const paramsUrl = new URLSearchParams(params);
  let token = params.get("user");
  const router = useRouter();
  const checkUser = async () => {
    const user = await getCookies("user");
    if (!user && !token) {
      router.push("/login");
    } else if (!user && token) {
      token = JSON.parse(token);
    } else if (user && !token) {
      token = await getCookies("token");
    }
    try {
      if (token) {
        const res = (await HandleSocket(token)) as {
          status: string;
          data: user;
        };
        if (res.status === "success") {
          toast.success("online");
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
              value: JSON.stringify(res.data),
            },
            {
              maxAge: 60 * 60 * 24, // 1 day
            }
          );
        }
        paramsUrl.delete("user");
        await dis(GetChats(token));
        router.push(`?${paramsUrl.toString()}`);
      }
    } catch {
      toast.error("something going wrong you are offline");
      router.push("/login");
    }
  };
  useEffect(() => {
    checkUser();
  }, [token]);
  useEffect(() => {
    if (chats.loading === false) {
      if (chats.data.length > 0) {
        setChats(chats.data);
      } else {
        toast.error(chats.error || "Failed to fetch chats");
      }
    }
  }, [chats]);
  return {
    open,
    setOpen,
    Chats,
  };
}

export default ChatsHook;
