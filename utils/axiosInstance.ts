import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "*",
  },
});

export default axiosInstance;
