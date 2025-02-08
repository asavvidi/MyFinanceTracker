import axios from "axios";

const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const databaseConnect = axios.create({
  baseURL: `${BACKEND_URL}:${BACKEND_PORT}`,
  headers: {
    "Content-Type": "application/json",
  },
});

databaseConnect.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { databaseConnect };
