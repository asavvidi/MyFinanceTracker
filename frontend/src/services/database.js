import axios from "axios";

const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//Create an axios instance with a base URL and ensure JSON is used for requests
const databaseConnect = axios.create({
  baseURL: `${BACKEND_URL}:${BACKEND_PORT}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to attach authorization token to every request
databaseConnect.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { databaseConnect };
