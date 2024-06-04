import Axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';

const TIME_OUT = 60000;

const baseApiConfig = {
  baseURL: 'Base URL',
  headers: {
    'content-type': 'application/json',
  },
  timeout: TIME_OUT,
};

export const axiosRequest = Axios.create(baseApiConfig);

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = 'asdsadadad';
  config.headers.Accept = 'application/json';
  config.headers.Authorization = `Bearer + ${token}`;
  config.params = {
    name: 'Personal Shop Web',
    lang: 'en',
  };
  return config;
}

axiosRequest.interceptors.request.use(authRequestInterceptor);

axiosRequest.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    return await Promise.reject(error);
  }
);

export default axiosRequest;
