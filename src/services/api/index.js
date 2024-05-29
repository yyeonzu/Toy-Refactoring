import axios from 'axios';

const access_token = localStorage.getItem('access_token');
const refresh_token = localStorage.getItem('refresh_token');

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.headers.common['Authorization'] = access_token;
