import axios from "axios";

const BASE_URL = "https://chatrix-chat-app-5.onrender.com/api"

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, 
});