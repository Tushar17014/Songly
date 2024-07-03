import axios from 'axios';
import { SERVER_URL } from './const';

const AxiosInstance = axios.create({
    baseURL: SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

AxiosInstance.interceptors.request.use(
    async (config) => {
        const token = false;
        if(token){
            config.headers['Authorization'] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AxiosInstance.isAxiosError = (err) => {
    return axios.isAxiosError(err);
};

export default AxiosInstance;