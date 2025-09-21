import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://codelang.vercel.app/api',
});
