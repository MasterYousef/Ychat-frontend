import Image from "next/image";
import React from "react";

function ChatCard() {
  return (
    <div>
      <div className="chat-card flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
        <Image
          src="/images/landing.png"
          width={500}
          height={500}
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-semibold">User Name</span>
          <span className="text-sm text-gray-500">Last message preview...</span>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
