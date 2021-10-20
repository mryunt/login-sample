import axios from "axios";
import apiUrl from "../api";


const loginService = (username, password) => {
    return axios.post(`${apiUrl}/v1/login`, { "username": username, "password": password })
}

let AuthService = {
    loginService,
}
export default AuthService;