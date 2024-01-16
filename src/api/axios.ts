import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URI,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh");

        const response = await axios.post(`${process.env.REACT_APP_BASE_URI}`, {
          refreshToken,
        });

        const { access, refresh } = response.data;

        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);

        originalRequest.headers.Authorization = `Bearer ${access}`;

        return axios(originalRequest);
      } catch (error) {}
    }

    return Promise.reject(error);
  }
);

export default api;
