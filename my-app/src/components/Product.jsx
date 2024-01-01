import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useSelector ,useDispatch} from 'react-redux';



export default function Product() {
  const showCategory=useSelector((store)=>store.showCategory );
  const dispatch=useDispatch();
  const [data ,setData]=useState([]);
  const serchTerm=useSelector((store)=>store.serchTerm);
  useEffect(() => {

   
      
    axios.get('http://localhost:5000/products')
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
  
 

  return (
    <div className='flex flex-row flex-wrap justify-center'>
      {
       <div className='w-full hidden sm:flex justify-center bg-purple-500  '>
       <ul className='hidden my-4 mx-5 sm:flex' >
         <li className='mx-2  md:text-lg px-2 hover:bg-purple-400 rounded-md' onClick={()=>dispatch({type:"CHANGE_CATEGORY",payload:{category:"" }})}>
          <div className='flex flex-col justify-center text-center text-base'>
            <img src="src/assets/All.jpeg" className='h-12 w-12 rounded-full'/>
            <h1>All</h1>
          </div>
         </li>
           <li className='mx-2  md:text-lg px-2 hover:bg-purple-400 rounded-md' onClick={()=>dispatch({type:"CHANGE_CATEGORY",payload:{category:"Men" }})}>
           <div className='flex flex-col justify-center text-center text-base'>
            <img src="src/assets/shirt1.jpeg" className='h-12 w-12 rounded-full'/>
            <h1>Men</h1>
          </div>
           </li>
           <li className='mx-2  md:text-lg px-2 hover:bg-purple-400 rounded-md' onClick={()=>dispatch({type:"CHANGE_CATEGORY",payload:{category:"Women" }})}>
           <div className='flex flex-col justify-center text-center text-base'>
            <img src="src/assets/wdress1.jpeg" className='h-12 w-12 rounded-full'/>
            <h1>Women</h1>
          </div>
           </li>
           <li className='mx-2  md:text-lg px-2 hover:bg-purple-400 rounded-md' onClick={()=>dispatch({type:"CHANGE_CATEGORY",payload:{category:"Kids" }})}>
           <div className='flex flex-col justify-center text-center text-base'>
            <img src="src/assets/kides1.jpeg" className='h-12 w-12 rounded-full'/>
            <h1>Kids</h1>
          </div>
           </li>
           <li className='mx-2  md:text-lg px-2 hover:bg-purple-400 rounded-md w-auto' onClick={()=>dispatch({type:"CHANGE_CATEGORY",payload:{category:"Electronics" }})}>
           <div className='flex flex-col justify-center content-center text-center text-base'>
            <img src="src/assets/electronics.jpeg" className='h-12 w-12 rounded-full m-auto'/>
            <h1>Electronics</h1>
          </div>
           </li>
       
       </ul>
       </div>
    }
      {
      
        serchTerm?<div className='flex flex-col sm:flex-row sm:flex-wrap justify-center'>{
        data.filter((c)=>(c.name.toLowerCase().startsWith(serchTerm.toLowerCase()) ||c.category.toLowerCase().startsWith(serchTerm.toLowerCase() ) )).map((c,index)=>{
          return  <div key={index} className='border-2 min-h-[380px] min-w-[150px]  h-auto w-auto text-left my-4 bg-slate-100 sm:w-[200px] border-amber-100  mx-3  sm:mx-[50px] rounded-md m-auto '>
             <img src={c.img} className='h-[250px] w-full p-3'></img>
              <h1 className='mx-2'>{c.name}</h1>
              <h1 className='mx-2'>{c.category}</h1>
              <h1 className='mx-2'>₹ {c.price}</h1>
              <h1 className='mx-2'>{c.description}</h1>
    
            </div>
        
          
    
          })
        }
           </div>:<div>
           {
        showCategory?<div className='flex flex-col sm:flex-row sm:flex-wrap justify-center'>
          {
            data.filter((c)=>c.category===showCategory).map((c,index)=>{
              return  <div key={index} className='border-2 min-h-[380px] min-w-[150px]  h-auto w-auto text-left my-4 bg-slate-100 sm:w-[200px] border-amber-100  mx-3  sm:mx-[50px] rounded-md m-auto '>
                 <img src={c.img} className='h-[250px] w-full p-3'></img>
                  <h1 className='mx-2'>{c.name}</h1>
                  <h1 className='mx-2'>{c.category}</h1>
                  <h1 className='mx-2'>₹ {c.price}</h1>
                  <h1 className='mx-2'>{c.description}</h1>
        
                </div>
        
              })
          }
         
        </div>:
        <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center'>
          {
      data.map((c,index)=>{
      return  <div key={index} className='border-2 min-h-[380px] min-w-[150px]  h-auto w-auto text-left my-4 bg-slate-100 sm:w-[200px] border-amber-100  mx-3  sm:mx-[50px] rounded-md m-auto '>
         <img src={c.img} className='h-[250px] w-full p-3'></img>
          <h1 className='mx-2'>{c.name}</h1>
          <h1 className='mx-2'>{c.category}</h1>
          <h1 className='mx-2'>₹ {c.price}</h1>
          <h1 className='mx-2'>{c.description}</h1>

        </div>

      })
     }
        </div>
      }
           </div>
      }
      
     
     
    </div>
  )
}
