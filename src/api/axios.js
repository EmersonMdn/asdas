import axios from "axios";

const API_URL = "https://anotador-backendv1.onrender.com/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default axiosInstance;
