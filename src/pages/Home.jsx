import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoBookSharp } from "react-icons/io5";
import { IoManSharp } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from 'react';


const Home = () => {
  const [index, setIndex] = useState(0);

  const blogPosts = [
    {
      title1: "Health",
      title2: "Transform Your Life with Simple Health Habits: The Ultimate Guide",
      description: "In today’s fast-paced world, maintaining good health is more important than ever. The choices we make every day impact not only our physical health but also our mental and emotional well-being. it’s about incorporating small, consistent habits that create a lasting impact. From nutrition and fitness to mental wellness and quality sleep, this guide will help you unlock the secrets to a healthier, happier life.",
      image: "/wjacket2.jpg"
    },
    {
      title1: "Lifestyle",
      title2: "How to Live a Fulfilled Life: The Essential Guide to Building Meaningful Habits and Achieving Your Dreams",
      description: "Living a fulfilling life goes beyond achieving success; it's about creating a lifestyle that nurtures your happiness, health, and personal growth. This guide will explore various aspects of modern living, including wellness, productivity, self-care, and creating meaningful connections. Whether you're looking to improve your daily habits, find balance between work and personal life.",
      image: "/wjacket3.jpg"
    },
    {
      title1: "Wellnes",
      title2: "How to Cultivate a Holistic Wellness Routine: Mindfulness, Nutrition, and Fitness for a Balanced Life",
      description: "Wellness isn't just about being physically healthy; it's about nurturing your mind, body, and spirit in a way that fosters balance and happiness. In this guide, we’ll explore how to create a holistic wellness routine that prioritizes self-care, mindfulness, fitness, and nutrition. Whether you're looking to reduce stress, improve your fitness levels, or simply feel more energized, these practical tips will help you achieve a lifestyle that supports your overall well-being.",
      image: "/wjacket4.jpg"
    },
    {
      title1: "Education",
      title2: "The Power of Early Education: Why Early Childhood Development is Key to Academic Success",
      description: "Education is the key to unlocking potential, not just in the classroom but in every aspect of life. This blog explores strategies for both students and educators to foster a lifelong love of learning. From developing effective study habits and boosting academic performance to navigating the challenges of online learning and building emotional intelligence.",
      image: "/wjacket4.jpg"
    }
  ];
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
  //   }, 5000); // Changes the index every 3 seconds
  
  //   return () => clearInterval(interval); // Cleans up the interval when the component unmounts or re-renders
  // }, []); // Empty dependency array means this effect runs only once when the component mounts
  




  return (
    <div>
    <div className='bg-gray-200/65  -ml-[300px] w-[1600px] h-[500px]  font-[Parkinsans] flex flex-col'>
      <div className='flex gap-4 ml-[470px]  mt-[80px] '>

        {/* boxes */}

      <div className='bg-white w-[200px] h-[70px] rounded-[11px] flex flex-col items-center shadow-md'>
        <Link className='justify-center items-center flex flex-col mt-2'><IoBookSharp size={30} /> <p>Education</p></Link>
      </div>

      <div className='bg-white w-[200px] h-[70px] rounded-[11px] flex flex-col items-center shadow-md'>
      <Link className='justify-center items-center flex flex-col mt-2'><MdOutlineHealthAndSafety size={30} /> <p> Health</p></Link>
      </div>

      <div className='bg-white w-[200px] h-[70px] rounded-[11px] flex flex-col items-center shadow-md'>
      <Link className='justify-center items-center flex flex-col mt-2'><IoManSharp size={30} /> <p>Lifestyle</p></Link>
      </div>

      <div className='bg-white w-[200px] h-[70px] rounded-[11px] flex flex-col items-center shadow-md'>
      <Link className='justify-center items-center flex flex-col mt-2'><FaRegHeart size={30} /> <p>Wellness</p></Link>
      </div>

      {/* Boxes */}

      <div key={index}
      initial={{ opacity: 0, x: 50 }}  // Slide in from right
      animate={{ opacity: 1, x: 0 }}  // Visible
      exit={{ opacity: 0, x: -50 }}  // Slide out to left
      transition={{ duration: 0.5, ease: "easeInOut" }} className='h-72 w-[686px]  mt-[95px] -ml-[860px] flex'>
        <div className='flex flex-col gap-3'>
          <p className='w-[60px] h-[20px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-12 pt-0.5'>{blogPosts[index].title1}</p>
          <p className='w-[588px] text-[28px] leading-none'>{blogPosts[index].title2}</p>
          <p className='text-xs w-[588px] leading-4 mt-2 text-gray-500'>{blogPosts[index].description}</p>
        </div>
        <img className='w-[254px] h-[250px] mt-6 ob' src={blogPosts[index].image} alt="" />
      </div>
      

      {/* Navigation Circles */}
<div className="flex space-x-2 mt-[400px] -ml-[350px]">
  {blogPosts.map((_, i) => (
    <div
      key={i}
      className={`w-2 h-2  rounded-full cursor-pointer ${
        index === i ? 'bg-blue-500' : 'bg-gray-400'
      }`}
      onClick={() => setIndex(i)}
    ></div>
  ))}
</div>


      </div>
    </div>
    <div className='h-[50px] w-[50px]'>1</div>
    <div className='h-[50px] w-[50px]'>2</div>
    <div className='h-[50px] w-[50px]'>3</div>
    <div className='h-[50px] w-[50px]'>4</div>
    <div className='h-[50px] w-[50px]'>5</div>
    <div className='h-[50px] w-[50px]'>6</div>
    <div className='h-[50px] w-[50px]'>7</div>
    <div className='h-[50px] w-[50px]'>8</div>
    <div className='h-[50px] w-[50px]'>9</div>
    <div className='h-[50px] w-[50px]'>10</div>
    <div className='h-[50px] w-[50px]'>11</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    <div className='h-[50px] w-[50px]'>12</div>
    </div>


  )
}

export default Home