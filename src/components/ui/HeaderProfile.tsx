"use client";
import HeaderProfileHook from "@/hooks/HeaderProfileHook";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeaderProfile({ image }: { image: string }) {
  const hook = HeaderProfileHook();
  return (
    <>
      <Link href="/chats">Chats</Link>
      <button disabled={hook.loading} onClick={hook.logout} className="button">
        {hook.loading ? "loading..." : "Log out"}
      </button>
      <Image
        src={image}
        alt="profile"
        width={80}
        height={80}
        className="rounded-full w-16 h-16"
      />
    </>
  );
}

export default HeaderProfile;
