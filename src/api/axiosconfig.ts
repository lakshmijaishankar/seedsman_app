import axios from "axios";
// import { API_URL } from "./apiUrl";

export const axiosInstance = axios.create({
  /*baseURL: API_URL.BASE_URL,
  proxy: {
    host: "localhost",
    port: 5173,
  },*/
});
