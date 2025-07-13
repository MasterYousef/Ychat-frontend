import React from "react";
import "@/style/auth.scss";
import ToastContainer from "@/components/utils/ToastContainer";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 lg:p-24">
      <ToastContainer>{children}</ToastContainer>
    </main>
  );
}

export default layout;
