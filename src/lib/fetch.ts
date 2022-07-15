import axios from 'axios';

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const authApi = axios.create({
  withCredentials: true,
  baseURL
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';
