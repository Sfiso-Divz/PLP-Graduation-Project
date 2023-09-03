import React, { useState } from 'react'
import {UserAuth} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'

function SignUp() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      await signUp(email, password)
      navigate('/')
    } catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <div className='w-full h-screen '>
          <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/697632fc-99c3-4885-bdbf-c99a8ffceec5/ZA-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
          <div className='absolute top-0 left-0 h-screen'></div>  
          <div className='fixed w-full h-screen bg-black/60 px-4 py-24 z-50'>
              <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
                  <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                      <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded outline-0' type="email" placeholder='Email' autoComplete='email'/>
                      <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded outline-0' type="password" placeholder='Password' autoComplete='current-password' />
                      <button className='bg-red-600 rounded py-3 my-6 font-bold'>Submit</button>
                      <div className='flex justify-between items-center text-sm text-gray-600'>
                        <p><input className='mr-2' type="checkbox" />Remember me</p>
                        <p>Need help?</p>
                      </div>
                      <p className='py-4'><span className='text-gray-600 mr-2'>Already subscribed to Netflix?</span>
                      <a className='text-sm' href="/login">Sign In</a>
                      </p>
                    </form>
                  </div>
              </div>
          </div>   
      </div>
    </>
  )
}

export default SignUp