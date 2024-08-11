import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar1 = () => {
  return (
    <div className='bg-blue-950 w-screen h-24 text-white flex'>
      <div className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
        Message Me
      </div>
      {/* <div className='ml-auto flex gap-4 text-sm md:text-base lg:text-lg xl:text-xl mr-8 mt-12'>
        <Link to="register" className="hover:text-yellow-500">Register</Link>
        <Link to="login" className="hover:text-yellow-500">Login</Link>
      </div> */}
    </div>
  )
}
export default Navbar1