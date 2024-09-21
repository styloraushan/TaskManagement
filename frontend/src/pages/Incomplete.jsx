import React from 'react'
import Cards from '../components/home/Cards'
import { useEffect ,useState } from 'react';
import axios from 'axios';

const Incomplete = () => {

  const[Data, setData]= useState();

  const headers = {
    id: localStorage.getItem("id"),
    authrization: localStorage.getItem("token")
  }

 useEffect(()=>{
  const fetch = async()=>{
  const response = await axios.get("http://localhost:1000/getincompletetask" , {headers} ); 
     setData(response.data.Incomptasks);
  }
  fetch();
  
 })


  
  return (
    <div>
      <Cards addTask={"false"} data={Data}/>
    </div>
  )
}

export default Incomplete