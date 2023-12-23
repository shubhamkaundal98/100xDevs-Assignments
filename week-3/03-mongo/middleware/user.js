const {User} = require("../db/index")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const user = req.headers.username
    const pass = req.headers.password

    const existingUser = await User.findOne({Username : user})

    if(!existingUser){
        res.status(404).json({message : "User doesn't exist"})
    }

    next();
}

module.exports = userMiddleware;