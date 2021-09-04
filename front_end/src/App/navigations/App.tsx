import React from 'react';
import { IRouter } from "../../types";

const AppRouter: IRouter[] = [
    {
        path: "/login",
        name: "Login",
        component: React.lazy(()=> import("../../view/pages/Login"))
    },
    {
        path: "/",
        exact: true,
        name: "Home",
        component: React.lazy(()=> import("../../view/pages/Home"))
    }
]

export default AppRouter;