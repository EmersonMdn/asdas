import axios from "axios";

const instance = axios.create({
  baseURL: "https://todo-backend-dpbi7y86i-emersonmdn.vercel.app/api",
  // baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

export default instance;
