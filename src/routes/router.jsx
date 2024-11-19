import React from 'react'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import PublicLayout from '../Features/public/components/PublicLayout'
import NotFound from '../components/NotFound'
import publicRoute from './publicRoute'
import authRoute from './authRoute'
import dashboardRoute from './dashboardRoute'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <PublicLayout/>,
            errorElement: <NotFound/>,
            children: [...publicRoute]
        },
        
            ...authRoute,
            ...dashboardRoute
        
    ]
)



export default router