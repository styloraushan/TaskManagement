import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[98vh]'>

        <div className='bg-gray-800 w-2/6 rounded p-4'>
          
          <div className='text-2xl font-semibold'>LogIn</div>

          <input required type="text" placeholder='username' className='px-3 py-2 w-full my-3 bg-gray-700 rounded' name='username' />
          <input required type="password"  placeholder='password' className='px-3 py-2 w-full my-3 bg-gray-700 rounded' name='password' />

         

           <div className='w-full flex items-center gap-12'>

             <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded'>Login</button>
             <Link to='/signup' className='text-gray-400 hover:text-gray-200'>Not having an account? Signup here !</Link>

           </div>

        
        </div>
    </div>
  )
}

export default Login