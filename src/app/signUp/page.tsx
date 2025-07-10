import React from "react";

function page() {
  return (
    <form className="flex flex-col w-full lg:w-1/2 items-center justify-center ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono mb-10 ">
        Create your account
      </h1>
      <input type="email" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit" className="form-button">
        Sign Up
      </button>
    </form>
  );
}

export default page;
