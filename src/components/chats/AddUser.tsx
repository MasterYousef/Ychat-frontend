import { Dialog, DialogTitle } from "@mui/material";
import React from "react";

function AddUser({ open }: { open: boolean }) {
  return (
    <Dialog open={open}>
      <DialogTitle>Set backup account</DialogTitle>
    </Dialog>
  );
}

export default AddUser;
