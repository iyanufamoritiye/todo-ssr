import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // Adjust this URL if needed
});

export default axiosInstance;
