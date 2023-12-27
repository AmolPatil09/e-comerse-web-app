import React from 'react';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import {Link} from "react-router-dom"

export default function 
() {
    const [mobileMenu,setMobileMenu]=useState(false);
    const [isLogin,setIsLogin]=useState(true);

  return (
    <>
    {
        isLogin?
        <div>
     <div className='h-16 w-full text-white  bg-gradient-to-r from-violet-600 to-fuchsia-600 flex justify-between text-center'>
            <div className='text-lg font-bold mx-5 my-auto sm:text-2xl'>
               <p>EShop</p>
            </div>
            <div>
            <ul className='hidden my-4 mx-5 sm:flex' >
                <li className='mx-2 text-lg px-2 hover:bg-slate-700 rounded-md'><Link to='/'>Home</Link></li>
                <li className='mx-2 text-lg px-2 hover:bg-slate-700 rounded-md'><Link to='/product'>Products</Link></li>
                <li className='mx-2 text-lg px-2 hover:bg-slate-700 rounded-md'><Link to='/categories'>Categories</Link></li>
                <li className='mx-2 text-lg px-2 hover:bg-slate-700 rounded-md'><Link to='/contact'>Contact</Link></li>
            </ul>
            </div>
            <div>
            <ul className='hidden my-4 mx-5 sm:flex' >
                <li className=' m-auto  rounded-md mx-2'><Link to='/cart'><TiShoppingCart className='h-8 w-8 '/></Link></li>
                <li className='mx-3 text-lg px-3 hover:bg-red-600 rounded-md'>Logout</li>
             
            </ul>
            </div>
            {
                mobileMenu?<RxCross2 className='my-3  mx-5 h-10 w-10 min-w-6 sm:hidden' onClick={()=>{setMobileMenu(false)}}/>:<IoMenu className='my-3  mx-5 h-10 w-10 min-w-6 sm:hidden' onClick={()=>{setMobileMenu(true)}}/>
            }
     </div>
     {
          mobileMenu&&<ul className='sm:hidden absolute h-auto bg-white w-screen  text-black' >
          
                <li className='mx-3 text-lg block'>Home</li>
                <li className='mx-3 text-lg block'>Products</li>
                <li className='mx-3 text-lg block'>Categories</li>
                <li className='mx-3 text-lg block'>more</li>
                <li className='mx-3 text-lg block'>Contact</li>
      </ul>
        }

    </div>
        :
        <div>
            <div>
     <div className='h-16 w-full text-white bg-black flex justify-between text-center'>
            <div className='text-lg font-bold mx-5 my-auto sm:text-2xl'>
               <p>EShop</p>
            </div>
            <div>
            
            </div>
            <div>
            <ul className='hidden my-4 mx-5 sm:flex' >
                <li className='mx-3 text-lg px-3 hover:bg-slate-700 rounded-md'>Login</li>
                <li className='mx-3 text-lg px-3 hover:bg-slate-700 rounded-md'>SignUp</li>
             
            </ul>
            </div>
     </div>
   

    </div>
        </div>
    }
    </>
  )
}
