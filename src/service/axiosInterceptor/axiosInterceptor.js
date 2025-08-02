import axios from "axios";
import store from "../../redux/store";
import { setLoading } from "../../redux/commonReducers/commonReducers";

const baseURL = process.env.REACT_APP_MAIN_BASE_URL;

const axiosInterceptor = () => {
    let headers = {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
    };

    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers,
        validateStatus: function (status) {
            return status <= 500;
        },
    });

    // Request Interceptor
    axiosInstance.interceptors.request.use(
        (config) => {
            store.dispatch(setLoading(true)); // Update loading state
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Response Interceptor
    axiosInstance.interceptors.response.use(
        (response) => {          
            store.dispatch(setLoading(false)); // Set loading to false
            return response; // Return the whole response object for further handling
        },
        (error) => {
            store.dispatch(setLoading(false)); // Set loading to false on error
            return Promise.reject(error);
        }
    );

    return axiosInstance
}

export default axiosInterceptor;
