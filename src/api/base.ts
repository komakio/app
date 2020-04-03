import Axios from 'axios';
import { Environment } from 'environment';

export const axiosInstance = Axios.create({ baseURL: Environment.apiUrl });
