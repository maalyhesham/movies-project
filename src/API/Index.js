import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const CRUDRequests = {
  get: async (url) => {
    return await baseApi.get(url, {});
  },
  post: async (url) => {
    return await baseApi.post(url, {}, {});
  },
  delete: async (url) => {
    return await baseApi.delete(url, {}, {});
  },
  put: async (url) => {
    return await baseApi.put(url, {}, {});
  },
};

export default CRUDRequests;
