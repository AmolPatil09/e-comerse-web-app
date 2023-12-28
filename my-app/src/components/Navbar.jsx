import React from 'react';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import {Link} from "react-router-dom";

export default function 
() {
    const [mobileMenu,setMobileMenu]=useState(false);
    const [isLogin,setIsLogin]=useState(true);

    const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
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
    {
       <div className='w-full hidden sm:flex justify-center bg-purple-500 '>
       <ul className='hidden my-4 mx-5 sm:flex' >
           <li className='mx-2  md:text-lg px-2 hover:bg-purple-400 rounded-md'><Link to='/'>Home</Link></li>
           <li className='mx-2  md:text-lg px-2 hover:bg-purple-400 rounded-md'><Link to='/product'>Top Rated</Link></li>
           <li className='mx-2  md:text-lg px-2 hover:bg-purple-400 rounded-md'><Link to='/categories'>Kids Wears</Link></li>
           <li className='mx-2  md:text-lg px-2 hover:bg-purple-400 rounded-md'><Link to='/contact'>Electronics</Link></li>
           <li className="group relative hover:bg-purple-400 cursor-pointer mx-2 text-lg px-2 rounded-md">
       <a href="#" className="flex items-center gap-[2px] ">
         Trending Products
         <span>
           <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
         </span>
       </a>
       <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
         <ul>
           {DropdownLinks.map((data) => (
             <li key={data.id}>
               <a
                 href={data.link}
                 className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
               >
                 {data.name}
               </a>
             </li>
           ))}
         </ul>
       </div>
     </li>
       </ul>
       </div>
    }
     {
          mobileMenu&&<ul className='sm:hidden absolute h-auto bg-white w-screen  text-black' >
          
                <li className='mx-3 md:text-lg block'>Home</li>
                <li className='mx-3  md:text-lg block'>Top Rated</li>
                <li className='mx-3  md:text-lg block'>Kids Wears</li>
                <li className='mx-3  md:text-lg block'>Electronics</li>
                          <li className="group relative cursor-pointer mx-3 ">
            <a href="#" className="flex items-center gap-[2px] text-lg">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] text-left rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20  "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

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
