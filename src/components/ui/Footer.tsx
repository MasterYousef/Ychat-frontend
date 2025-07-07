import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <footer className="p-10 lg:px-16 px-6 text-[color:#6E618A] text-xl border-t-[1px] ">
        <div className="flex flex-col lg:flex-row w-full justify-between text-center">
          <Link target="_blank" href="https://github.com/MasterYousef">
            More Apps
          </Link>
          <p>Made with 💜 by Yousef Mostafa</p>
          <Link target="_blank" href="https://wa.me/+201158122005">
            Contact Us
          </Link>
        </div>
        <div className="footer-icons flex justify-center gap-5 mt-4 text-2xl">
          <Link className="fa-solid fa-envelope" href="/"></Link>
          <Link className="fa-brands fa-facebook" href="/"></Link>
          <Link className="fa-brands fa-linkedin" href="/"></Link>
        </div>
        <p className="text-center mt-4">
          &copy; {new Date().getFullYear()} Yousef Mostafa. All rights reserved.
        </p>
      </footer>
    </footer>
  );
}

export default Footer;
