"use client";
import React from "react";
import ChatCard from "./ChatCard";
import ChatsHook from "@/hooks/chats/ChatsHook";
import AddUser from "./AddUser";

function Chats() {
  const hook = ChatsHook();
  console.log(hook.Chats);

  return (
    <div className="chats w-full lg:w-1/4">
      <div className="flex items-center relative w-full border-b-[1px] pb-5 mb-4">
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="px-5 ps-9 py-2 w-full rounded-xl bg-[#F2F2F5]"
        />
        <i
          onClick={() => hook.setOpen(true)}
          className="fa-solid fa-plus cursor-pointer ms-2 transition duration-200 bg-[#F2F2F5] hover:bg-[#c6c6c7] p-2 rounded-full"
        />
        <label htmlFor="search">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-3" />
        </label>
      </div>
      <div className="chat-list overflow-auto h-[calc(100vh-80px)]">
        {hook.Chats && hook.Chats.length > 0
          ? hook.Chats.map((e) => <ChatCard data={e} key={e.id} />)
          : null}
      </div>
      <AddUser open={hook.open} setOpen={hook.setOpen} />
    </div>
  );
}

export default Chats;
