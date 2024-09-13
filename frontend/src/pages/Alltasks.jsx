 
import Cards from '../components/home/Cards'
import { MdAddCircle } from "react-icons/md";
import InputData from '../components/home/InputData';
import React  from 'react'
import { useState } from 'react';

const Alltasks = () => {
  const[showInputDiv , setShowInputDiv] = useState(false);
  return (

    <>
     <div>

      <div className='w-full flex justify-end px-4 py-2'> 

        <button onClick={()=>setShowInputDiv(true)}>
        <MdAddCircle className='text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300'/>
        </button>

        
      </div>
      <Cards addTask={"true"} setShowInputDiv={setShowInputDiv} />

    </div>

    {
      showInputDiv ?  <InputData setShowInputDiv={setShowInputDiv} />:<></>
    }

   
    
    </>


   
  )
}

export default Alltasks