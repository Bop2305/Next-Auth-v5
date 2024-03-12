import axiosInstance from "@/utils/axiosInstance";
import { httpClient } from "@/utils/httpClient";

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    console.log("[login] params", { username, password });
    const res = await axiosInstance.post("/auth/login", {
      username,
      password,
    });
    console.log("[login] data", res.data);

    return res;
  } catch (error) {
    console.log("[login] error", error);
  }
};

export const getUserById = async () => {
  const res = await httpClient.get("/auth/me")

  return res
}
