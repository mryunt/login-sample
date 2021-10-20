import { lazy } from "react";

export const routes = [
    {
        path: "/about",
        component: lazy(() => import("../pages/About"))
    },
    {
        path: "/contact",
        component: lazy(() => import("../pages/Contact"))
    },
    {
        path: '/*',
        exact: true,
        component: lazy(() => import("../pages/NotFound404"))
    },
    {
        path: "/",
        component: lazy(() => import("../pages/Home"))
    },
]


export const authRoutes = [
    {
        path: "/register",
        component: lazy(() => import("../pages/Auth/Register"))
    },
    {
        path: "/",
        component: lazy(() => import("../pages/Auth/Login"))
    },
]