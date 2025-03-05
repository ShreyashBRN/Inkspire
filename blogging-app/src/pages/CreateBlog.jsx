import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const CreateBlog = () => {
    const [formData, setFormData] = useState({  // ✅ Define formData state
        title: "",
        content: "",
        image: "",
        category: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = localStorage.getItem("userId");
        if (!userId) {
            alert("Please log in to create a blog.");
            return;
        }

        const blogData = { ...formData, author: userId };

        try {
            const response = await fetch("http://localhost:5000/api/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blogData),
            });

            if (response.ok) {
                alert("Blog created successfully!");
                setFormData({ title: "", content: "", image: "", category: "" });
            } else {
                alert("Error creating blog.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="create-page ml-[-34px] -mt-[21px] w-[1300px] bg-[#e9e9e9]" >
          <div className="justify-center items-center min-h-screen ml-[340px] ">
            <div className="ml-[245px] relative top-[75px]  mt-[0px] text-gray-500 ">
            <FaUserCircle size={110}  />
            </div>
            <form onSubmit={handleSubmit} className="bg-white border-black rounded-md mt-3 flex flex-col justify-center items-center h-[600px] gap-7 border  w-[600px] ">
                <input className="bg-[#f2f2f2] border-black hover:bg-gray-200 w-[500px] rounded-md h-[70px] bg-transparent r text-center border outline-none" type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                <textarea className="bg-[#f2f2f2] border-black  hover:bg-gray-200 w-[500px] rounded-md h-[70px] bg-transparent  text-center border outline-none" name="content" placeholder="Content"  value={formData.content} onChange={handleChange} required />
                <input className="bg-[#f2f2f2] border-black hover:bg-gray-200 w-[500px] rounded-md h-[70px] bg-transparent r text-center border outline-none" type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
                <input className="bg-[#f2f2f2] border-black hover:bg-gray-200 w-[500px] rounded-md h-[70px] bg-transparent r text-center border outline-none" type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
                <button className="w-[500px] rounded-md h-[70px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center  transition-transform hover:scale-95 outline-none" type="submit">Create</button>
            </form>
        </div>
        </div>
    );
};

export default CreateBlog;
