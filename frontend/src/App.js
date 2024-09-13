 import React from 'react';
 import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Alltasks from './pages/Alltasks';
import Imptasks from './pages/Imptasks';
import Completetasks from './pages/Completetasks';
import Incompletetasks from './pages/Incomplete';
import Signup from './pages/Signup';
import Login from './pages/Login';

 const App = ()=>{

  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative'>

      <Routes>

        <Route  path='/' element={<Home/>}> 

         <Route index element = {<Alltasks/>}/>
         <Route path='/imptasks' element = {<Imptasks/>}/>
         <Route path = '/comptasks' element={<Completetasks/>}/>
         <Route path='/incomptasks' element={<Incompletetasks/>}/>
         
        </Route>

        <Route path='/signup' element ={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
         
        
      </Routes>

      
         
    </div>
  )
 }

 export default App