import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
 

const Cards = ({addTask,setShowInputDiv}) => {

 

    const data = [
        {
            title:"The Best Coding channel",
            desc:"I have to create my channel the best ever coding channel of hindi for those who do not understand english ",
            status:"In Complete"
        },

        {
            title:"CPP Concepts",
            desc:"I need to clear basics of cpp",
            status:"Complete"

        },

        {
            title:"Assignment",
            desc:"I have to completet my assignmnetnt before 13 march",
            status:"In Complete"
        },

        {
            title:"Projects",
            desc:"For Projects i need to see tutorials",
            status:"In Complete"
        }
    ];

  return (
    <div className='grid grid-cols-3 p-4 gap-4'>
        
        {data.map((items,i)=>(

            <div  className=' bg-gray-800 rounded-xl p-4 flex flex-col justify-between'>

             <div>
                <h1 className='text-xl font-semibold'>{items.title}</h1>              
                <p className='text-gray-300 my-2'>{items.desc}</p>
             </div>

              <div className='mt-4 w-full flex items-center'>

                <button className={`${items.status==="In Complete"? ' bg-red-400 ': 'bg-green-700'} p-2 rounded w-3/6`}> {items.status}</button>

                <div className='  w-3/6 p-2 text-2xl flex justify-around '>
                    <button><CiHeart /></button>
                    <button><FaEdit /></button>
                    <button><MdDelete /></button>
                </div>

              </div>

            </div>

           
        ))}

         
         {addTask==="true" && 
         (
        <div  className=' text-gray-300 bg-gray-800 rounded-xl p-4 flex flex-col justify-center items-center 
                              hover:scale-105 hover:cursor-pointer transition-all duration-300 ' onClick={()=>setShowInputDiv(true)} >

            <MdAddCircle className='text-5xl' />
            <h1 className='text-2xl mt-4'>Add Task</h1>

        </div>
        
         )}
 

    </div>
  )
}

export default Cards