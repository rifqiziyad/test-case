import axios from "axios";
import env from "dotenv";
env.config();

const axiosApiIntances = axios.create({
  baseURL: "https://test-case-rifqi-ziyad-imtinan.herokuapp.com/backend/chat/",
});

export default axiosApiIntances;
