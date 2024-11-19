import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
// import HomePage from '../Features/public/pages/HomePage'
// import AboutUsPage from '../Features/public/pages/AboutUsPage'
// import ContactUsPage from '../Features/public/pages/ContactUsPage'
const AboutUsPage = lazy(() => import('../Features/public/pages/AboutUsPage'))
const HomePage = lazy(() =>import("../Features/public/pages/HomePage"))
const ContactUsPage = lazy(() => import('../Features/public/pages/ContactUsPage')) 


const publicRoute = 
    [
        {
            index: true,
            element: <HomePage/>
        },
        {
            path: "/about-us",
            element: <AboutUsPage/>
        },
        {
            path : "/contact-us",
            element: <ContactUsPage/>
        }
    ]

export default publicRoute