import Link from "next/link";
import Logo from "../landing/Logo";
import DropDownMenu from "../landing/DropDownMenu";
import HeaderHook from "@/hooks/HeaderHook";
import HeaderProfile from "./HeaderProfile";

export default async function Header() {
  const hook = await HeaderHook();
  return (
    <header className="border-b relative border-gray-200 z-10 bg-white text-black flex items-center justify-between p-3">
      <div className="px-5 w-1/4 flex items-center gap-2">
        <Logo />
        <h1 className="font-bold text-2xl font-mono">Ychat</h1>
      </div>
      <nav className="links w-3/4 items-center justify-end gap-10 px-5 hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>

        {hook.isAuthenticated ? (
          <HeaderProfile image={hook.user.image} />
        ) : (
          <>
            <Link href="/login" className="button">
              Login
            </Link>
            <Link href="/signUp" className="button">
              Sign Up
            </Link>
          </>
        )}
      </nav>
      <DropDownMenu isAuthenticated={hook.isAuthenticated} />
    </header>
  );
}
