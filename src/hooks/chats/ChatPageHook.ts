import { useToast } from "@/components/utils/ToastContext";
import { user } from "@/types/user";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function ChatHook() {
  const params = useSearchParams();
  const [chatData, setChatData] = useState<user>();
  const toast = useToast();
  useEffect(() => {
    const data = params.get("chatUser");
    if (data) {
      setChatData(JSON.parse(data));
    } else {
      toast.error("can't get this chat right now");
    }
  }, [params]);
  return {
    chatData,
  };
}

export default ChatHook;
