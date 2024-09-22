import React, { useEffect, useState } from 'react'

import { CgNotes } from "react-icons/cg";
import { MdLabelImportantOutline } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import axios from 'axios';
import { IoFilterSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Data , setData]= useState();
  const [sideMenu , setSideMenu]= useState(false);
  const[hideBackground, setHidebackground] = useState(false);

  const [menu , setMenu] = useState("All tasks");

  const data=[
    {
      title:"All tasks",
      icon:<CgNotes/>,
      link :"/"
    },

    {
      title:"Important tasks",
      icon:<MdLabelImportantOutline/>,
      link:"/imptasks"

    },

    {
      title:"Completed tasks",
      icon: <FaCheckDouble />,
      link : "/comptasks"
    },

    {
      title:"Incompleted tasks",
      icon:<TbNotebookOff />,
      link:"incomptasks"
    }
  ];

  const logoutHandler=()=>{

    dispatch(authActions.logout());
    localStorage.clear("id");
    localStorage.clear("token");
    navigate('/login');
    
  }

  const headers = {
    id: localStorage.getItem("id"),
    authrization: localStorage.getItem("token")
  }

 useEffect(()=>{

  const fetch = async()=>{
    const response = await axios.get(`https://task-management-application-bkend.onrender.com/api/v1/gettasks`,{headers} );
    // console.log(response);
      setData(response.data.alltasks);
  }

  if(localStorage.getItem("id") && localStorage.getItem("token")){  // check this otherwise it render an error for some secona
    fetch();
  }
 

 } , [])

 function menuHandler(){
  setSideMenu(!sideMenu)
  setHidebackground(!hideBackground);
  
 }

  return (
 
    <>

      {Data && (
         <div>
            <h2 className='text-xl font-semibold'>{Data.username}</h2>
            <h4 className='mb-1 text-gray-400'>{Data.email}</h4>
            <hr />
        </div>
      )}
       
        



         
     {hideBackground &&(

      <div className={` fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full side-left transition-all duration-1000 md:hidden`}>     
      </div>

     )}
       
       <div className={` h-20 md:h-2/6 flex   flex-col items-center   gap-10   relative   `}>

        
         <div className={`md:hidden block mt-4 `} >
         {sideMenu? <RxCross2 onClick={menuHandler} className='text-xl'/>:<IoFilterSharp  onClick={menuHandler} className='text-xl'/> }
         </div>

        <div className={` ${sideMenu ? 'block' : 'hidden'} md:block `}>
          {data.map((items,i)=>(
            <Link to={items.link} onClick={menuHandler}
            className='my-2 flex items-center gap-2 hover:bg-gray-600 p-2 rounded transition-all duration-300  '>  
              
              {items.icon}
              {items.title} </Link>
          ))}
        </div>
         
        
        

       </div>
        
         
          

        <div>
          <button className={`bg-gray-600 p-2 rounded w-full  md:text-lg text-xs `} onClick={logoutHandler}>Log Out</button>
        </div>

        </>



        

   
  )
}

export default Sidebar
