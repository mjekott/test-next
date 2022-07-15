import axios from 'axios';

const baseURL = 'https://dev.campusss.io/v1';

export const authApi = axios.create({
  withCredentials: true,
  baseURL
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';
