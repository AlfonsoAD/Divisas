import axios from "axios";

export const frankfurterApi = axios.create({
  baseURL: "https://www.frankfurter.app",
});
