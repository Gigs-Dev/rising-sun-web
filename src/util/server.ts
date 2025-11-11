import axios from 'axios';

const SERVER = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_PRODUCTION_URI,
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 15000,
});

// Request interceptor
SERVER.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    config.headers = config.headers || {};
    config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json';

    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Response interceptor
SERVER.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
     throw error
    }
    return Promise.reject(error);
  }
);

export default SERVER;
