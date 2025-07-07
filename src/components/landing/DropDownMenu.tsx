"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { motion } from "motion/react";
export default function DropDownMenu() {
  return (
    <div className="flex md:hidden">
      <Menu>
        <MenuButton className="focus-visible:outline-0">
          <i className="fa-solid fa-bars text-black text-4xl"></i>
        </MenuButton>
        <MenuItems
          as={motion.div}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition
          anchor="bottom"
          className="w-full links flex z-0 flex-col duration-100 items-start bg-white  p-5 gap-5 text-2xl focus-visible:outline-0"
        >
          <MenuItem>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">About</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/contact">Contact</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/login">Login</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/register">Sign Up</Link>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
