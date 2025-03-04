import React from 'react'

const Profile = () => {
  return (
    <div className='ml-[-34px] mt-[49px] w-[1300px]'>
      <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required />
                <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
                <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
                <button type="submit">Create Blog</button>
            </form>
    </div>
  )
}

export default Profile