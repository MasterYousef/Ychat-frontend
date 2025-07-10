import React from "react";

function page() {
  return (
    <form className="flex flex-col w-full lg:w-1/2 items-center justify-center ">
      <h1 className="text-5xl font-mono mb-10">Welcome back</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit" className="form-button">
        login
      </button>
    </form>
  );
}

export default page;
