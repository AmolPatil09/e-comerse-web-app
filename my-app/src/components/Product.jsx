import React, { useState,useEffect } from 'react'
import axios from 'axios'



export default function Product() {
  const [data ,setData]=useState([]);
  useEffect(() => {

   
      
    axios.get('http://localhost:5000/productData')
              .then(function (response) {
                  setData(response.data)
              },
              )
              .catch(function (error) {
                  setMesseges((pre) => {
                      return { ...pre, errorMessage: "Server Not Respond" }
  
                  })
  
              });
     
    return () => {


      
    }
  }, [])
  
 
  console.log(data);
  return (
    <div className='flex flex-row flex-wrap justify-center '>
     {
      data.map((c)=>{
      return  <div className='border-2 h-[350px] text-left my-3 bg-slate-100 w-40 sm:w-[250px] border-amber-100  mx-auto  sm:mx-[50px] rounded-md m-auto '>
         <img src={c.img} className='h-[250px] w-full p-3'></img>
          <h1 className='mx-2'>{c.productName}</h1>
          <h1 className='mx-2'>{c.categorier}</h1>
          <h1 className='mx-2'>₹ {c.price}</h1>
          <h1 className='mx-2'>rating "4/5 "</h1>

        </div>

      })
     }
     
    </div>
  )
}
