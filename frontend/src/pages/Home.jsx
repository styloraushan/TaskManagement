import React from 'react'
import Sidebar from '../components/home/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex md:flex-row flex-col h-[98vh]  bg-gray-900 gap-4'>

 
      <div className='sm:absolute md:fixed md:left-0  top-0 bg-gray-900 w-screen md:h-screen  md:w-1/6 border-r-2   border-gray-500 p-4 flex  md:flex-col sm:flex-row      justify-between '>
        <Sidebar/>
        </div>
   
      

      <div className='sm:relative top-10  md:absolute right-0  sm:pt-3  bg-gray-900  w-screen  md:w-5/6   p-4  overflow-x-hidden  '> <Outlet/> </div>
        
    </div>
  )
}

export default Home