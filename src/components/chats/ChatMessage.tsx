import { user } from "@/types/user";
import Image from "next/image";
import React from "react";

function ChatMessage({
  user,
  content,
  sender,
}: {
  user: user;
  content: string;
  sender: boolean;
}) {
  return (
    <div
      className={`flex mb-2 items-end w-full gap-2 ${
        sender ? "flex-row-reverse text-right" : "flex-row"
      }`}
    >
      <Image
        src={`/images/${user.image}`}
        alt="User Avatar"
        width={100}
        height={100}
        className="w-10 h-10 rounded-full"
      />
      <div className="details w-3/4 md:w-1/3">
        <p className="text-gray-600 mb-1">{user.username}</p>
        <p
          className={`${
            sender ? "bg-[var(--message-bg)]" : "bg-gray-200"
          } p-2 rounded`}
        >
          {content}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage;
