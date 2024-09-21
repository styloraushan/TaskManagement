import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Signup = () => {

  const navigate = useNavigate();
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn)
  if(isLoggedIn == true){
    navigate('/')
  }

  


  const [data, setData]= useState({username:"" , email:"" , password:""});

  function changeHandler(event){

    const{name , value}= event.target;
    setData({...data , [name]:value});
  }

  async function submitHandler(event){

    try{
       if(data.username==="" || data.email==="" || data.password===""){
      alert("All field is required");
    }
    else {

     const response =  await axios.post("https://task-management-application-bckend.onrender.com/api/v1/signup" , data);
    //  console.log(response);

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
          
          <div className='text-2xl font-semibold'>Signup</div>

          <input required type="text" placeholder='username' className='px-3 py-2 w-full my-3 bg-gray-700 rounded' name='username' onChange={changeHandler} value={data.username} />
          <input required type="email" placeholder='email' className='px-3 py-2 w-full my-3 bg-gray-700 rounded' name='email' onChange={changeHandler} value={data.email}/>
          <input required type="password"  placeholder='password' className='px-3 py-2 w-full my-3 bg-gray-700 rounded' name='password' onChange={changeHandler} value={data.password} />

           <div className='w-full flex items-center gap-12'>

             <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded' onClick={submitHandler}>SignUp</button>
             <Link to='/login' className='text-gray-400 hover:text-gray-200'>Already have an account? Login here !</Link>

           </div>

        
        </div>
    </div>
  )
}

export default Signup
