import { user } from "@/types/user";
import { useRouter, useSearchParams } from "next/navigation";

function AddUserCardHook(
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  data: user
) {
  const router = useRouter();
  const searchParams = useSearchParams();
  function handleChat() {
    const params = new URLSearchParams(searchParams);
    params.set("chatUser", JSON.stringify(data));
    router.push(`?${params.toString()}`);
    setOpen(false);
  }
  return {
    handleChat,
  };
}

export default AddUserCardHook;
