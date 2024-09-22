import React from 'react'
import Sidebar from '../components/home/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex md:flex-row flex-col h-[98vh]  bg-gray-900 gap-4 overscroll-x-none '>

 
      <div className='sm:absolute md:fixed md:left-0  top-0 bg-gray-900 w-screen md:h-screen  md:w-1/6 pr-8  p-4 flex  md:flex-col sm:flex-row   sm:items-center    justify-between '>
        <Sidebar/>
        </div>
   
      

      <div className='sm:relative  pr-8  md:absolute right-0  sm:pt-3  bg-gray-900  w-screen  md:w-5/6 md:border-l-2  border-gray-500  p-4  overflow-x-hidden  md:h-screen'> <Outlet/> </div>
        
    </div>
  )
}

export default Home