import { useAuthStore } from "@/stores/useAuthStore";
import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8080/api"
      : "/api",
  withCredentials: true, // không có thì cookies không thể được gửi lên server
});

//gắn accessToken vào Header
api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState(); // không thay đổi khi state thay đổi
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default api;
