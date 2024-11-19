import React, { Suspense } from 'react'
import PublicHeader from './PublicHeader'
import PublicFooter from './PublicFooter'
import { Outlet } from 'react-router-dom'
import PageLoading from '../../../components/PageLoading'

const PublicLayout = () => {
  return (
   <main className='flex flex-col min-h-screen'>
    <PublicHeader/>
    <Suspense fallback={<PageLoading/>}>
    <Outlet/>

    </Suspense>
    <PublicFooter/>
   
   </main>
  )
}

export default PublicLayout