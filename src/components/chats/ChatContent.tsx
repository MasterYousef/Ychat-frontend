"use client";
import React from "react";
import ChatSend from "./ChatSend";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatContentHook from "@/hooks/chats/ChatContentHook";

function ChatContent() {
  const hook = ChatContentHook();
  return (
    <div className="chat-content h-screen w-full md:w-3/4  md:flex flex-col bg-white rounded-xl">
      <ChatHeader />
      <div
        ref={hook.ref}
        className="messages-container h-3/4 flex-1 overflow-y-auto px-5 py-4 bg-gray-50"
      >
        <ChatMessage
          user={{ image: "landing.png", username: "Alice" }}
          content="Hello mother and father and sister and brother  , how are you?"
          sender={true}
        />
        <ChatMessage
          user={{ image: "landing.png", username: "Alice" }}
          content="Hello mother and father and sister and brother  , how are you?"
          sender={false}
        />
        <ChatMessage
          user={{ image: "landing.png", username: "Alice" }}
          content="Hello mother and father and sister and brother  , how are you?"
          sender={false}
        />
        <ChatMessage
          user={{ image: "landing.png", username: "Alice" }}
          content="Hello mother and father and sister and brother  , how are you?"
          sender={true}
        />
        <ChatMessage
          user={{ image: "landing.png", username: "Alice" }}
          content="Hello mother and father and sister and brother  , how are you?"
          sender={true}
        />
        <ChatMessage
          user={{ image: "landing.png", username: "Alice" }}
          content="Hello mother and father and sister and brother  , how are you?"
          sender={true}
        />
      </div>
      <ChatSend />
    </div>
  );
}

export default ChatContent;
