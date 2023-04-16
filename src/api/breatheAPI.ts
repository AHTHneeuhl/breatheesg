import axios from "axios";

const breatheAPI = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
});

export default breatheAPI;
