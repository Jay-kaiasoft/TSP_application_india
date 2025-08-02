import { userInOutURL } from "../../config/apiConfig/apiConfig"
import axiosInterceptor from "../axiosInterceptor/axiosInterceptor"

export const addUserTimeIn = async (params) => {
    try {
        const response = axiosInterceptor().post(`${userInOutURL}/clockInOut?${params}`)
        return response

    } catch (error) {
        console.log(error)
    }
}