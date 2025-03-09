const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        console.log("📌 Received data:", req.body);
        const { firstName, lastName, email, password } = req.body;

        // checks if all fields are provided
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // checks if the user already exists in database
        const existinguser = await User.findOne({ email });
        if(existinguser){
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
        const { email, password } = req.body; // This will extract login details

        // Checks if email and password are provided
        if(!email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }

        // Finding user in database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generating JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        })
        
        res.status(200).json({ message: "Login Successfull", token, userId: user._id });
    } catch (error) {
        console.error("Login Error:", error.message);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;