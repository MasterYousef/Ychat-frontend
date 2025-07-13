import { getCookies } from "@/utils/Cookies";

async function HeaderHook() {
  const token = await getCookies("token");
  const user = await getCookies("user");
  if (!token || !user) {
    return { isAuthenticated: false, user: null };
  }
  return { isAuthenticated: true, user: JSON.parse(user) };
}

export default HeaderHook;
