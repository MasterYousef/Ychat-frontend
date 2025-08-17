"use client";
import ChatContent from "@/components/chats/ChatContent";
import Chats from "@/components/chats/Chats";
import ToastContainer from "@/components/utils/ToastContainer";
import ChatsPageHook from "@/hooks/chats/ChatsPageHook";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

function page() {
  const hook = ChatsPageHook();
  return (
    <section className="flex w-full">
      <Provider store={store}>
        <ToastContainer>
          <Chats />
          {hook.data ? (
            <ChatContent chatData={hook.data} />
          ) : (
            <div className="chat-content h-screen w-full lg:w-3/4 hidden lg:flex items-center justify-center">
              please select or start new chat
            </div>
          )}
        </ToastContainer>
      </Provider>
    </section>
  );
}

export default page;
