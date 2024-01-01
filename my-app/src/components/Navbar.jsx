import React from 'react';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import {Link} from "react-router-dom";
import { useSelector ,useDispatch} from 'react-redux';
import {FaSearch} from "react-icons/fa"



export default function 
() {  
    const isLogin=useSelector((store)=>store.isLogin);
    const dispatch=useDispatch();
    const [mobileMenu,setMobileMenu]=useState(false);
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
                <li className=' m-auto  rounded-md mx-2'><div className='m-auto'>
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                onChange={()=>dispatch({type:"SET_SERCHTERM",payload:{serchTerm:event.target.value}})}
                className="w-[200px] text-black sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"  />
            </div>

            </div></li>
                <li className=' m-auto  rounded-md mx-2'><Link to='/cart'><TiShoppingCart className='h-8 w-8 '/></Link></li>
                <li className='mx-3 text-lg px-3 hover:bg-red-600 rounded-md'>Logout</li>
             
            </ul>
            </div>
            {
                mobileMenu?<RxCross2 className='my-3  mx-5 h-10 w-10 min-w-6 sm:hidden' onClick={()=>{setMobileMenu(false)}}/>:<IoMenu className='my-3  mx-5 h-10 w-10 min-w-6 sm:hidden' onClick={()=>{setMobileMenu(true)}}/>
            }
     </div>
     <div className="flex items-center bg-gradient-to-r from-violet-600 to-fuchsia-600  mx-auto justify-normal sm:hidden w-full">
     
      <input
        type="text"
        placeholder="Search..."
        onChange={()=>dispatch({type:"SET_SERCHTERM",payload:{serchTerm:event.target.value}})}
        className="border border-gray-300 h-10 ml-[10%] w-[70%] rounded p-2 focus:outline-none focus:border-blue-500 my-1"
      />
      <button className="bg-blue-500 text-white h-10 p-2 w-[10%] mr-[10%] min-w-8 max-w-12 rounded my-1">
        <FaSearch />
      </button>
     </div>
    
    
     {
          mobileMenu&&<ul className='flex flex-col absolute bg-white w-full  ' >
         <li className='mx-3 md:text-lg block' onClick={()=>dispatch({type:"CHANGE_CATEGORY",payload:{category:"" }})}>All</li>
           <li className='mx-3 md:text-lg block' onClick={()=>dispatch({type:"CHANGE_CATEGORY",payload:{category:"Men" }})}>Men</li>
           <li className='mx-3 md:text-lg block' onClick={()=>dispatch({type:"CHANGE_CATEGORY",payload:{category:"Women" }})}>Women</li>
           <li className='mx-3 md:text-lg block' onClick={()=>dispatch({type:"CHANGE_CATEGORY",payload:{category:"Kids" }})}>Kids Wears</li>
           <li className='mx-3 md:text-lg block' onClick={()=>dispatch({type:"CHANGE_CATEGORY",payload:{category:"Electronics" }})}>Electronics</li>
       
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
                <li className='mx-3 text-lg px-3 hover:bg-purple-400 rounded-md'>Login</li>
                <li className='mx-3 text-lg px-3 hover:bg-purple-400 rounded-md'>SignUp</li>
             
            </ul>
            </div>
     </div>
   

    </div>
        </div>
    }
    </>
  )
}
