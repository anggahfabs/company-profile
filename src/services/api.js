import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// JWT otomatis pakai header
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // token hasil login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
