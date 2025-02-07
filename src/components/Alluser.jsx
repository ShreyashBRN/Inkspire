import React from 'react'
import { FaBookmark } from "react-icons/fa";

const allusercards = [
    {
      id: 1,
      image: "https://source.unsplash.com/400x300/?nature", // Replace with real image URLs
      category: "Nature",
      description: "Beautiful scenic view of the mountains.",
      user: { avatar: "https://i.pravatar.cc/40?img=1", name: "John Doe" },
    },
    {
      id: 2,
      image: "https://source.unsplash.com/400x300/?city",
      category: "Urban",
      description: "A vibrant city skyline at night.",
      user: { avatar: "https://i.pravatar.cc/40?img=2", name: "Jane Smith" },
    },
    {
      id: 3,
      image: "https://source.unsplash.com/400x300/?food",
      category: "Food",
      description: "Delicious gourmet dish ready to eat.",
      user: { avatar: "https://i.pravatar.cc/40?img=3", name: "Mike Johnson" },
    },
    {
      id: 4,
      image: "https://source.unsplash.com/400x300/?travel",
      category: "Travel",
      description: "Exploring the beautiful landscapes.",
      user: { avatar: "https://i.pravatar.cc/40?img=4", name: "Sara Lee" },
    },
    {
      id: 5,
      image: "https://source.unsplash.com/400x300/?technology",
      category: "Tech",
      description: "Latest gadgets and innovations.",
      user: { avatar: "https://i.pravatar.cc/40?img=5", name: "David Kim" },
    },
  ];




const Alluser = () => {
  return (
    <div className='mt-16 ml-[95px] font-[Parkinsans] '>
        <p className='text-3xl font-[Parkinsans]'>Latest</p>
        <div className="allcardholder mt-5  flex flex-wrap gap-6 w-[1500px]">
            <div className="allcard h-[400px] w-[310px] bg-white rounded-[25px] ring-2">
                <img className='h-[180px] w-[290px] object-cover object-top rounded-[25px] ' src="/wjacket2.jpg" alt="" />
                <div className='flex'>
                <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-4 ml-4 pt-0.5'>fqeeee</p>
                <FaBookmark size={26} className='ml-[200px] mr-4 mt-4  hover:text-blue-500 transition-transform hover:scale-90' />
                </div> 
                <p className='text-2xl break-words ml-4 mr-4 mt-4 leading-4'>The art of clean code</p>
                <p className='text-[16px] ml-4 mr-4 mt-3 leading-5 break-words text-[#656f7b]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptatum.</p>
                <div className='flex gap-2'>
                    <img className='w-[45px] h-[45px] mt-5 ml-4 bg-black rounded-full' src="/" alt="" />
                    <p className='mt-8 text-[15px] text-[#656f7b]'>Dave Smith</p>
                    <p className="date text-[12px] mt-9 ml-[60px] mr-4">Feb 7, 2025</p>
                </div>
            </div>
            <div className="allcard h-[400px] w-[310px] bg-white rounded-[25px] ring-2">
                <img className='h-[180px] w-[290px] object-cover object-top rounded-[25px] ' src="/wjacket2.jpg" alt="" />
                <div className='flex'>
                <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-4 ml-4 pt-0.5'>fqeeee</p>
                <FaBookmark size={26} className='ml-[200px] mr-4 mt-4  hover:text-blue-500 transition-transform hover:scale-90' />
                </div> 
                <p className='text-2xl break-words ml-4 mr-4 mt-4 leading-4'>The art of clean code</p>
                <p className='text-[16px] ml-4 mr-4 mt-3 leading-5 break-words text-[#656f7b]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptatum.</p>
                <div className='flex gap-2'>
                    <img className='w-[45px] h-[45px] mt-5 ml-4 bg-black rounded-full' src="/" alt="" />
                    <p className='mt-8 text-[15px] text-[#656f7b]'>Dave Smith</p>
                    <p className="date text-[12px] mt-9 ml-[60px] mr-4">Feb 7, 2025</p>
                </div>
            </div>
            <div className="allcard h-[400px] w-[310px] bg-white rounded-[25px] ring-2">
                <img className='h-[180px] w-[290px] object-cover object-top rounded-[25px] ' src="/wjacket2.jpg" alt="" />
                <div className='flex'>
                <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-4 ml-4 pt-0.5'>fqeeee</p>
                <FaBookmark size={26} className='ml-[200px] mr-4 mt-4  hover:text-blue-500 transition-transform hover:scale-90' />
                </div> 
                <p className='text-2xl break-words ml-4 mr-4 mt-4 leading-4'>The art of clean code</p>
                <p className='text-[16px] ml-4 mr-4 mt-3 leading-5 break-words text-[#656f7b]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptatum.</p>
                <div className='flex gap-2'>
                    <img className='w-[45px] h-[45px] mt-5 ml-4 bg-black rounded-full' src="/" alt="" />
                    <p className='mt-8 text-[15px] text-[#656f7b]'>Dave Smith</p>
                    <p className="date text-[12px] mt-9 ml-[60px] mr-4">Feb 7, 2025</p>
                </div>
            </div>
            <div className="allcard h-[400px] w-[310px] bg-white rounded-[25px] ring-2">
                <img className='h-[180px] w-[290px] object-cover object-top rounded-[25px] ' src="/wjacket2.jpg" alt="" />
                <div className='flex'>
                <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-4 ml-4 pt-0.5'>fqeeee</p>
                <FaBookmark size={26} className='ml-[200px] mr-4 mt-4  hover:text-blue-500 transition-transform hover:scale-90' />
                </div> 
                <p className='text-2xl break-words ml-4 mr-4 mt-4 leading-4'>The art of clean code</p>
                <p className='text-[16px] ml-4 mr-4 mt-3 leading-5 break-words text-[#656f7b]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptatum.</p>
                <div className='flex gap-2'>
                    <img className='w-[45px] h-[45px] mt-5 ml-4 bg-black rounded-full' src="/" alt="" />
                    <p className='mt-8 text-[15px] text-[#656f7b]'>Dave Smith</p>
                    <p className="date text-[12px] mt-9 ml-[60px] mr-4">Feb 7, 2025</p>
                </div>
            </div>
            <div className="allcard h-[400px] w-[310px] bg-white rounded-[25px] ring-2">
                <img className='h-[180px] w-[290px] object-cover object-top rounded-[25px] ' src="/wjacket2.jpg" alt="" />
                <div className='flex'>
                <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-4 ml-4 pt-0.5'>fqeeee</p>
                <FaBookmark size={26} className='ml-[200px] mr-4 mt-4  hover:text-blue-500 transition-transform hover:scale-90' />
                </div> 
                <p className='text-2xl break-words ml-4 mr-4 mt-4 leading-4'>The art of clean code</p>
                <p className='text-[16px] ml-4 mr-4 mt-3 leading-5 break-words text-[#656f7b]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptatum.</p>
                <div className='flex gap-2'>
                    <img className='w-[45px] h-[45px] mt-5 ml-4 bg-black rounded-full' src="/" alt="" />
                    <p className='mt-8 text-[15px] text-[#656f7b]'>Dave Smith</p>
                    <p className="date text-[12px] mt-9 ml-[60px] mr-4">Feb 7, 2025</p>
                </div>
            </div>
        </div>
        <div className='w-5 h-3'></div>
    </div>
  )
}

export default Alluser;