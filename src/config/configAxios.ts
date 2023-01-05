import axios from "axios";
import {toast} from "react-toastify";


export const axiosInstance = axios.create({
    // baseURL: "...Your baseUrl",
});

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent

    const token = localStorage.getItem('token');
    if (token) {
        config.headers !== undefined ? config.headers['Authorization'] = 'Bearer ' + token : ''
    }
    
    config.headers !== undefined ? config.headers['Content-Type'] = 'application/json' : null;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => {
        return response
    },
    function (error) {
        const originalRequest = error.config
        if (
            originalRequest?.data?.error
        ) {
            toast.error(originalRequest?.data?.error?.message);
            return Promise.reject(error)
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

        }
        return Promise.reject(error)
    }
)