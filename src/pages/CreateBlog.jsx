import React from 'react'
import { Link } from "react-router-dom";

const CreateBlog = () => {
  return (
    <div>
       <div className="create-page">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required />
                <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
                <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
                <button type="submit">Create Blog</button>
            </form>
        </div>
    </div>
  )
}

export default CreateBlog