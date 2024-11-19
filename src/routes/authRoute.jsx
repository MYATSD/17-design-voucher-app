import React, { lazy, Suspense } from 'react'
import PageLoading from '../components/PageLoading';
// import LoginPage from "../Features/Auth/pages/LoginPage"
// import RegisterPage from "../Features/Auth/pages/RegisterPage"

const LoginPage =lazy(() => import ('../Features/Auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('../Features/Auth/pages/RegisterPage'));


const authRoute =[
    {
        path: "/login",
        element : (
            <Suspense fallback={<PageLoading/>}>
                <LoginPage/>
            </Suspense>
        )

        
    }
    ,
    {
        path: "/register",
        element: (
            <Suspense fallback={<PageLoading/>}>
                <RegisterPage/>
            </Suspense>
        )
    }
]

export default authRoute