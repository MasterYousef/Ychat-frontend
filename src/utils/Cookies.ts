"use server";

import { cookies } from "next/headers";

export async function setCookies(
  data: { key: string; value: string },
  options: object
) {
  const store = await cookies();
  store.set(data.key, data.value, options);
}
export async function getCookies(key: string) {
  const store = await cookies();
  const value = store.get(key);
  if (value) {
    return value.value;
  }
  return null;
}

export async function deleteCookies(key: string) {
  const store = await cookies();
  store.delete(key);
  return "cookie has been deleted";
}
