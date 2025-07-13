import axios from "axios";

const baseUrl = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:8000/api/v1/",
});
export default baseUrl;
