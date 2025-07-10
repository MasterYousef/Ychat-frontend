import React from "react";
import "@/style/chats.scss";
function layout({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen w-full md:ps-5 pt-2">{children}</main>;
}

export default layout;
