import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Blogs = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // fetching blog data from using id
    const fetchBlog = async () => {
      try {
        const response = await fetch("`http://localhost:5173/api/blogs/${id}`")
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  if(!blog) {
    return <p className="text-center text-2xl mt-10">Loading blog...</p>;
  }




  return (
    <div className='-ml-[34px] mt-[40px] w-[1400px] bg-[#eeeff2] h-screen flex  justify-center items-center font-[Parkinsans]'>
      <div className='box w-[1200px] h-[600px] mr-[103px] bg-white shadow-2xl border border-[#d0d3dc] -mt-[50px] rounded-2xl flex flex-col '>
        <div className='flex '>
      <div className='flex '>
      <img className='w-[45px] h-[45px] mt-3 ml-4 bg-black rounded-full' src="/" alt="" />
      <p className='px-2 pt-6 whitespace-nowrap text-gray-600'>Usenaffgtgth rgrgrrrgd</p>
      </div>
      <p className='ml-[820px] pt-6 text-xl text-gray-600'>3/4/5555</p>
      </div>
      <div className='w-[1199px] h-[1px] mt-[20px] bg-[#48494c]'></div>
      <div className='flex gap-12'>
      <p className='  w-[80px] h-[25px] bg-[linear-gradient(0deg,#38bdf8_0%,#3b82f6_100%)] text-center rounded-md text-white text-xs mt-4 ml-14 pt-1'>Education</p>
      <p className='pt-3 text-3xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, </p>
      </div>
      <p className='ml-14 mt-10 text-justify mr-14 text-gray-600 leading-7    255'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt expedita enim ullam vel quod odit quos placeat corporis magni animi nesciunt iure, delectus assumenda dolore provident. Libero dolorem sapiente rem, beatae earum nisi corporis veritatis, iusto aut quasi, tempore iure consequatur blanditiis at odit id accusamus fugit labore aliquid? Quo ipsum debitis quasi nostrum, architecto ad veritatis fuga odio ipsam officia laborum ea ullam vel odit magnam, sequi praesentium facere nesciunt voluptas et dolor doloremque repellendus, asperiores cupiditate. Laboriosam molestiae voluptate eos deserunt impedit, numquam minima illo temporibus, dicta nesciunt tempore suscipit ipsa cumque consequatur, repellat totam facilis quae magnam quas et consectetur exercitationem! Nulla nobis cum culpa, sequi dignissimos tempore magni iste quam totam similique illum dolorum? Dolorum nesciunt laudantium voluptas iure, veritatis ab. Molestiae inventore ad ea dolorum temporibus fuga id similique explicabo libero blanditiis laboriosam quas iusto consequuntur odit error possimus suscipit tenetur, fugiat accusantium atque recusandae nisi dolore aliquam. Eveniet nihil, expedita illum iste omnis velit temporibus quos sint, tenetur impedit obcaecati corrupti ad. Quis corrupti placeat deserunt, id a necessitatibus vero iusto obcaecati commodi nostrum molestiae illum! Rem, voluptates commodi quam aliquam debitis itaque praesentium, odio quos earum sapiente, inventore velit eum explicabo perferendis illo quod quas quaerat molestiae! Eveniet tempore fuga, architecto omnis ipsa aperiam, expedita consequuntur debitis, magni velit labore ad amet? Quos, voluptates sint, temporibus dolorem quia esse, illum nihil eos consequatur explicabo ut alias maxime aperiam unde perferendis quae tempore voluptatibus ipsa. Aspernatur ex voluptatibus, est dolore iusto distinctio, ratione numquam tenetur, quaerat et rerum maxime.</p>

      </div>
    </div>
  )
}

export default Blogs