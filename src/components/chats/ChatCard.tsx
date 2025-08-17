import { chat } from "@/types/chat";
import Image from "next/image";
import React from "react";

function ChatCard({ data }: { data: chat }) {
  return (
    <div>
      <div className="chat-card flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
        <Image
          src={data.image}
          width={500}
          height={500}
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{data.title}</span>
          <span className="text-sm text-gray-500">{data.lastMessage}</span>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
