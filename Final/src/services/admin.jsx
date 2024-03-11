// import axios from "axios";
import instance from "./axios";

const api_uri="http://localhost:8080";

//no need to pass any data to logout except token i.e.inject token
export const getJobs=()=>instance.get(`${api_uri}/api/v1/admin/jobs/get`);
export const getJobById=(data)=>instance.get(`${api_uri}/api/v1/admin/jobs/get/${data}`);
export const addJob=(data)=>instance.post(`${api_uri}/api/v1/admin/jobs/create`,data);
export const deleteJob=(data)=>instance.delete(`${api_uri}/api/v1/admin/jobs/delete/${data}`);
export const updateJob=(id,data)=>instance.put(`${api_uri}/api/v1/admin/jobs/update/${id}`,data);

export const getApplications=()=>instance.get(`${api_uri}/api/v1/user/applications/get`);
export const updateStatus=(id,status)=>instance.patch(`${api_uri}/api/v1/user/applications/update/${id}/${status}`);
export const getUser=()=>instance.get(`${api_uri}/api/v1/user/get`);