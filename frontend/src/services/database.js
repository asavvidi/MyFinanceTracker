import axios from "axios";

const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const databaseConnect = axios.create({
  baseURL: `${BACKEND_URL}:${BACKEND_PORT}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { databaseConnect };
