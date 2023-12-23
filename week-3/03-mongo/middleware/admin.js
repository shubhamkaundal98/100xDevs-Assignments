const {Admin} = require("../db/index")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const user = req.headers.username
    
    const existingUser = await Admin.findOne({username:user})
    if(!existingUser){
        res.status(404).json({message : "Admin doesn't exist"})
    }

    next();
}

module.exports = adminMiddleware;