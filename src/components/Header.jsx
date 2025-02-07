import React from 'react'
import { FaBookmark } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex '>
        <div className='flex gap-5 w-[700px] flex-col font-[Parkinsans]'>
          <p className='text-3xl ml-[95px] mt-8 font '>Editor's Pick</p>
          <div className='flex w-[800px] flex-wrap gap-y-4'>
    
          <div className="card h-[350px] w-[300px] bg-gray-100/65 ml-[95px] rounded-3xl rounded-br-none ring-1 ring-blue-500 shadow-xl shadow-blue-500">
          <img className='rounded-tr-3xl rounded-tl-3xl h-[200px] w-[300px] object-cover object-top transition-transform hover:scale-95' src="/wjacket2.jpg" alt="" />
          <p className=' mt-3 text-[14px] ml-3 mr-3 break-words text-black leading-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum nobis non magni repudiandae laudantium nam quam fugit, libero </p>
          <div className="userinfo flex ml-3 mt-6 gap-1">
          <img className='h-[40px] w-[40px] bg-black rounded-full transition-transform hover:scale-95' src="" alt="" />
          <p className='text-2xl mt-1 transition-transform hover:scale-95'>Usename</p>
          <FaBookmark size={34} className='ml-[105px] mt-1  hover:text-blue-500 transition-transform hover:scale-90' />
          </div>
          </div>
    
          <div className="card h-[350px] w-[300px] bg-gray-100/65 ml-[20px] rounded-3xl rounded-bl-none ring-1 ring-blue-500 shadow-xl shadow-blue-500">
          <img className='rounded-tr-3xl rounded-tl-3xl h-[200px] w-[300px] object-cover object-top transition-transform hover:scale-95' src="/wjacket2.jpg" alt="" />
          <p className=' mt-3 text-[14px] ml-3 mr-3 break-words text-black leading-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum nobis non magni repudiandae laudantium nam quam fugit, libero </p>
          <div className="userinfo flex ml-3 mt-6 gap-1">
          <img className='h-[40px] w-[40px] bg-black rounded-full transition-transform hover:scale-95' src="" alt="" />
          <p className='text-2xl mt-1 transition-transform hover:scale-95'>Usename</p>
          <FaBookmark size={34} className='ml-[105px] mt-1  hover:text-blue-500 transition-transform hover:scale-90' />
          </div>
          </div>
    
          <div className="card h-[350px] w-[300px] bg-gray-100/65 ml-[95px] rounded-3xl rounded-tr-none ring-1 ring-blue-500 shadow-xl shadow-blue-500">
          <img className='rounded-tr-3xl rounded-tl-3xl h-[200px] w-[300px] object-cover object-top transition-transform hover:scale-95' src="/wjacket2.jpg" alt="" />
          <p className=' mt-3 text-[14px] ml-3 mr-3 break-words text-black leading-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum nobis non magni repudiandae laudantium nam quam fugit, libero </p>
          <div className="userinfo flex ml-3 mt-6 gap-1">
          <img className='h-[40px] w-[40px] bg-black rounded-full transition-transform hover:scale-95' src="" alt="" />
          <p className='text-2xl mt-1 transition-transform hover:scale-95'>Usename</p>
          <FaBookmark size={34} className='ml-[105px] mt-1  hover:text-blue-500 transition-transform hover:scale-90' />
          </div>
          </div>
    
          <div className="card h-[350px] w-[300px] bg-gray-100/65 ml-[20px] rounded-3xl rounded-tl-none ring-1 ring-blue-500 shadow-xl shadow-blue-500">
          <img className='rounded-tr-3xl rounded-tl-3xl h-[200px] w-[300px] object-cover object-top transition-transform hover:scale-95' src="/wjacket2.jpg" alt="" />
          <p className=' mt-3 text-[14px] ml-3 mr-3 break-words text-black leading-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum nobis non magni repudiandae laudantium nam quam fugit, libero </p>
          <div className="userinfo flex ml-3 mt-6 gap-1">
          <img className='h-[40px] w-[40px] bg-black rounded-full transition-transform hover:scale-95' src="" alt="" />
          <p className='text-2xl mt-1 transition-transform hover:scale-95'>Usename</p>
          <FaBookmark size={34} className='ml-[105px] mt-1  hover:text-blue-500 transition-transform hover:scale-90' />
          </div>
          </div>
    
          </div>
          </div>
          <div className='flex-col  mt-9 ml-7 gap-3'>
            <p className='text-3xl ml-44'>Our Sponsor</p>
          <div className="sponsor w-[300px] mt-4 ml-28 h-[300px] bg-slate-600 rounded-3xl">
          </div>
    
          </div>
        </div>
  )
}

export default Header