import axios from "axios";
import { AuthService } from "../services";

const breatheAPI = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
});

const authService = new AuthService();

breatheAPI.interceptors.request.use(
  (config) => {
    const token = authService.getAccessCookie();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default breatheAPI;
