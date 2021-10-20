const initialState = {
    loginSuccess: false,
    loginError: false,
    logout: false,
}


const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                loginSuccess: action.loginSuccess,
                loginError: action.loginError,
                logout: action.logout,
            }
        case "LOGGED_IN":
            return {
                loginSuccess: action.loginSuccess,
                loginError: action.loginError,
                logout: action.logout,
            }
        case "LOGIN_ERROR":
            return {
                loginSuccess: action.loginSuccess,
                loginError: action.loginError,
                logout: action.logout,
            }
        case "LOGOUT":
            return {
                loginSuccess: action.loginSuccess,
                loginError: action.loginError,
                logout: action.logout,
            }
        default:
            return state;
    }
}

export default AuthReducer;