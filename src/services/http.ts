import axios from "axios";

export const baseURL = "https://api.polygon.io/v3/";
export const apiKey = import.meta.env.VITE_API_KEY;

export const http = axios.create({
  baseURL,
});

http.interceptors.request.use(
  async (config) => {
    config.headers["Authorization"] = `Bearer ${apiKey}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);