import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function ChatsPageHook() {
  const params = useSearchParams();
  const [data, setData] = useState();
  useEffect(() => {
    const chatData = params.get("chatUser");
    if (chatData) {
      setData(JSON.parse(chatData));
    }
  }, [params]);
  return {
    data,
  };
}

export default ChatsPageHook;
