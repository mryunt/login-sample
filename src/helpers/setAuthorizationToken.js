import axios from "axios";


export const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; //add axios header
    }
    else {
        delete axios.defaults.common?.Authorization; //delete axios auth header
    }
}