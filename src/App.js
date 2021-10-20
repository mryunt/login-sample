import { Suspense } from "react/cjs/react.production.min";
import { setAuthorizationToken } from "./helpers/setAuthorizationToken.js";
import Router from "./router/index.js"
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { loggedIn, logout } from "./redux/Auth/action.js";
import { Redirect, useHistory } from "react-router";



function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    let jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
      setAuthorizationToken(jwtToken);
      dispatch(loggedIn())
    }
    else {
      setAuthorizationToken(false);
      dispatch(logout())
    }

    return (
      <Redirect to="/" />
    )
  }, [])

  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
}

export default App;
