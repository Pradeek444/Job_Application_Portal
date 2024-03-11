// import axios from "axios";
import instance from "./axios";

const api_uri="http://localhost:8080";

//no need to pass any data to logout except token i.e.inject token
export const getJobByType=(type)=>instance.get(`${api_uri}/api/v1/admin/jobs/get/type/${type}`);
export const getAppByEmail=(email)=>instance.get(`${api_uri}/api/v1/user/applications/email/${email}`);
export const applyJob=(data)=>instance.post(`${api_uri}/api/v1/user/applications/create`,data);
