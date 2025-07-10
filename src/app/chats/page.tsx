import ChatContent from "@/components/chats/ChatContent";
import Chats from "@/components/chats/Chats";
import React from "react";

function page() {
  return (
    <section className="flex w-full">
      <Chats />
      <ChatContent />
    </section>
  );
}

export default page;
