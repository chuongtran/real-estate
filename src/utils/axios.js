import axios from 'axios';
import { camelize, decamelize } from './parsers';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3JvbGUiOiJhZG1pbiIsInVzZXJfaWQiOjMsImlhdCI6MTYwOTY0Nzg4NywiZXhwIjoxNjEwMjUyNjg3fQ.9_U6MF0MQStDpThVZU6-_R_R6szYv2vqki3vuqDc-a8',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('jwt');
    if (token) {
      instance.headers.Authorization = `Bearer ${token}`;
    } else {
      delete instance.defaults.headers.common.Authorization;
    }
    const { data } = config;
    if (data) {
      return {
        ...config,
        data: JSON.stringify(decamelize(data)),
      };
    }
    return config;
  },
  error => Promise.reject(error)
);
instance.interceptors.response.use(
  config => {
    return camelize(config.data.metadata.data);
  },
  error => Promise.reject(error),
);

export default instance;
