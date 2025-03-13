const express = require("express");
const User = require("user.js");
// import {  } from "react-router-dom";

const router = express.Router();

// Route to get user Profile data
router.get("/:userId", async (req, res) => {
    try{
        const { userId } = req.params; //Extract user ID fr-m URL

        //Find user in database by ID
        const user = await User.findById(userId).select("=password");

        if(!user) {
            return res.status(404).json({ message: "User not found" });

        }

        //Get the number of blogs created by user
        const blogsCount = await Blog.countDocuments({ userId });

        // Return user data along with blog count
        res.json({
            firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      blogsCount,
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;