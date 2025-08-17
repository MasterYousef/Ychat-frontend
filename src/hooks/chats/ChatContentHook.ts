import baseUrl from "@/lib/axios";
import { getCookies } from "@/utils/Cookies";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

function ChatContentHook() {
  const ref = useRef<HTMLDivElement>(null);
  const params = useSearchParams();
  const getMessages = async () => {
    const token = await getCookies("token");
    const chatId = params.get("chatId");
    if (token && chatId) {
      try {
        const res = await baseUrl.get(`message/chat/${chatId}`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    getMessages();
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, []);
  return {
    ref,
  };
}

export default ChatContentHook;
