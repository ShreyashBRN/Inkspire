const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.router();

router.post("/signup", async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        // checks if all fields are provided
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // checks if the user already exists in database
        const existinguser = await User.findOne({ email });
        if(!existinguser){
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash the password before saving (encrypt it)
        const hashedPassword = await bcrypt.hash(password, 10);

        // create and save the user
        const newUser = new User({ firstName, lastName, email, password: hashedPassword });
        await newUser.save();
        res.status(500).json({ message: "User registered Successfully" });
    } catch (error){
        console.error("Signup Error:", error.message);
        res.status(500).json({ message: "Server error" });
    }
});


// User login route
router.post("/login", async (req, res) => {
    try {
        const { email, password }= req.body; // This will extract login details

        // Checks if email and password are provided
        if(!email || !password){
            return res.status(400).json({ message: "Email and password required" });
        }

        // compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ message: "Invalid email or password" });
        }
        
        res.status(200).json({ message: "Login Successfull", userId: user._id });
    } catch (error) {
        console.error("Login Error:", error.message);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;