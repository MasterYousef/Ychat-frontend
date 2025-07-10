import React from "react";
import Image from "next/image";

function ChatHeader() {
  return (
    <div className="header w-full px-5 flex items-center py-4 border-b border-gray-200">
      <Image
        src={"/images/landing.png"}
        width={500}
        height={500}
        alt="User Avatar"
        className="w-20 h-20 rounded-full object-cover border-2 border-purple-300"
      />
      <div className="details ms-5">
        <h1 className="font-bold text-xl">username</h1>
        <p className="text-gray-500">Last seen: 2 hours ago</p>
      </div>
    </div>
  );
}

export default ChatHeader;
