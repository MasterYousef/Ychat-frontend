import ChatSendHook from "@/hooks/chats/ChatSendHook";
import React from "react";

function ChatSend({ id }: { id: string }) {
  const hook = ChatSendHook(id);
  return (
    <div className="chat-input-area w-full flex items-center gap-2 px-5 py-3 bg-gray-100 rounded-b-xl border-t border-gray-200">
      <button className="p-2 cursor-pointer hover:bg-gray-200 rounded-full transition">
        <i className="fa-solid fa-image text-2xl text-gray-500" />
      </button>
      <button className="p-2 cursor-pointer hover:bg-gray-200 rounded-full transition">
        <i className="fa-regular fa-face-smile text-2xl text-gray-500" />
      </button>
      <form onSubmit={hook.sendMessage} className="flex-1 relative">
        <input
          type="text"
          name="message"
          placeholder="Type a message"
          className="w-full pe-14 px-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-200 text-gray-700"
        />
        <button type="submit" className="absolute right-5 top-2 cursor-pointer">
          <i className="fa-regular fa-paper-plane text-2xl text-gray-500" />
        </button>
      </form>
    </div>
  );
}

export default ChatSend;
