import React from 'react'

const AuthSocialButton = ({icon:Icon,onClick}) => {

    
  return (
    <button type='button' onClick={onClick}
     className='
     inline-flex 
     w-full 
     justify-center 
     rounded-md 
     bg-white py-2 
     px-4
     text-gray-500
     shadow-sm
     ring-1
     ring-inset
     ring-gray-300
     hover:bg-gray-50
     focus:outline-offset-0
     '>
     <Icon/>
    </button>
  )
}

export default AuthSocialButton
