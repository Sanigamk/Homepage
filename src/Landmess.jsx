import React from 'react'
import Topnav from './Common/Navbar1'
import { Outlet } from 'react-router-dom'

export const Landmess = () => {
  return (
    <>
      <div className='flex flex-col'>
        <Topnav/>
        <div className='back1'>
            <Outlet/>
        </div>
      </div>
    </>
  )
}
export default Landmess
