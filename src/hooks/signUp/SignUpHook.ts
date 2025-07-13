"use client";

import SignUpAction from "@/actions/signUp/SignUpAction";
import { useToast } from "@/components/utils/ToastContext";
import { redirect, useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

function SignUpHook() {
  const router = useRouter();
  const toast = useToast();
  // const router = useRouter();
  const [state, action] = useActionState(SignUpAction, {
    success: false,
    message: "",
  });
  const HandleGoogleLogin = async () => {
    // Implement Google login logic here
    const formData = new FormData();
    formData.set("auth", "google");
    const res = await SignUpAction({ success: false, message: "" }, formData);
    if (res.success && res.message.startsWith("http")) {
      redirect(res.message); // Redirect to Google login URL
    } else {
      toast.error(res.message || "Google login failed");
    }
  };
  useEffect(() => {
    if (state.success) {
      // Handle successful sign up, e.g., redirect or show a success message
      toast.success("Sign Up Successful");
      router.push("/login");
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

export default SignUpHook;
