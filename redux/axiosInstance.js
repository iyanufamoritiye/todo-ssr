import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", // Adjust this URL if needed
});

export default axiosInstance;
