import axios from "axios";
import env from "dotenv";
env.config();

const axiosApiIntances = axios.create({
  baseURL: "http://localhost:3006/backend/chat/",
});

export default axiosApiIntances;
