import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <div className='z-10 bg-black mix-blend-overlay pb-2 sticky'>
      <div className='flex justify-between items-center'>
        <div className='p-5 flex text-4xl font-semibold py-1 ml-2 mt-2 rounded-full'>
          <img className="w-10" src={logo} alt="logo" />
          <span className="pl-3 text-white">Career Guide</span>
        </div>
        <div className='space-x-5 text-2xl cursor-pointer font-semibold '>
          <Link to="/"><a className=' text-white text-2xl mt-7 py-1 px-4 rounded-full '>Home</a></Link>
          <a className=' text-white text-2xl mt-7 py-1 px-4 rounded-full '>Learn</a>
          <a className=' text-white text-2xl mt-7 py-1 px-4 rounded-full '>About Us</a>
        </div>
        <div className='space-x-4 text-2xl cursor-pointer font-semibold mr-12 '>
          {(!localStorage.getItem("authtoken")? 
          <Link to="/login"><button className='bg-blue-500 text-white text-2xl py-1 px-4 rounded-md mt-2'>Sign In</button></Link> : 
          <Link to="/profile"><button className='bg-blue-500 text-white text-2xl py-1 px-4 rounded-md mt-2'>Profile</button></Link>)}
          
        </div>
      </div>

    </div>
  )
}
