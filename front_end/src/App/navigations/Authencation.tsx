import React from 'react';
import { IRouter } from "../../types";


const AuthencationRouter: IRouter[] = [
    {
        path: "/login",
        exact: true,
        name: "Signin",
        component: React.lazy(()=> import("../../view/features/Authencation/views/Sigin"))
    },
    {
        path: "/login/register",
        exact: true,
        name: "Register",
        component: React.lazy(()=> import("../../view/features/Authencation/views/Register"))
    },
    {
        path: "/login/forgot-password",
        exact: true,
        name: "Forgot password",
        component: React.lazy(()=> import("../../view/features/Authencation/views/ForgotPassword"))
    }
];

export default AuthencationRouter;