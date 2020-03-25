import Axios from 'axios';

const baseUrl = 'http://192.168.0.122:3100';
export const axiosInstance = Axios.create({ baseURL: baseUrl });
