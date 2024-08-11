import React from 'react'
import Topnav from './Common/Navbar2'
import { Outlet } from 'react-router-dom'

export const Messhome = () => {
  return (
    <>
      <div className='flex flex-col'>
        <Topnav/>
        <div className='back1'>
          <div className='text-white text-center font-extrabold mt-44 text-6xl'>Send Me Your Favorite Hobbies..</div>
            <Outlet/>
        </div>
      </div>
    </>
  )
}
export default Messhome
