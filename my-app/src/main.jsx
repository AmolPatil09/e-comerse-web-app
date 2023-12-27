import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Categories from './components/categories.jsx'
import Login from './components/Login.jsx'
import Product from './components/Product.jsx'
import Cart from './components/Cart.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
const router =createBrowserRouter([
  {path:"/",element:<App/>,
  children:[
   {
    path:'', element:<Home/>
   },
   {
    path:'home', element:<Home/>,
   },
   
   {
    path:'categories', element:<Categories/>
   },
   {
    path:'login', element:<Login/>
   },
   {
    path:'product', element:<Product/>
   },
   {
    path:'contact', element:<Contact/>
   },
   {
    path:'cart', element:<Cart/>
   }
  
  ]
 }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
