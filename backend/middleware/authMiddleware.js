const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    
        const token = req.header("Authorization");

        if(!token){
            return res.status(401).json({ message: "Access denied. No oken provided" });
        }

        try {
        const secretKey = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token." });
    }
};

module.exports = verifyToken;