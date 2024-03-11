import axios from "axios";
import instance from "./axios";

const api_uri="http://localhost:8080";

export const login=(data)=>axios.post(`${api_uri}/api/v1/auth/login`,data);
export const register=(data)=>axios.post(`${api_uri}/api/v1/auth/register`,data);

//if u want to use the token then,must use instance
//otherwise use axios

//no need to pass any data to logout except token i.e.inject token
export const logout=()=>instance.post(`${api_uri}/api/v1/auth/logout`);

export const forgotPassword=(data)=>axios.patch(`${api_uri}/api/v1/auth/change-password`,data);