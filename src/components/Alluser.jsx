import React from 'react'
import { FaBookmark } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const allusercards = [
    {
      category1: "Nature",
      title: "utawa",
      description: "Beautiful scenic view of the mountains.",
      image: "/wjacket2.jpg",
      username: "jacob tea",
      date: "7 Feb, 2025",
    },
    
    {
      category1: "Nature",
      title: "utawa",
      description: "Beautiful scenic view of the mountains.",
      image: "/wjacket2.jpg",
      username: "jacob tea",
      date: "7 Feb, 2025",
    },
    
    {
      category1: "Nature",
      title: "utawa",
      description: "Beautiful scenic view of the mountains.",
      image: "/wjacket2.jpg",
      username: "jacob tea",
      date: "7 Feb, 2025",
    },
    
    {
      category1: "Nature",
      title: "utawa",
      description: "Beautiful scenic view of the mountains.",
      image: "/wjacket2.jpg",
      username: "jacob tea",
      date: "7 Feb, 2025",
    },
    
    {
      category1: "Nature",
      title: "utawa",
      description: "Beautiful scenic view of the mountains.",
      image: "/wjacket2.jpg",
      username: "jacob tea",
      date: "7 Feb, 2025",
    },
  ];




const Alluser = () => {
  return (
    <div className='mt-16 ml-[95px] font-[Parkinsans] '>
        <p className='text-3xl font-[Parkinsans]'>Latest</p>
        <div className="allcardholder mt-5  flex overflow-hidden space-x-2 gap- w-[1050px] ">
        <Swiper
       modules={[Navigation]}
       slidesPerView={3.3} // 3 full cards + 1 partially visible
       spaceBetween={20} // Space between cards
       navigation // Enables left/right navigation buttons
       loop // Infinite scrolling
        >
        {allusercards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="allcard h-[400px] w-[290px] bg-white rounded-[25px] shadow-xl ">

              {/* Card Image */}
                <img className='h-[180px] w-[290px] object-cover object-top rounded-[25px] rounded-b-none' src={card.image} alt="" />

                <div className='flex'>

                  {/* Category */}
                <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-4 ml-4 pt-0.5'>{card.category1}</p>

                {/* Bookmark */}
                <FaBookmark size={26} className='ml-[200px] mr-4 mt-4  hover:text-blue-500 transition-transform hover:scale-90' />
                </div> 

                {/* heading */}
                <p className='text-2xl break-words ml-4 mr-4 mt-4 leading-4'>{card.title}</p>

                {/* dedscription */}
                <p className='text-[16px] ml-4 mr-4 mt-3 leading-5 break-words text-[#656f7b]'>{card.description}</p>


                <div className='flex gap-2'>

                  {/* user image */}
                    <img className='w-[45px] h-[45px] mt-5 ml-4 bg-black rounded-full' src="/" alt="" />

                    {/* user name */}
                    <p className='mt-8 text-[15px] text-[#656f7b]'>{card.username}</p>

                    {/* date */}
                    <p className="date text-[12px] mt-9 ml-[60px] mr-4">{card.date}</p>
                </div>
            </div>
            </SwiperSlide>
            ))}
            </Swiper>
        </div>
        <div className='w-5 h-3'></div>
    </div>
    // <div className='mt-16 ml-[95px] font-[Parkinsans] '>
    //     <p className='text-3xl font-[Parkinsans]'>Latest</p>
    //     <div className="allcardholder mt-5  flex flex-wrap gap-5 w-[1050px] bg-slate-500">
    //         <div className="allcard h-[400px] w-[310px] bg-white rounded-[25px] ring-2">
    //             <img className='h-[180px] w-[290px] object-cover object-top rounded-[25px] ' src="/wjacket2.jpg" alt="" />
    //             <div className='flex'>
    //             <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-4 ml-4 pt-0.5'>fqeeee</p>
    //             <FaBookmark size={26} className='ml-[200px] mr-4 mt-4  hover:text-blue-500 transition-transform hover:scale-90' />
    //             </div> 
    //             <p className='text-2xl break-words ml-4 mr-4 mt-4 leading-4'>The art of clean code</p>
    //             <p className='text-[16px] ml-4 mr-4 mt-3 leading-5 break-words text-[#656f7b]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptatum.</p>
    //             <div className='flex gap-2'>
    //                 <img className='w-[45px] h-[45px] mt-5 ml-4 bg-black rounded-full' src="/" alt="" />
    //                 <p className='mt-8 text-[15px] text-[#656f7b]'>Dave Smith</p>
    //                 <p className="date text-[12px] mt-9 ml-[60px] mr-4">Feb 7, 2025</p>
    //             </div>
    //         </div>
    //         <div className="allcard h-[400px] w-[310px] bg-white rounded-[25px] ring-2">
    //             <img className='h-[180px] w-[290px] object-cover object-top rounded-[25px] ' src="/wjacket2.jpg" alt="" />
    //             <div className='flex'>
    //             <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-4 ml-4 pt-0.5'>fqeeee</p>
    //             <FaBookmark size={26} className='ml-[200px] mr-4 mt-4  hover:text-blue-500 transition-transform hover:scale-90' />
    //             </div> 
    //             <p className='text-2xl break-words ml-4 mr-4 mt-4 leading-4'>The art of clean code</p>
    //             <p className='text-[16px] ml-4 mr-4 mt-3 leading-5 break-words text-[#656f7b]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptatum.</p>
    //             <div className='flex gap-2'>
    //                 <img className='w-[45px] h-[45px] mt-5 ml-4 bg-black rounded-full' src="/" alt="" />
    //                 <p className='mt-8 text-[15px] text-[#656f7b]'>Dave Smith</p>
    //                 <p className="date text-[12px] mt-9 ml-[60px] mr-4">Feb 7, 2025</p>
    //             </div>
    //         </div>
    //         <div className="allcard h-[400px] w-[310px] bg-white rounded-[25px] ring-2">
    //             <img className='h-[180px] w-[290px] object-cover object-top rounded-[25px] ' src="/wjacket2.jpg" alt="" />
    //             <div className='flex'>
    //             <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-4 ml-4 pt-0.5'>fqeeee</p>
    //             <FaBookmark size={26} className='ml-[200px] mr-4 mt-4  hover:text-blue-500 transition-transform hover:scale-90' />
    //             </div> 
    //             <p className='text-2xl break-words ml-4 mr-4 mt-4 leading-4'>The art of clean code</p>
    //             <p className='text-[16px] ml-4 mr-4 mt-3 leading-5 break-words text-[#656f7b]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptatum.</p>
    //             <div className='flex gap-2'>
    //                 <img className='w-[45px] h-[45px] mt-5 ml-4 bg-black rounded-full' src="/" alt="" />
    //                 <p className='mt-8 text-[15px] text-[#656f7b]'>Dave Smith</p>
    //                 <p className="date text-[12px] mt-9 ml-[60px] mr-4">Feb 7, 2025</p>
    //             </div>
    //         </div>
    //         <div className="allcard h-[400px] w-[310px] bg-white rounded-[25px] ring-2">
    //             <img className='h-[180px] w-[290px] object-cover object-top rounded-[25px] ' src="/wjacket2.jpg" alt="" />
    //             <div className='flex'>
    //             <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-4 ml-4 pt-0.5'>fqeeee</p>
    //             <FaBookmark size={26} className='ml-[200px] mr-4 mt-4  hover:text-blue-500 transition-transform hover:scale-90' />
    //             </div> 
    //             <p className='text-2xl break-words ml-4 mr-4 mt-4 leading-4'>The art of clean code</p>
    //             <p className='text-[16px] ml-4 mr-4 mt-3 leading-5 break-words text-[#656f7b]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptatum.</p>
    //             <div className='flex gap-2'>
    //                 <img className='w-[45px] h-[45px] mt-5 ml-4 bg-black rounded-full' src="/" alt="" />
    //                 <p className='mt-8 text-[15px] text-[#656f7b]'>Dave Smith</p>
    //                 <p className="date text-[12px] mt-9 ml-[60px] mr-4">Feb 7, 2025</p>
    //             </div>
    //         </div>
    //         <div className="allcard h-[400px] w-[310px] bg-white rounded-[25px] ring-2">
    //             <img className='h-[180px] w-[290px] object-cover object-top rounded-[25px] ' src="/wjacket2.jpg" alt="" />
    //             <div className='flex'>
    //             <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-4 ml-4 pt-0.5'>fqeeee</p>
    //             <FaBookmark size={26} className='ml-[200px] mr-4 mt-4  hover:text-blue-500 transition-transform hover:scale-90' />
    //             </div> 
    //             <p className='text-2xl break-words ml-4 mr-4 mt-4 leading-4'>The art of clean code</p>
    //             <p className='text-[16px] ml-4 mr-4 mt-3 leading-5 break-words text-[#656f7b]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptatum.</p>
    //             <div className='flex gap-2'>
    //                 <img className='w-[45px] h-[45px] mt-5 ml-4 bg-black rounded-full' src="/" alt="" />
    //                 <p className='mt-8 text-[15px] text-[#656f7b]'>Dave Smith</p>
    //                 <p className="date text-[12px] mt-9 ml-[60px] mr-4">Feb 7, 2025</p>
    //             </div>
    //         </div>
    //     </div>
        // <div className='w-5 h-3'></div>
    // </div>
  )
}

export default Alluser;