import React from "react";

function ChatSend() {
  return (
    <div className="chat-input-area w-full flex items-center gap-2 px-5 py-3 bg-gray-100 rounded-b-xl border-t border-gray-200">
      <button className="p-2 cursor-pointer hover:bg-gray-200 rounded-full transition">
        <i className="fa-solid fa-image text-2xl text-gray-500" />
      </button>
      <button className="p-2 cursor-pointer hover:bg-gray-200 rounded-full transition">
        <i className="fa-regular fa-face-smile text-2xl text-gray-500" />
      </button>
      <form action="" className="flex-1">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full px-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-200 text-gray-700"
        />
      </form>
    </div>
  );
}

export default ChatSend;
