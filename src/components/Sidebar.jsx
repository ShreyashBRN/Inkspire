import { NavLink } from "react-router-dom";
// import { FaHome, FaPlusCircle, FaUser, FaInfoCircle } from "react-icons/fa";

// export default function Sidebar() {
//   return (
//     <div className="h-screen w-60 bg-gray-900 text-white fixed flex flex-col items-center py-6">
//       <h1 className="text-2xl font-bold mb-10">My Blog</h1>
//       <nav className="flex flex-col gap-6">
//         <Link to="/" className="flex items-center gap-3 text-lg hover:text-blue-400">
//           <FaHome /> Home
//         </Link>
//         <Link to="/create" className="flex items-center gap-3 text-lg hover:text-blue-400">
//           <FaPlusCircle /> Create Blog
//         </Link>
//         <Link to="/profile" className="flex items-center gap-3 text-lg hover:text-blue-400">
//           <FaUser /> My Profile
//         </Link>
//         <Link to="/about" className="flex items-center gap-3 text-lg hover:text-blue-400">
//           <FaInfoCircle /> About
//         </Link>
//       </nav>
//     </div>
//   );
// }
import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegBookmark } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

const Sidebar = () => {
  return (
    <div className='bg-[#ffff] h-screen w-[230px] fixed top-16 left-0 shadow-xl flex  flex-col gap-2 font-[Parkinsans]'>

      {/* Home Link */}
<NavLink to="/" className={({ isActive}) => `flex h-11 w-[230px] ml-7 mt-11 gap-5 text- text-[15px] ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`}>
    <AiOutlineHome size={35} /> Home
  </NavLink>

  {/* Create Link */}
  <NavLink to="/create" className={({ isActive}) => `flex h-11 w-[230px] ml-7 mt-2 gap-5  text-[15px] ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`}>
          <IoCreateOutline size={35} /> Create
        </NavLink>

        {/* Profile Link */}
  <NavLink to="/profile" className={({ isActive}) => `flex h-11 w-[230px] ml-7 mt-2 gap-5  text-[15px] ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`}>
          <CgProfile size={35} /> Profile 
        </NavLink>

        {/* Saved Link */}
  <NavLink to="/saved" className={({ isActive}) => `flex h-11 w-[230px] ml-7 mt-2 gap-5  text-[15px] "  ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`}>
          <FaRegBookmark size={35} /> Saved
        </NavLink>

        {/* About Link */}
  <NavLink to="/about" className={({ isActive}) => `flex h-11 w-[230px] ml-7 mt-80 gap-5  text-[15px] "  ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`}>
          <FcAbout size={35} /> About
        </NavLink>

  </div>



//     <div className='bg-[#ffff] h-screen w-[230px] fixed top-16 left-0 shadow-xl flex flex-col gap-2 font-[Parkinsans]'>

// <NavLink to="/" className="flex h-11 w-[230px] ml-7 mt-11 gap-5 hover:text-blue-400 text-[20px] ">
//     <AiOutlineHome size={35} /> Home
//   </NavLink>

//   <NavLink to="/create" className="flex h-11 w-[230px] ml-7 mt-2 gap-5 hover:text-blue-400 text-[20px] "  activeClassName="text-blue-400">
//           <IoCreateOutline size={35} /> Create
//         </NavLink>

//   <NavLink to="/profile" className="flex h-11 w-[230px] ml-7 mt-2 gap-5 hover:text-blue-400 text-[20px] "  activeClassName="text-blue-400">
//           <CgProfile size={35} /> Profile 
//         </NavLink>

//   <NavLink to="/saved" className="flex h-11 w-[230px] ml-7 mt-2 gap-5 hover:text-blue-400 text-[20px] "  activeClassName="text-blue-400">
//           <FaRegBookmark size={35} /> Saved
//         </NavLink>

//   <NavLink to="/about" className="flex h-11 w-[230px] ml-7 mt-80 gap-5 hover:text-blue-400 text-[20px] "  activeClassName="text-blue-400">
//           <FcAbout size={35} /> About
//         </NavLink>

//   </div>
  )
}

export default Sidebar