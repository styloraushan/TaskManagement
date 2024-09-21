import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '../store/auth';


const Login = () => {

   
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn)
  if(isLoggedIn == true){
    navigate('/')
  }

  const [Data, setData]= useState({username:"" , password:""});

  function changeHandler(event){

    const{name , value}= event.target;
    setData({...Data , [name]:value});
  }

  async function submitHandler(event){

    try{
       if(Data.username===""|| Data.password===""){
      alert("All field is required");
    }
    else {

     const response =  await axios.post("https://task-management-application-nu.vercel.app/api/v1/login" , Data);
   
    
     setData({username:"" , password:""});
     localStorage.setItem("id" , response.data.id);
     localStorage.setItem("token" , response.data.token);
      //  console.log(response);

     dispatch(authActions.login());
    
      navigate('/');
     

    }
  }
   catch(err){

    alert(err.response.data.message);
    navigate('/login');
    setData({username:"" , email:"" , password:""});


    }

    }



  return (
    <div className='flex items-center justify-center h-[98vh]'>

        <div className='bg-gray-800 w-2/6 rounded p-4'>
          
          <div className='text-2xl font-semibold'>LogIn</div>

          <input required type="text" placeholder='username' className='px-3 py-2 w-full my-3 bg-gray-700 rounded' name='username' onChange={changeHandler} value={Data.username}/>
          <input required type="password"  placeholder='password' className='px-3 py-2 w-full my-3 bg-gray-700 rounded' name='password' onChange={changeHandler} value={Data.password} />

         

           <div className='w-full flex items-center gap-12'>

             <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded' onClick={submitHandler}>Login</button>
             <Link to='/signup' className='text-gray-400 hover:text-gray-200'>Not having an account? Signup here !</Link>

           </div>

        
        </div>
    </div>
  )
}

export default Login