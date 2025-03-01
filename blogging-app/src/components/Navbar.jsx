import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='top-0 left-0 w-full h-16 bg-[#ffff] fixed shadow-md flex gap-2 z-50'>
      <div className="bg-slate-500 w-12 h-12 mt-2 ml-2 rounded-md bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-5xl text-center text-white ">I</div>
      <p className='text-4xl pt-3 font-bold font-[Parkinsans]'>Inkspire</p>
      <div className='mr-1 flex absolute right-0 gap-2 top-2 '>
        <div className='hover:text-blue-400'>
      <CiMail size={48} />
      </div>
      <div className='hover:text-red-500'>
      <IoLogOutOutline size={48} />
      </div>
      </div>
      
    </div>
  )
}

export default Navbar