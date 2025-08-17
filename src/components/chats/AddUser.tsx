import { Dialog, DialogContent, DialogTitle, Skeleton } from "@mui/material";
import React from "react";
import AddUserCard from "./AddUserCard";
import AddUserHook from "@/hooks/chats/AddUserHook";

function AddUser({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const hook = AddUserHook();
  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
      <DialogTitle className="mt-5 flex flex-row-reverse justify-end items-center">
        <p className=" mx-auto text-center text-2xl">Chat with New Friend</p>
        <i
          className="cursor-pointer hover:text-red-800 fa-solid text-3xl fa-xmark  text-left"
          onClick={() => setOpen(false)}
        />
      </DialogTitle>
      <DialogContent>
        <form
          action={hook.action}
          className="search flex items-center relative w-full border-b-[1px] pb-5 my-5"
        >
          <input
            type="text"
            id="search"
            name="email"
            placeholder="Enter User Email"
            className="px-5 ps-9 py-2 w-[90%] focus-within:outline-[background:var(--main-color)] rounded-xl bg-[#F2F2F5]"
          />
          <label htmlFor="search">
            <button
              disabled={hook.pending}
              type="submit"
              className="button ms-5"
            >
              {hook.pending ? "loading..." : "Search"}
            </button>
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-3" />
          </label>
        </form>
        {hook.state.success === true ? (
          hook.pending ? (
            <Skeleton animation="wave" height={350} />
          ) : (
            <AddUserCard data={hook.state.data} setOpen={setOpen} />
          )
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

export default AddUser;
