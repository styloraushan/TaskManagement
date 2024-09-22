import React from 'react'
import Cards from '../components/home/Cards'
import { useEffect ,useState } from 'react';
import axios from 'axios';

const Completetasks = ({CompleteTask,setCompleteTask}) => {

  const[Data, setData]= useState();

  const headers = {
    id: localStorage.getItem("id"),
    authrization: localStorage.getItem("token")
  }

 useEffect(()=>{
  const fetch = async()=>{
  const response = await axios.get(`https://task-management-application-bkend.onrender.com/api/v1/getcomptask` , {headers} ); 
     setData(response.data.comptasks);
  }
  fetch();
  
 })


  return (
    <div>
       <Cards addTask={"false"} data={Data}/>
    </div>
  )
}

export default Completetasks
