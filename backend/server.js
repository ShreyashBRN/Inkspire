const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config(); // Load environment variables

// Initializing express app
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRoutes);

// Connecting to MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((error) => console.log("❌ MongoDB connection error:", error));

// Defining route
app.get('/', (req, res) => {
    res.send("✅ Backend is Running!");
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});








// explain every step what it does with proper meaning i dont know anything at all