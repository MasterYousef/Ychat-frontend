import React from "react";
import { ToastProvider } from "./ToastContext";

function ToastContainer({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}

export default ToastContainer;
