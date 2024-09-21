import React, { useState } from 'react'
import Cards from '../components/home/Cards';
import { useEffect  } from 'react';
import axios from 'axios';

const Imptasks = () => {

  const[Data, setData]= useState();

  const headers = {
    id: localStorage.getItem("id"),
    authrization: localStorage.getItem("token")
  }

 useEffect(()=>{
  const fetch = async()=>{
  const response = await axios.get("http://localhost:1000/api/v1/getimptasks" , {headers} ); 
     setData(response.data.imptasks);
  }
  fetch();
  
 })

 

 


  return (
    <div>
      <Cards  addTask={"false"} data={Data}/>
    </div>
  )
}

export default Imptasks