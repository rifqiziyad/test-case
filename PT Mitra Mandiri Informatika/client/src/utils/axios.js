import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "http://localhost:3007/server",
});

export default axiosApiIntances;
