import { useToast } from "@/components/utils/ToastContext";
import { SubscribeMessage } from "@/lib/socket";
import { getCookies } from "@/utils/Cookies";
import { AxiosError } from "axios";

function ChatSendHook(id: string) {
  const toast = useToast();
  const sendMessage = async (form: any) => {
    form.preventDefault();
    const message = form.target.message.value;
    const token = await getCookies("token");
    try {
      const res = await SubscribeMessage("joinChat", {
        token,
        lastMessage: message,
        users: [id],
        group: false,
      });
      console.log(res);
    } catch (err) {
      const error = err as AxiosError;
      if (error.message) {
        console.log(err.message);
        toast.error(error.message[0] || "error cant send this message");
      } else {
        toast.error("error cant send this message");
      }
    }
  };
  return {
    sendMessage,
  };
}

export default ChatSendHook;
