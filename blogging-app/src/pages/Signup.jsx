import React from 'react'
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { firstName, lastName, email, password };

        try {
            const response = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("✅ Signup Successful:", data);
                alert("Signup successful! You can now log in.");
                navigate("/login");
            } else {
                console.log("❌ Signup Failed:", data.message);
            alert(`Signup failed: ${data.message}`);
            }
        } catch (error) {
            console.error("❌ Signup Error:", error);
        alert("Something went wrong. Please try again.");
        }
        
    };




  return (
    <div>
    <form onSubmit={handleSubmit} className='w-[400px] h-[603.99px] shadow-2xl border border-[#cfcfde] ml-[550px] mt-7 pt-[32px] pr-[40px] pb-[32px] pl-[40px] rounded-t-2xl'>
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
            <div className='flex  w-[319px] shadow-lg rounded-lg border items-center gap-2 mt-5 h-[32px] hover:bg-[#f4f4fe]'>
                <div className='ml-[70px]'>
            <FcGoogle size={22}  />
            </div>
                <p className='text-[14px] text-[#685d68]  pb-1 '>Continue with Google</p>
            </div>
        </div>

        {/* or */}
        <div className='flex ml-1 gap-5 mt-6 '>
            <div className='h-[0.5px] w-[150px] bg-[#d1d1d9] mt-3'></div>
        <div className='text-[13px] text-[#9797a4]'>or</div>
        <div className='h-[0.5px] w-[150px] bg-[#d1d1d9]  mt-3'></div>
        </div>

        {/* Name required */}
        <div className='flex gap-3 mt-7'>
            <div className='ml-1'>
            <div className='flex gap-[46px]'>
                <p className='text-[13px] font-bold'>First name</p>
                <p className='text-[10px] font-bold text-[#9797a4] pt-1'>Optional</p>
            </div>
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type='text' required className='w-[152px] h-[30px] border border-[#cfcfde] mt-2 rounded-lg text-[13px] pl-3 pb-1 outline-none' placeholder='First name' />
            </div>

            <div>
            <div className='flex gap-[46px]'>
                <p className='text-[13px] font-bold'>Last name</p>
                <p className='text-[10px] font-bold text-[#9797a4] pt-1'>Optional</p>
            </div>
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} type='text' required className='w-[152px] h-[30px] border border-[#cfcfde] mt-2 rounded-lg text-[13px] pl-3 pb-1 outline-none' placeholder='Last name' />
            </div>
        </div>

        {/* Email required */}
        <div className='mt-7 flex flex-col gap-1'>
            <p className='text-[13px] font-bold'>Email address</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email}  type='email' required className='w-[320px] h-[30px] border border-[#cfcfde] mt-2 rounded-lg text-[13px] pl-3 pb-1 outline-none' placeholder='Last name ' />
        </div>

        {/* Password required */}
        <div  className='mt-7 flex flex-col gap-1'>
            <p className='text-[13px] font-bold'>Password</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password}  type='password'  required className='w-[320px] h-[30px] border border-[#cfcfde] mt-2 rounded-lg text-[13px] pl-3 pb-1 outline-none' placeholder='Last name' />
        </div>

        {/* continue button */}
        <button type='submit' className='outline-none continue w-[320px] h-[30px] bg-[#2f6bec] mt-7 text-[13px] text-white font-bold pb-1'>Continue</button>
        
        
    </form>
    <div className='w-[400px] h-[100px] bg-[#f7f7f7] ml-[550px] rounded-b-2xl border shadow-2xl'>
        <div className='flex mt-3 gap-1 ml-24'>
            <p className='text-[13px] text-[#888484]'>Already have an account?</p>
            <Link to="/login" className='text-[13px] font-bold' href="">Sign in</Link>
        </div>

        <div className='w-full bg-[#dbd8d8] h-[0.5px] mt-4'></div>
        <p className='text-[12px] font-bold text-[#8b8a8a] ml-[155px] mt-3'>Secured by 
            <a href="">JWT</a>
        </p>
    </div>
    <div className='h-[20px]'></div>
    <div className='h-[20px]'></div>
    <div className='h-[20px]'></div>
    <div className='h-[20px]'></div>
    <div className='h-[20px]'></div>
    </div>
     
  )
}

export default Signup


// http://localhost:5173/signup