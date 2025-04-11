import React, { useEffect, useState } from 'react'
import { use } from 'react';
import { CiMapPin } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Profile = () => {

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Get user Id from url parameters
  const { userId } = useParams();
  console.log("User ID from URL:", userId); // Debugging check

  useEffect(() => {

    // ✅ Show loading state until user data is fetched
  if (!user) {
    return (
      setError("User ID is missing"),
      return,
    );
  }




    const fetchUserData = async () => {
      try {
        //Make a GET request to backend api
        const response = await fetch(`http://localhost:5000/api/users/${userId}`);

        // Convert responde to JSON format
        const data = await response.json();

        // If response is not OK threw a error
        if(!response.ok){
          throw new Error(data.message || "Failed to fetch user data");
        }

        //stored fetched user data in space
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserData();
  }, [userId]);

   // Show error message if any error occurs
   if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  // Show loading message if user data hasn't loaded yet
  if (!user) {
    return <p>Loading...</p>;
  }
  

  return (
    <div className='-ml-8 mt-[48px] w-[1300px] h-screen flex gap-10 bg-[#eeeff2] font-[Parkinsans]'>
      <div className='w-[800px] ml-12 h-[500px] bg-white shadow-2xl mt-10 rounded-3xl'>
        <img className='w-[800px] h-[200px] rounded-t-3xl' src="/rm222batch2-mind-03.jpg" alt="" />
      <img className='relative h-40 w-40 bottom-20 left-10 bg-slate-200 rounded-full' src="/9440461.jpg" alt="" />

        <div className="uname flex flex-col relative -top-[56px] left-10 gap-2">
          <div className='flex gap-3 text-[30px]'>
        <p className="fname">{user.firstName}</p>
        <p className="sname">{user.lastName}</p>
        </div>
        <div className='flex -ml-1'>
          <div className='text-blue-400'>
        <CiMapPin size={25} /></div> <p className='text-[17px] text-[#777b83]'> 03/12/2025 </p>
        </div>
        <p className='text-[17px] text-[#777b83]'>{user.email}</p>
        <div className='flex gap-2'>
        <p className='text-[17px] text-[#777b83]'>Blogs Created: {user.blogsCount}</p>
        <p className='text-[17px] text-[#777b83]'>0</p>
        </div>
        </div>

      </div>


      <div className='w-[360px] mt-10 h-[500px] shadow-2xl bg-white rounded-3xl pl-8 pr-8 pt-5 flex flex-col gap-8'>
        <p className='text-[27px]'>Recommended Blog's</p>

        <a href="https://www.billboard.com/" 
  target="_blank" 
  rel="noopener noreferrer" className='flex flex-col gap-2 -mt-2'>
          <div className='flex gap-3'>
          <div className='text-blue-400'>
        <FaBook size={30} />
        </div>
        <p className='text-[20px]'>Billboard</p>
        </div>
        <p className='text-[11px] text-[#777b83]'>Best known for the Hot 100 and Billboard 200, which list the most popular songs and albums each...</p>
        </a>

        <a href="https://www.businessinsider.com/" 
  target="_blank" 
  rel="noopener noreferrer" className='flex flex-col gap-2'>
          <div className='flex gap-3'>
          <div className='text-blue-400'>
        <FaBook size={30} />
        </div>
        <p className='text-[20px]'>	Business Insider</p>
        </div>
        <p className='text-[11px] text-[#777b83]'>High-end business journalism keeping readers up-to-date on economic news as well as  interviews...</p>
        </a>

        <a href="https://people.com/" 
  target="_blank" 
  rel="noopener noreferrer" className='flex flex-col gap-2'>
          <div className='flex gap-3'>
          <div className='text-blue-400'>
        <FaBook size={30} />
        </div>
        <p className='text-[20px]'>People</p>
        </div>
        <p className='text-[11px] text-[#777b83]'>Covers all things showbusiness, including celebrity gossip, entertainment news, and the late shows..</p>
        </a>

        <a href="https://www.tmz.com/" 
  target="_blank" 
  rel="noopener noreferrer" className='flex flex-col gap-2'>
          <div className='flex gap-3'>
          <div className='text-blue-400'>
        <FaBook size={30} />
        </div>
        <p className='text-[20px]'>TMZ</p>
        </div>
        <p className='text-[11px] text-[#777b83]'>Podcasts, interviews, videos, and photo galleries covering the latest entertainment news in Australia...</p>
        </a>

      </div>
    </div>
  )
}

export default Profile