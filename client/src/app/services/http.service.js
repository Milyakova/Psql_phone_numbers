import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:8081/" });

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
};
export default httpService;
