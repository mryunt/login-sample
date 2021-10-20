import AuthService from "../../core/services/AuthService"

export const login = (username, password) => {
    return dispatch => {
        AuthService.loginService(username, password).then(res => {
            console.log("response : ", res)
            if (res.data.token && (res.data.code?.statusCode !== 1001 || res.data.code?.statusCode !== 1002)) {

                dispatch({
                    type: "LOGIN_SUCCESS",
                    loginSuccess: true
                })
                localStorage.setItem("jwtToken", res.data.token);
                alert("Giriş Başarılı")
            }
            else {
                alert(`Hata oluştu : ${res.data.message}`)
            }
        })
    }
}


export const loggedIn = () => {
    return dispatch => {
        dispatch({
            type: "LOGGED_IN",
            loginSuccess: true,
            loginError: false,
            logout: false,
        })
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem("jwtToken")
        dispatch({
            type: "LOGOUT",
            loginSuccess: false,
            loginError: false,
            logout: true,
        })
    }
}