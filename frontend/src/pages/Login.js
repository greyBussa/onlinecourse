import React, { useState } from 'react'
import '../App.css';
import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
import Header from '../components/Header'; // Changed import
import Footer from '../components/Footer';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Assuming you're using React Router

// import React, {useState} from "react";
// import {  } from "../assets/icons";
// import Login from './Login';

const Login = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [data,setData] = useState({
    email : "",
    password : ""
  })
  const handleOnChange = (e) =>{
    const {name, value} = e.target
setData((preve)=>{
  return{
    ...preve,
    [name] : value
  }
})
  }
  const handleSubmit = (e) => {
    e.preventDefault() 
  }
  console.log("data login", data)
  return (
    <div>
    <Routes>
      <Route path="/" element={<Header />} /> {/* Changed to use HeaderComponent */}
    </Routes>
   <section id='login'>
<div className='mx-auto container p-4'>

<div className='bg-white p-5 w-full max-w-sm  mx-auto rounded'>
  <div className=' w-20 h-20 mx-auto '>
  <FaRegCircleUser />
  </div>
<form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
  <div className='grid'>
    <label>Email:</label>
   <div className='bg-slate-100 p-2'>
     <input type='email' value={data.email} onChange={handleOnChange} name='email' className='w-full h-full outline-none bg-transparent' placeholder='email address'/>  
   </div>
    </div>
    <div className='grid'>
    <label>Password:</label>
    <div className='bg-slate-100 p-2 flex'>
      <input type={showPassword ? "text" : "password"} name='password' onChange={handleOnChange} value={data.password } className='w-full h-full outline-none bg-transparent' placeholder='Password'/>
      <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
        <span>
          {
            showPassword ?(
              <FaEyeSlash/>
            )
            :
            (
              <FaEye/>
            )
          }
       
       
        </span>
       
      </div>
      </div>  
      <Link to={'../forgot-password'} className='block text-blue-600 w-fit ml-auto hover:underline hover:text-red-600'>
        Forgot Password?
      </Link>
    </div>
    <button className=' hover:bg-blue-600 bg-orange-600 text-white px-5 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
</form>
<p className='my-5'>
  Don't have account? <Link to={"../sign-up"} className='hover:text-red-700 text-blue-700 hover:underline'>Sign Up</Link>
</p>
  {/* <img src='' alt='login icons'/> */}
</div>
</div>
   </section>
    <Routes>
      <Route path="/" element={<Footer />} />
    </Routes>
  </div>
  )
}

export default Login

