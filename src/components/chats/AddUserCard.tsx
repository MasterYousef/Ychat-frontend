import AddUserCardHook from "@/hooks/chats/AddUserCardHook";
import { user } from "@/types/user";
import Image from "next/image";

function AddUserCard({
  data,
  setOpen,
}: {
  data: user;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const hook = AddUserCardHook(setOpen, data);
  return (
    <div className="p-5 flex flex-col text-center justify-center  lg:text-left lg:flex-row items-center rounded-lg bg-[var(--button-bg)] ">
      <Image
        src={data.image}
        alt="user-image"
        width={500}
        height={500}
        className="rounded-full w-32 h-32 lg:me-5"
      />
      <div className="details">
        <h2 className="text-2xl font-bold mb-3 mt-4">{data.username}</h2>
        <p className="text-xl">{data.email}</p>
      </div>
      <button
        onClick={() => hook.handleChat()}
        className="button mt-5 lg:ms-auto"
      >
        Chat
      </button>
    </div>
  );
}

export default AddUserCard;
