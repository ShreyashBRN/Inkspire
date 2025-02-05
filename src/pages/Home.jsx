import React from 'react'
import { Link } from 'react-router-dom'
import { IoBookSharp } from "react-icons/io5";
import { IoManSharp } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Home = () => {
  return (
    <div>
    <div className='bg-gray-100/65  -ml-[300px] w-[1600px] h-[500px]  font-[Parkinsans]'>
      <div className='flex gap-4 ml-[550px] fixed mt-[80px] '>

        {/* boxes */}

      <div className='bg-white w-[160px] h-[70px] rounded-[11px] flex flex-col items-center shadow-md'>
        <Link className='justify-center items-center flex flex-col mt-2'><IoBookSharp size={30} /> <p>Education</p></Link>
      </div>

      <div className='bg-white w-[160px] h-[70px] rounded-[11px] flex flex-col items-center shadow-md'>
      <Link className='justify-center items-center flex flex-col mt-2'><MdOutlineHealthAndSafety size={30} /> <p> Health</p></Link>
      </div>

      <div className='bg-white w-[160px] h-[70px] rounded-[11px] flex flex-col items-center shadow-md'>
      <Link className='justify-center items-center flex flex-col mt-2'><IoManSharp size={30} /> <p>Lifestyle</p></Link>
      </div>

      <div className='bg-white w-[160px] h-[70px] rounded-[11px] flex flex-col items-center shadow-md'>
      <Link className='justify-center items-center flex flex-col mt-2'><FaRegHeart size={30} /> <p>Education</p></Link>
      </div>

      {/* Boxes */}

      <div className='h-72 w-[686px]  mt-[95px] -ml-[701px] flex'>
        <div className='flex flex-col gap-3'>
          <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-12 pt-0.5'>Health</p>
          <p className='w-[480px] text-[28px] leading-none'>Transform Your Life with Simple Health Habits: The Ultimate Guide </p>
          <p className='text-xs w-[480px] leading-4 mt-2 text-gray-500'>In today’s fast-paced world, maintaining good health is more important than ever. The choices we make every day impact not only our physical health but also our mental and emotional well-being. it’s about incorporating small, consistent habits that create a lasting impact. From nutrition and fitness to mental wellness and quality sleep, this guide will help you unlock the secrets to a healthier, happier life.</p>
        </div>
        <img className='w-[204px] h-[230px] mt-12 ob' src="/wjacket2.jpg" alt="" />
      </div>

      </div>
    </div>
    </div>
  )
}

export default Home