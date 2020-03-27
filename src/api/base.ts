import Axios from 'axios';

// const baseUrl = 'http://192.168.0.122:3100';
const baseUrl = 'https://api.komak.io';
// const baseUrl = 'https://api-staging.komak.io';
export const axiosInstance = Axios.create({ baseURL: baseUrl });
