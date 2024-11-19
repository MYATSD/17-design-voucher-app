import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const DashboardLayout = () => {
  return (
    <main>
        <Header/>
        <Outlet/>

    </main>
  )
}

export default DashboardLayout