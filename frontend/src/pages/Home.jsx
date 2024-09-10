import React from 'react'
import Sidebar from '../components/home/Sidebar'

const Home = () => {
  return (
    <div className='flex h-[98vh] gap-4'>

      <div className=' w-1/6 border rounded-xl border-gray-500 p-4 '><Sidebar/></div>
      <div className='w-5/6 border rounded-xl border-gray-500 p-4'>Hello 2</div>
        
    </div>
  )
}

export default Home