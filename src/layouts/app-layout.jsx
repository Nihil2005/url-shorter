import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <div data-theme="cyberpunk" className='p-4  '>
      <Header/>
      <main className='min-h-screen container'>
      <Outlet/>
      </main>
      <div className='p-10 text-center bg-grey-800 mt-10'>
        Made By Nihil
      </div>
    </div>
  )
}
