import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/authSlice";
const instance =axios.create();

//used to pass the req to interceptor
instance.interceptors.request.use(async(config)=>{
    // const token=sessionStorage.getItem("token");
    const authDataString = sessionStorage.getItem("persist:root");
    if (authDataString) {
        const authData = JSON.parse(authDataString);
        // console.log("Token:", token);
        // console.log(authDataString);
        // console.log(authData);
        // console.log(authData.auth);
        const auth = JSON.parse(authData.auth);
        console.log(auth.token);
        const token = auth.token; // Access the 'token' property
        // const token1=useSelector(selectToken());
    if(token)
    {
        config.headers.Authorization=`Bearer ${token}`;
        return config;
    }
} else {
    console.error("Token not found in session storage.");
}
    // const token = "abc";
},(error)=>{
        return Promise.reject(error);
})
export default instance;