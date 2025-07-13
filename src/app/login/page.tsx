"use client";
import LoginHook from "@/hooks/login/LoginHook";
import React from "react";

function page() {
  const hook = LoginHook();
  return (
    <form
      action={hook.action}
      className="flex flex-col w-full lg:w-1/2 items-center justify-center "
    >
      <h1 className="text-5xl font-mono mb-10">Welcome back</h1>
      <input
        autoComplete="email"
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        autoComplete="password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <input
        type="text"
        value={"local"}
        name="auth"
        readOnly
        className="hidden"
      />
      <button
        type="submit"
        className="form-button w-full h-12 text-lg font-semibold mb-2"
      >
        login
      </button>
      <button
        type="button"
        onClick={hook.HandleGoogleLogin}
        className="w-[80%] cursor-pointer my-3 rounded-2xl h-12 text-lg font-semibold flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 shadow-sm transition-all duration-500 hover:shadow-[0_0_16px_2px_#EA4335]"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              fill="#4285F4"
              d="M24 9.5c3.54 0 6.36 1.22 8.29 2.26l6.18-6.18C34.88 2.19 29.81 0 24 0 14.61 0 6.4 5.48 2.44 13.44l7.61 5.92C12.13 13.13 17.62 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.1 24.5c0-1.64-.15-3.22-.43-4.75H24v9h12.44c-.54 2.9-2.17 5.36-4.62 7.04l7.19 5.59C43.98 37.13 46.1 31.27 46.1 24.5z"
            />
            <path
              fill="#FBBC05"
              d="M10.05 28.36c-.6-1.77-.95-3.66-.95-5.86s.35-4.09.95-5.86l-7.61-5.92C.86 14.91 0 19.29 0 24s.86 9.09 2.44 13.44l7.61-5.92z"
            />
            <path
              fill="#EA4335"
              d="M24 48c6.48 0 11.93-2.14 15.91-5.83l-7.19-5.59c-2.01 1.35-4.59 2.16-8.72 2.16-6.38 0-11.87-3.63-14.95-8.86l-7.61 5.92C6.4 42.52 14.61 48 24 48z"
            />
            <path fill="none" d="M0 0h48v48H0z" />
          </g>
        </svg>
        Continue with Google
      </button>
    </form>
  );
}

export default page;
