import axios from 'axios';

import { BASE_URL, TOKEN } from '@/constants';
import { Storage } from '@/utils';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await Storage.getData(TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  async error => {
    await Storage.removeData(TOKEN);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      await Storage.removeData(TOKEN);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
