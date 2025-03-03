import axios from 'axios';
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';


const API_URL= import.meta.env.VITE_API_URI
const UserBox = ({data}) => {
    console.log(data);
    
  const navigate=useNavigate()
  const [isLoading,setIsLoading]=useState(false)



  const handleClick=useCallback(()=>{
    setIsLoading(true);
    // now make an api call for doing conversation with some user which will be psot reuqest and it takes that users id in body
    axios.post(`${API_URL}/conversation/chat`,{userId:data._id}).then((res)=>{
      console.log(res.data.data);
      navigate(`/conversations/${res.data.data._id}`)
    }).catch((error)=>{
        console.log(error);
        
    }).finall(()=>{
        setIsLoading(false)
    })
  },[])  
 

  return (
    <div onClick={handleClick} 
    className='
     w-full
     relative
     flex
     items-center
     space-x-3
     bg-white
     p-3
     hover:bg-neutral-100
     rounded-lg
     transition
     cursor-pointer
    '
    >
      <Avatar data={data}/>
      <div className='min-w-0 flex-1'>
        <div className='focus:outline-none'>
         <div className='flex justify-between items-center mb-1'>
            <p className='tex-sm font-medium text-gray-900'>{data.name}</p>
         </div>
        </div>
      </div> 
    </div>
  )
}

export default UserBox
