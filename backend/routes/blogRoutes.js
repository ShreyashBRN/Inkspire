const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

router.post("/", async (req, res) => {
    try{
        const { title, content, image, category, author } = req.body;
        if(!title || !content || !image || !category || !author) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newBlog = new Blog({ title, content, image, category, author });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });

    }
});

// Getting a single blog by id
router.get(":/id", async(req, res) => {
    try{
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.json(blog);
      if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
     } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
})

// router.get("/:id", (req, res) => {
//     try {
//         const blog = await Blog.findById(req.params.id);
//         if(!blog) {
//             return res.status(500).json({ message: "Blog not found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// router.post("/", async (req, res) => {
//     try {
//         const newBlog = { title, content, author } = req.body;
//         await newBlog.save();
//         res.status(201).json(newBlog);
//     } catch (error) {
//         res.status(500).json({ message: "Sever Error" });
//     }
// });

// router.put("/:id", async (req, res) => {
//     try{
//         const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true});
//         if(!updatedBlog) {
//             return res.status(404).json({ message: "Blog not found" });
//             res.json(updatedBlog);
//         } 
//     } catch (error) {
//         res.status(500).json({ message: "Server Error" });
//     }
// })

// router.delete("/:id", async(req, res) => {
//     try {
//         const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
//         if(!deletedBlog) {
//             return res.status(404).json({ message: "Blog not found" });
//             res.json(deletedBlog);
//         }
//         res.json({ message: "Blog deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // 6️⃣ Bookmark a Blog (POST /bookmark/:id)

// router.post("/bookmark/:id", async (req, res) => {
//     try {
//         con
//     }
// })

module.exports = router;