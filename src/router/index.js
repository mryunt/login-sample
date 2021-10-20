import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import React from 'react'
import { routes, authRoutes } from "./routes";
import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Index = () => {
 
    const AuthStore = useSelector(state => state.AuthReducer);

    return (
        <Router>
        <Header content={AuthStore.loginSuccess}/>
            <Switch>
                {
                    AuthStore.loginSuccess
                        ?
                        routes.map((page, indx) => (
                            <Route
                                key={indx}
                                path={page.path}
                                component={page.component}
                            />
                        ))
                        :
                        authRoutes.map((page, indx) => (
                            <Route
                                key={indx}
                                path={page.path}
                                component={page.component}
                            />

                        ))
                }
            </Switch>
            <Footer/>
        </Router>
    )
}

export default Index
