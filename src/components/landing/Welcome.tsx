import Image from "next/image";
import Link from "next/link";
import React from "react";

function Welcome() {
  return (
    <section className="flex welcome  flex-col text-center items-center justify-center  text-white lg:flex-row-reverse lg:text-left">
      <div className="details my-5 w-full lg:mx-5">
        <h1 className="text-4xl font-bold mb-4 text-black">
          Stay connected with Ychat
        </h1>
        <p className="text-2xl text-gray-700 mb-6 leading-snug">
          Ychat is a modern chat application that allows you to connect with
          friends and family in real-time , Ychat is a free, simple, and secure
          . Join us today and start chatting!
        </p>
        <Link href="/login">login</Link>
        <Link href="/signUp">Sign Up</Link>
      </div>
      <Image
        src={"/images/landing.png"}
        alt="Landing"
        width={1000}
        height={1000}
        className="w-full h-80 mb-6 rounded"
      />
    </section>
  );
}

export default Welcome;
