import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default axiosApiIntances;
