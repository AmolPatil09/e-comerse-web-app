import React from 'react'
import {Outlet} from 'react-router-dom'

export default function 
() {
  return (
    <div className='min-h-[605px] w-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-center '>
 
    <Outlet/>
    </div>
  )
}