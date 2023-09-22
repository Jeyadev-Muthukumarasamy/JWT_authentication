import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"http://localhost:3005/api"
})

axiosInstance.interceptors.response.use((response)=>response,(error)=>{
    if(error.response.status===401){
        localStorage.clear();
        window.location.href="/login"
    }
    return Promise.reject(error);
})


axiosInstance.interceptors.request.use((request)=>{
    const token=localStorage.getItem("token");
    if(token){
        request.headers.Authorization=token;
    }
    return response;
    
},(error)=>error
)