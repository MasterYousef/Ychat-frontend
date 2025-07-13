"use client";

import LoginAction from "@/actions/login/LoginAction";
import { useToast } from "@/components/utils/ToastContext";
import { redirect, useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

function LoginHook() {
  const router = useRouter();
  const toast = useToast();
  // const router = useRouter();
  const [state, action] = useActionState(LoginAction, {
    success: false,
    message: "",
  });
  const HandleGoogleLogin = async () => {
    // Implement Google login logic here
    const formData = new FormData();
    formData.set("auth", "google");
    const res = await LoginAction({ success: false, message: "" }, formData);
    if (res.success && res.message.startsWith("http")) {
      redirect(res.message); // Redirect to Google login URL
    } else {
      toast.error(res.message || "Google login failed");
    }
  };
  useEffect(() => {
    if (state.success) {
      // Handle successful login, e.g., redirect or show a success message
      toast.success("Login successful");
      router.push("/chats");
    } else if (state.message) {
      // Handle error message
      toast.error(state.message);
    }
  }, [state]);
  return {
    action,
    HandleGoogleLogin,
  };
}

export default LoginHook;
