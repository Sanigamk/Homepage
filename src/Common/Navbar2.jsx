import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar2 = () => {
  return (
    <div className='bg-blue-950 w-screen h-24 text-white flex'>
      <div className='text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-8'>
        Message Meeee..
      </div>
      <div className='ml-auto flex gap-4 text-sm md:text-base lg:text-lg xl:text-xl mr-8 mt-9'>
        <Link to="sendmes" className="hover:text-yellow-500">Send</Link>
        <div className="hover:text-yellow-500">Received</div>
      </div>
    </div>
  )
}
export default Navbar2