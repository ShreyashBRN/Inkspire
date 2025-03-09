import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    
    <div className='w-[400px] h-[563.99px] shadow-2xl border border-blue-400 ml-[550px] mt-16 pt-[32px] pr-[40px] pb-[32px] pl-[40px]'>
        <div className='flex items-center justify-center gap-1 -mt-3'>

            {/* Inkspire heading */}
        <div className="bg-slate-500 w-6 h-6 mt-2 ml-2  rounded-md bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-2xl text-center  text-white ">I</div>
        <p className='text-xl pt-3 font-bold font-[Parkinsans]'>Inkspire</p>
        </div>

        {/* Create your account */}
        <div className='flex flex-col gap-4 text-center mt-7'>
            <div className='flex flex-col gap-[1px]  '>
                <div className='text-[17px] font-bold text-[#212126]'>Create your account</div>
                <div className='text-[13px] text-[#867686]'>Welcome! Please fill in the details to get started.</div>
            </div>
            <div className='flex  w-[319px] shadow-lg rounded-lg border items-center gap-2 mt-6'>
                <div className='ml-[70px]'>
            <FcGoogle size={22}  />
            </div>
                <p className='text-[14px] text-[#685d68]  pb-1'>Continue with Google</p>
            </div>
        </div>
        
        <div>or</div>
        
        
    </div>
     
  )
}

export default Signup


// http://localhost:5173/signup