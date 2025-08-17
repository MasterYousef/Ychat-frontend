import AddUserAction from "@/actions/chats/AddUserAction";
import { useToast } from "@/components/utils/ToastContext";
import { useActionState, useEffect } from "react";

function AddUserHook() {
  const [state, action, pending] = useActionState(AddUserAction, {
    success: false,
    data: "",
  });
  const toast = useToast();
  useEffect(() => {
    if (state.success) {
    } else if (state.data) {
      // Handle error message
      toast.error(state.data);
    }
  }, [state]);
  return {
    action,
    pending,
    state,
  };
}

export default AddUserHook;
