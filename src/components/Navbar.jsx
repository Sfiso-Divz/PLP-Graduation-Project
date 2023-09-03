import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';



const Navbar = () => {
  
  const {user, logOut} = UserAuth()
  console.log(user)
  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await logOut()
      navigate('/')
    }catch (error){
      console.log(error)
    }
  }
  
   
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>

        <a href="/">
          <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>ZULUFLIX</h1>
        </a>
      
      {user?.email ? <div>
        <a href="/account">
          <button className='text-white pr-4'>Account</button>
        </a>
         
        
          <button onClick={handleLogOut} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Log Out</button>
       
      </div> : <div>
        <a href="/login">
          <button className='text-white pr-4'>Sign In</button>
        </a>
         
         <a href="/signup">
          <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
         </a>
      </div> }
    </div>
  )
}

export default Navbar